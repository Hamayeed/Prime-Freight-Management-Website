import { ROUTES, APP_NAME, CONTACT_EMAIL, CONTACT_PHONE } from '../../utils/constants.js';

export function Footer() {
  return `
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-brand">
          <img src="/public/images/Footer-Logo.png" alt="${APP_NAME} Logo" />
          <p>Delivering premium logistics and dispatch support for modern fleets and owner-operators.</p>
        </div>
        
        <div class="footer-links-col">
          <h4>Quick Links</h4>
          <a href="${ROUTES.HOME}">Home</a>
          <a href="${ROUTES.SERVICES}">Services</a>
          <a href="${ROUTES.ABOUT}">About Us</a>
        </div>
        
        <div class="footer-links-col">
          <h4>Support & Contact</h4>
          <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
          <a href="tel:">+1 (713) 364-8588</a>
          <a href="${ROUTES.CONTACT}">Contact Form</a>
          <a href="${ROUTES.PRIVACY}">Privacy Policy</a>
        </div>
      </div>
      
      <div class="footer-bottom">
        &copy; ${new Date().getFullYear()} ${APP_NAME}. All rights reserved.
      </div>
    </footer>
  `;
}
