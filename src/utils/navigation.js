export function initNavigation() {
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileMenuOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  if (!menuToggle || !mobileMenu) return;

  // Move the mobile menu and overlay to <body> directly
  // This breaks them out of any zoom/transform context that would break position:fixed
  if (!document.getElementById('mobileMenu-mounted')) {
    mobileMenu.id = 'mobileMenu-mounted';
    overlay.id = 'mobileMenuOverlay-mounted';
    document.body.appendChild(overlay);
    document.body.appendChild(mobileMenu);
  }

  const movedMenu = document.getElementById('mobileMenu-mounted');
  const movedOverlay = document.getElementById('mobileMenuOverlay-mounted');

  const toggleMenu = (show) => {
    movedMenu.classList.toggle('active', show);
    movedOverlay.classList.toggle('active', show);
    document.body.style.overflow = show ? 'hidden' : '';
  };

  menuToggle.addEventListener('click', () => toggleMenu(true));
  document.getElementById('closeMenu').addEventListener('click', () => toggleMenu(false));
  movedOverlay.addEventListener('click', () => toggleMenu(false));

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}
