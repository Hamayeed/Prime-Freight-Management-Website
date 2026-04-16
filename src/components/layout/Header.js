import { APP_NAME } from '../../utils/constants.js';
import { Navbar } from './Navbar.js';

export function Header() {
  return `
    <header class="site-header">
      <a href="/" class="site-logo">
        <img src="/public/images/Logo-name.png" alt="${APP_NAME} Logo" />
      </a>
      ${Navbar()}
    </header>
  `;
}
