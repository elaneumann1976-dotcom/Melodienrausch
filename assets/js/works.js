/* =============================================================
   MELODIENRAUSCH — Werke (Phase 2, aktualisiert auf Notion-Daten)
   Erwartet: WORKS (assets/js/works-data.js) ist bereits geladen.

   Diese Phase zeigt bewusst KEINEN Werkstatus und KEINEN
   "Werk anfragen"-Link, weil die Verfügbarkeitsdaten in Notion noch
   nicht vollständig gepflegt sind. Auch keine Filterzeile, da aktuell
   keine echte, durchgängig gepflegte Kategorie (Jahr/Stil/Farbwelt)
   für eine sinnvolle Filterung vorliegt — siehe Abschlussbericht.
   ============================================================= */
(function () {
  'use strict';

  if (typeof WORKS === 'undefined' || !Array.isArray(WORKS)) return;

  /* Bildmaße für width/height-Attribute (verhindert Layout Shifts). */
  const IMAGE_DIMENSIONS = {
    'bilder/unearthed-place.jpg': [1333, 2000],
    'bilder/spuren-und-wege.jpg': [607, 716],
    'bilder/silent-core.jpg': [303, 396],
    'bilder/spuren-in-beton.jpg': [677, 471],
    'bilder/symmetrie-der-stille.jpg': [1700, 1208],
    'bilder/gelbes-echo.jpg': [387, 503],
    'bilder/fragmentierte-einheit.jpg': [1402, 1122],
    'bilder/linie-im-blau.jpg': [1096, 824],
    'bilder/unter-strom.png': [272, 255],
    'bilder/drei-tore-ins-licht-1.jpg': [300, 825],
    'bilder/drei-tore-ins-licht-2.jpg': [245, 683],
    'bilder/drei-tore-ins-licht-3.jpg': [312, 886]
  };

  function firstImage(work) {
    if (work.images && work.images.length) return work.images[0];
    return work.image || null;
  }
  function allImages(work) {
    if (work.images && work.images.length) return work.images;
    return work.image ? [work.image] : [];
  }
  function techShort(work) {
    if (!work.technique) return '';
    return work.technique.split(/,|\./)[0].trim();
  }
  function describeArtwork(work) {
    const bits = [work.title];
    if (work.technique) bits.push(techShort(work));
    return bits.join(' — ');
  }

  const worksWithIndex = WORKS.map((w, i) => ({
    work: w,
    displayNum: String(i + 1).padStart(2, '0'),
    slug: w.slug
  }));
  const worksBySlug = new Map(worksWithIndex.map((e) => [e.slug, e]));

  const grid = document.getElementById('worksGrid');
  const indexLabel = document.getElementById('worksIndexCount');

  const dialog = document.getElementById('workDialog');
  const dialogMedia = document.getElementById('workDialogMedia');
  const dialogNum = document.getElementById('workDialogNum');
  const dialogTitle = document.getElementById('workDialogTitle');
  const dialogFacts = document.getElementById('workDialogFacts');
  const dialogDescription = document.getElementById('workDialogDescription');
  const dialogManifest = document.getElementById('workDialogManifest');
  const dialogActions = document.getElementById('workDialogActions');
  const dialogPrev = document.getElementById('workDialogPrev');
  const dialogNext = document.getElementById('workDialogNext');
  const dialogClose = document.getElementById('workDialogClose');

  if (!grid || !dialog) return;

  let currentIndex = -1;
  let invokingCard = null;

  /* Das Grid ist bereits als statisches HTML vorhanden (ohne JS sichtbar).
     Hier wird nur ergänzt, falls ein Werk aus den Daten dort fehlen sollte. */
  function buildCard(entry) {
    const { work, displayNum, slug } = entry;
    const li = document.createElement('li');
    li.className = 'works-grid__item';
    li.dataset.slug = slug;

    const img = firstImage(work);
    const dims = img ? IMAGE_DIMENSIONS[img] : null;

    const a = document.createElement('a');
    a.className = 'work-card';
    a.href = '#' + slug;
    a.dataset.slug = slug;
    const yearText = work.year ? String(work.year) : '';
    a.setAttribute('aria-label', `${work.title}${yearText ? ', ' + yearText : ''}, Werkdetails öffnen`);

    const num = document.createElement('span');
    num.className = 'work-card__num';
    num.textContent = 'NO. ' + displayNum;
    a.appendChild(num);

    if (img) {
      const media = document.createElement('span');
      media.className = 'work-card__media';
      const imageEl = document.createElement('img');
      imageEl.src = img;
      imageEl.alt = describeArtwork(work);
      if (dims) { imageEl.width = dims[0]; imageEl.height = dims[1]; }
      imageEl.loading = 'lazy';
      imageEl.decoding = 'async';
      media.appendChild(imageEl);
      a.appendChild(media);
    }

    const title = document.createElement('span');
    title.className = 'work-card__title';
    title.textContent = work.title;
    a.appendChild(title);

    const metaParts = [yearText, techShort(work)].filter(Boolean);
    if (metaParts.length) {
      const meta = document.createElement('span');
      meta.className = 'work-card__meta';
      meta.textContent = metaParts.join(' / ');
      a.appendChild(meta);
    }

    li.appendChild(a);
    return li;
  }

  function renderGrid() {
    worksWithIndex.forEach((entry) => {
      if (!grid.querySelector(`[data-slug="${entry.slug}"]`)) {
        grid.appendChild(buildCard(entry));
      }
    });
  }

  /* ---------- Dialog ---------- */
  function renderDialog(index) {
    const entry = worksWithIndex[index];
    if (!entry) return;
    const { work, displayNum } = entry;

    dialogNum.textContent = 'NO. ' + displayNum;
    dialogTitle.textContent = work.title;

    dialogMedia.innerHTML = '';
    const imgs = allImages(work);
    dialogMedia.classList.toggle('has-multiple', imgs.length > 1);
    imgs.forEach((src) => {
      const el = document.createElement('img');
      el.src = src;
      el.alt = describeArtwork(work);
      const dims = IMAGE_DIMENSIONS[src];
      if (dims) { el.width = dims[0]; el.height = dims[1]; }
      el.decoding = 'async';
      dialogMedia.appendChild(el);
    });
    if (imgs.length === 0) {
      const placeholder = document.createElement('p');
      placeholder.className = 'work-dialog__no-image';
      placeholder.textContent = 'Für dieses Werk liegt noch kein Bild vor.';
      dialogMedia.appendChild(placeholder);
    }

    dialogFacts.innerHTML = '';
    const facts = [];
    if (work.year) facts.push(['Jahr', String(work.year)]);
    if (work.technique) facts.push(['Technik', work.technique]);
    if (work.dimensions) facts.push(['Maße', work.dimensions]);
    facts.forEach(([label, value]) => {
      const dt = document.createElement('dt');
      dt.textContent = label;
      const dd = document.createElement('dd');
      dd.textContent = value;
      dialogFacts.appendChild(dt);
      dialogFacts.appendChild(dd);
    });
    dialogFacts.style.display = facts.length ? '' : 'none';

    if (work.description) {
      dialogDescription.textContent = work.description;
      dialogDescription.style.display = '';
    } else {
      dialogDescription.textContent = '';
      dialogDescription.style.display = 'none';
    }

    if (work.manifest) {
      dialogManifest.textContent = work.manifest; // Originaltext unverändert aus Notion übernommen
      dialogManifest.style.display = '';
    } else {
      dialogManifest.style.display = 'none';
    }

    dialogActions.innerHTML = '';
    if (work.trackId) {
      const soundBtn = document.createElement('button');
      soundBtn.type = 'button';
      soundBtn.className = 'work-dialog__sound';
      soundBtn.textContent = 'Soundtrack hören →';
      soundBtn.setAttribute('aria-expanded', 'false');
      soundBtn.addEventListener('click', () => loadSoundtrack(soundBtn, work));
      dialogActions.appendChild(soundBtn);
    }

    dialogPrev.disabled = index === 0;
    dialogNext.disabled = index === worksWithIndex.length - 1;

    currentIndex = index;
    updateHash(entry.slug, { replace: true });
  }

  function loadSoundtrack(button, work) {
    if (button.dataset.loaded) return;
    button.dataset.loaded = 'true';
    button.setAttribute('aria-expanded', 'true');
    const wrap = document.createElement('div');
    wrap.className = 'work-dialog__sound-player';
    const iframe = document.createElement('iframe');
    iframe.title = 'SoundCloud-Player: ' + (work.soundtrackLabel || work.title);
    iframe.allow = 'autoplay';
    iframe.src = 'https://w.soundcloud.com/player/?url=' +
      encodeURIComponent('https://api.soundcloud.com/tracks/' + work.trackId) +
      '&color=%23b53434&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false';
    wrap.appendChild(iframe);
    button.insertAdjacentElement('afterend', wrap);
  }

  function openWorkAt(index, opener) {
    if (index < 0 || index >= worksWithIndex.length) return;
    invokingCard = opener || document.activeElement;
    renderDialog(index);
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
    document.body.classList.add('dialog-open');
  }

  function closeDialog() {
    if (dialog.open) dialog.close();
  }

  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    clearHash();
    if (invokingCard && document.contains(invokingCard)) invokingCard.focus();
    invokingCard = null;
  });

  grid.addEventListener('click', (event) => {
    const card = event.target.closest('.work-card');
    if (!card) return;
    event.preventDefault();
    const entry = worksBySlug.get(card.dataset.slug);
    if (!entry) return;
    openWorkAt(worksWithIndex.indexOf(entry), card);
  });

  dialogClose.addEventListener('click', closeDialog);
  dialogPrev.addEventListener('click', () => { if (currentIndex > 0) renderDialog(currentIndex - 1); });
  dialogNext.addEventListener('click', () => { if (currentIndex < worksWithIndex.length - 1) renderDialog(currentIndex + 1); });

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && !dialogPrev.disabled) {
      event.preventDefault();
      renderDialog(currentIndex - 1);
    } else if (event.key === 'ArrowRight' && !dialogNext.disabled) {
      event.preventDefault();
      renderDialog(currentIndex + 1);
    }
  });

  function updateHash(slug, options) {
    const replace = options && options.replace;
    const url = new URL(window.location.href);
    url.hash = slug;
    if (replace) history.replaceState(null, '', url);
    else history.pushState(null, '', url);
  }
  function clearHash() {
    const url = new URL(window.location.href);
    url.hash = '';
    history.replaceState(null, '', url.pathname + url.search);
  }
  function openFromHash() {
    const slug = window.location.hash.replace('#', '');
    if (!slug) return;
    const entry = worksBySlug.get(slug);
    if (!entry) return;
    const card = grid.querySelector(`.work-card[data-slug="${entry.slug}"]`);
    openWorkAt(worksWithIndex.indexOf(entry), card);
  }
  window.addEventListener('hashchange', openFromHash);

  renderGrid();
  if (indexLabel) indexLabel.textContent = String(worksWithIndex.length);
  openFromHash();
})();
