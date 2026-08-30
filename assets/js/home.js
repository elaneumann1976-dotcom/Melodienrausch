/* =============================================================
   MELODIENRAUSCH — Startseite: Musiksteuerung
   Wiedergabelogik unverändert aus dem bisherigen index.html
   übernommen (gleicher Track, gleiche Startposition, gleiches
   Fehlerverhalten) — nur an den neuen "MUSIK"-Button im Header
   angepasst.
   ============================================================= */
(function () {
  const musicToggle = document.getElementById('music-toggle');
  const statusRegion = document.getElementById('music-status');
  if (!musicToggle) return;

  const START_MS = 2021000;

  let scWidget = null;
  let widgetReady = false;
  let pendingPlay = false;
  let soundStarted = false;
  let isPlaying = false;
  let soundcloudFailed = false;
  let fadeStarted = false;
  let loadTimeoutId = null;

  function announce(text) {
    if (statusRegion) statusRegion.textContent = text;
  }

  function updateToggleState() {
    musicToggle.setAttribute('aria-pressed', String(isPlaying));
  }

  function markSoundcloudFailed() {
    if (soundcloudFailed) return;
    soundcloudFailed = true;
    pendingPlay = false;
    isPlaying = false;
    updateToggleState();
    announce('Musik konnte nicht geladen werden.');
  }

  function fadeVolumeIn() {
    const startVol = 10;
    const endVol = 100;
    const durationMs = 5000;
    const stepMs = 100;
    const steps = durationMs / stepMs;
    const increment = (endVol - startVol) / steps;
    let current = startVol;
    const fadeInterval = setInterval(() => {
      current += increment;
      if (current >= endVol) {
        current = endVol;
        clearInterval(fadeInterval);
      }
      scWidget.setVolume(current);
    }, stepMs);
  }

  function beginPlayback() {
    if (!soundStarted) {
      soundStarted = true;
      scWidget.seekTo(START_MS);
      scWidget.setVolume(10);
    }
    scWidget.play();
  }

  function requestPlay() {
    if (soundcloudFailed) {
      announce('Musik konnte nicht geladen werden.');
      return;
    }
    if (widgetReady && scWidget) {
      beginPlayback();
      return;
    }
    pendingPlay = true;
    if (!loadTimeoutId) {
      loadTimeoutId = setTimeout(() => {
        if (!widgetReady) markSoundcloudFailed();
      }, 6000);
    }
  }

  function pauseMusic() {
    if (scWidget && widgetReady) scWidget.pause();
    isPlaying = false;
    updateToggleState();
  }

  window.addEventListener('load', () => {
    const scIframe = document.getElementById('sc-hidden-player');
    if (window.SC && scIframe) {
      scWidget = SC.Widget(scIframe);

      scWidget.bind(SC.Widget.Events.READY, () => {
        widgetReady = true;
        if (loadTimeoutId) { clearTimeout(loadTimeoutId); loadTimeoutId = null; }
        if (pendingPlay) { pendingPlay = false; beginPlayback(); }
      });

      scWidget.bind(SC.Widget.Events.PLAY, () => {
        isPlaying = true;
        soundcloudFailed = false;
        updateToggleState();
        announce('');
        if (!fadeStarted) { fadeStarted = true; fadeVolumeIn(); }
      });
      scWidget.bind(SC.Widget.Events.PAUSE, () => {
        isPlaying = false;
        updateToggleState();
      });
      scWidget.bind(SC.Widget.Events.FINISH, () => {
        isPlaying = false;
        updateToggleState();
      });
      if (SC.Widget.Events.ERROR) {
        scWidget.bind(SC.Widget.Events.ERROR, markSoundcloudFailed);
      }
    } else {
      markSoundcloudFailed();
    }
  });

  musicToggle.addEventListener('click', () => {
    if (isPlaying) { pauseMusic(); } else { requestPlay(); }
  });
})();
