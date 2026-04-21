import { ROUTES, APP_NAME, CONTACT_EMAIL, CONTACT_PHONE } from '../../utils/constants.js';

export function Footer() {
  return `
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-brand">
          <img src="/images/Footer-Logo.png" alt="${APP_NAME} Logo" />
          <p>Delivering premium logistics and dispatch support for modern fleets and owner-operators.</p>
        </div>
        
        <div class="footer-links-col">
          <h4>Quick Links</h4>
          <a href="${ROUTES.HOME}">Home</a>
          <a href="${ROUTES.SERVICES}">Services</a>
          <a href="${ROUTES.ABOUT}">About Us</a>
        </div>
        
        <div class="footer-links-col">
          <h4>Support &amp; Contact</h4>
          <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
          <a href="tel:+17133096606">+1 (713) 309-6606</a>
          <a href="${ROUTES.CONTACT}">Contact Form</a>
          <a href="${ROUTES.PRIVACY}">Privacy Policy</a>
        </div>

        <div class="footer-links-col">
          <h4>Our Office</h4>
          <address class="footer-address">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>10685B Hazelhurst DR 36058<br>Houston, Texas 77043</span>
          </address>
        </div>
      </div>
      
      <div class="footer-bottom">
        &copy; ${new Date().getFullYear()} ${APP_NAME}. All rights reserved.
      </div>
    </footer>
  `;
}
