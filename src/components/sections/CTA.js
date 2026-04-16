import { Button } from '../ui/Button.js';
import { Section } from '../ui/Section.js';

export function CTA() {
  return `
    <section class="cta-banner-section">
      <div class="cta-banner-background"></div>
      <div class="cta-banner-overlay"></div>
      
      <div class="container relative z-10">
        <div class="cta-banner-content">
          <h2 class="cta-banner-title">Ready to Maximize Your Revenue?</h2>
          <p class="cta-banner-description">
            Partner with an elite dispatching team that treats your business like their own. Experience aggressive rate negotiation, strategic route planning, and 24/7 dedicated support.
          </p>
          <div class="cta-banner-action">
            ${Button({ label: 'Get Started Today', href: '/contact', className: 'btn-primary btn-cta' })}
          </div>
        </div>
      </div>
    </section>
  `;
}
