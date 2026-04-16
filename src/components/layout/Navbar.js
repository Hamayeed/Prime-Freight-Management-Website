import { APP_NAME } from '../../utils/constants.js';

export function Navbar() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const desktopLinksHtml = navLinks.map(link => `
    <li><a href="${link.path}">${link.name}</a></li>
  `).join('');

  const mobileLinksHtml = [
    ...navLinks.map(link => `<li><a href="${link.path}">${link.name}</a></li>`),
    `<li><a href="/privacy-policy" class="mobile-privacy-link">Privacy Policy</a></li>`
  ].join('');

  // The mobile menu is rendered as a sibling to #root via JS (see initNavigation)
  // to avoid being clipped/broken by the html { zoom } property.
  // We only output the hamburger button here.
  return `
    <nav class="main-nav">
      <!-- Desktop Menu -->
      <ul class="nav-links">
        ${desktopLinksHtml}
      </ul>

      <!-- Hamburger Button -->
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>

    <!-- Mobile overlay + drawer injected into body by initNavigation() -->
    <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>
    <div class="mobile-menu" id="mobileMenu">
      <div class="mobile-menu-header">
        <img src="/public/images/Logo-name.png" alt="${APP_NAME} Logo" class="mobile-logo" />
        <button class="close-menu" id="closeMenu" aria-label="Close Menu">&times;</button>
      </div>
      <ul class="mobile-nav-links">
        ${mobileLinksHtml}
      </ul>
    </div>
  `;
}
