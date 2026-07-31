const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

if (menuToggle && sideMenu) {
  function setMenuOpen(open) {
    document.body.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    sideMenu.inert = !open;
    if (open) {
      const firstLink = sideMenu.querySelector('.menu-link');
      if (firstLink) firstLink.focus();
    } else {
      menuToggle.focus();
    }
  }

  menuToggle.addEventListener('click', () => {
    setMenuOpen(!document.body.classList.contains('menu-open'));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
      setMenuOpen(false);
    }
  });
}
