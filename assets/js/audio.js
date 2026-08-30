(function () {
  const buttons = Array.from(document.querySelectorAll('[data-audio-toggle]'));
  if (!buttons.length) return;

  let apiPromise;
  let iframe;
  let widget;
  let ready = false;
  let playing = false;
  let wanted = false;
  let failed = false;
  let timeoutId;

  const statuses = buttons.map((button) => document.getElementById(button.getAttribute('aria-describedby'))).filter(Boolean);
  const setStatus = (message) => statuses.forEach((node) => { node.textContent = message; });
  const sync = () => buttons.forEach((button) => {
    button.setAttribute('aria-pressed', String(wanted || playing));
    button.textContent = playing ? 'MUSIK PAUSIEREN' : 'MUSIK';
  });
  const fail = () => {
    window.clearTimeout(timeoutId);
    failed = true;
    ready = false;
    playing = false;
    wanted = false;
    sync();
    setStatus('Musik konnte nicht geladen werden. Erneut versuchen.');
  };
  const loadApi = () => {
    if (window.SC && window.SC.Widget) return Promise.resolve();
    if (apiPromise) return apiPromise;
    apiPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://w.soundcloud.com/player/api.js';
      script.async = true;
      script.addEventListener('load', resolve, { once: true });
      script.addEventListener('error', reject, { once: true });
      document.head.appendChild(script);
    });
    return apiPromise;
  };
  const createPlayer = async (button) => {
    if (widget) return;
    if (!button.dataset.playerSrc) throw new Error('Kein Musiklink vorhanden');
    await loadApi();
    const mount = document.createElement('div');
    mount.className = 'soundcloud-mount';
    mount.setAttribute('aria-hidden', 'true');
    iframe = document.createElement('iframe');
    iframe.title = 'SoundCloud-Musikplayer';
    iframe.allow = 'autoplay';
    iframe.src = button.dataset.playerSrc;
    mount.appendChild(iframe);
    document.body.appendChild(mount);
    widget = window.SC.Widget(iframe);
    widget.bind(window.SC.Widget.Events.READY, () => {
      window.clearTimeout(timeoutId);
      ready = true;
      failed = false;
      setStatus(wanted ? 'Musik wird gestartet.' : 'Musik ist bereit.');
      if (!wanted) return;
      const start = Number(button.dataset.startMs || 0);
      if (start > 0) widget.seekTo(start);
      window.setTimeout(() => { if (wanted) widget.play(); }, start > 0 ? 300 : 0);
    });
    widget.bind(window.SC.Widget.Events.PLAY, () => { playing = true; wanted = true; sync(); setStatus('Musik läuft.'); });
    widget.bind(window.SC.Widget.Events.PAUSE, () => { playing = false; wanted = false; sync(); setStatus('Musik pausiert.'); });
    widget.bind(window.SC.Widget.Events.FINISH, () => { playing = false; wanted = false; sync(); setStatus('Musik beendet.'); });
    if (window.SC.Widget.Events.ERROR) widget.bind(window.SC.Widget.Events.ERROR, fail);
    timeoutId = window.setTimeout(() => { if (!ready) fail(); }, 8000);
  };
  const toggle = async (button) => {
    if (failed) {
      failed = false;
      apiPromise = undefined;
      widget = undefined;
      if (iframe) iframe.closest('.soundcloud-mount').remove();
      iframe = undefined;
    }
    if (playing || (wanted && !ready)) {
      wanted = false;
      sync();
      setStatus(ready ? 'Musik pausiert.' : 'Musikstart abgebrochen.');
      if (ready) widget.pause();
      return;
    }
    wanted = true;
    sync();
    setStatus('Musik wird geladen.');
    try {
      await createPlayer(button);
      if (ready) widget.play();
    } catch (error) {
      fail();
    }
  };
  buttons.forEach((button) => button.addEventListener('click', () => toggle(button)));
  sync();
})();
