(() => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('side-menu');
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    menu.inert = !open;
    if (open) {
      menu.querySelector('.menu-link')?.focus();
    } else if (document.activeElement && menu.contains(document.activeElement)) {
      toggle.focus();
    }
  };

  toggle.addEventListener('click', () => setOpen(!document.body.classList.contains('menu-open')));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('menu-open')) setOpen(false);
  });
})();
