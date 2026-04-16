import { Section } from '../ui/Section.js';

export function ContactForm() {
  return Section({
    id: 'contact',
    title: 'Let\'s Start <span class="text-gradient">Booking</span>',
    children: `
      <p style="text-align: center; color: var(--text-muted); margin-bottom: var(--spacing-xl); max-width: 600px; margin-inline: auto;">
        Drop your details below and a senior dispatcher will contact you within 24 hours to discuss your routes and rates.
      </p>

      <div class="contact-form-card">
        <!-- Status Banner -->
        <div id="cf-banner" class="cf-banner">
          <div class="cf-banner-text"></div>
        </div>

        <form id="contact-form" novalidate>
          <!-- Row 1: Name & Email -->
          <div class="cf-row">
            <div class="cf-field">
              <label for="cf-name" class="cf-label">Full Name <span class="required-star">*</span></label>
              <input type="text" id="cf-name" class="cf-input" placeholder="Enter your name" required>
              <span id="cf-name-error" class="cf-error"></span>
            </div>
            <div class="cf-field">
              <label for="cf-email" class="cf-label">Email Address <span class="required-star">*</span></label>
              <input type="email" id="cf-email" class="cf-input" placeholder="example@email.com" required>
              <span id="cf-email-error" class="cf-error"></span>
            </div>
          </div>

          <!-- Row 2: Phone & MC# -->
          <div class="cf-row">
            <div class="cf-field">
              <label for="cf-phone" class="cf-label">Phone Number (Cell) <span class="required-star">*</span></label>
              <input type="tel" id="cf-phone" class="cf-input" placeholder="(555) 000-0000" required>
              <span id="cf-phone-error" class="cf-error"></span>
            </div>
            <div class="cf-field">
              <label for="cf-mc" class="cf-label">MC# <span class="optional-tag">(Optional)</span></label>
              <input type="text" id="cf-mc" class="cf-input" placeholder="Motor Carrier Number">
              <span id="cf-mc-error" class="cf-error"></span>
            </div>
          </div>

          <!-- Message -->
          <div class="cf-field">
            <label for="cf-message" class="cf-label">Message or Load Details <span class="optional-tag">(Optional)</span></label>
            <textarea id="cf-message" class="cf-textarea" placeholder="Tell us about your fleet or specific loads..."></textarea>
            <span id="cf-message-error" class="cf-error"></span>
          </div>

          <!-- Submit -->
          <div class="cf-submit-area">
            <button type="submit" id="cf-submit" class="btn btn-primary">
              <span id="cf-spinner" class="cf-spinner"></span>
              <span id="cf-btn-text">Request Callback</span>
            </button>
          </div>
        </form>
      </div>
    `
  });
}
