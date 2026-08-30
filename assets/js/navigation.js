/* =============================================================
   MELODIENRAUSCH — Globale Navigation (Overlay-Menü)
   Setzt voraus: <html class="js"> wurde bereits per Inline-Skript
   im <head> gesetzt, bevor dieses Skript läuft.
   ============================================================= */
(function () {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('site-menu');

  if (!toggle || !menu) return;

  const menuLinks = Array.from(menu.querySelectorAll('a'));

  function openMenu() {
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    menu.inert = false;
    menu.removeAttribute('aria-hidden');
    if (menuLinks[0]) menuLinks[0].focus();
    document.addEventListener('keydown', onKeydown);
    document.addEventListener('pointerdown', onPointerDown, true);
  }

  function closeMenu({ returnFocus = true } = {}) {
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    menu.inert = true;
    menu.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', onKeydown);
    document.removeEventListener('pointerdown', onPointerDown, true);
    if (returnFocus) toggle.focus();
  }

  function isOpen() {
    return document.body.classList.contains('menu-open');
  }

  function onKeydown(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      return;
    }
    // einfache Fokus-Schleife innerhalb des Overlays
    if (event.key === 'Tab' && menuLinks.length > 0) {
      const first = menuLinks[0];
      const last = menuLinks[menuLinks.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  function onPointerDown(event) {
    if (!menu.contains(event.target) && event.target !== toggle) {
      closeMenu({ returnFocus: false });
    }
  }

  toggle.addEventListener('click', () => {
    if (isOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Anfangszustand: für Screenreader/Tastatur sauber geschlossen,
  // bis das Overlay tatsächlich geöffnet wird.
  menu.inert = true;
  menu.setAttribute('aria-hidden', 'true');
})();
