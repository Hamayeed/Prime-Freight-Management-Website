import { Section } from '../ui/Section.js';
import { Button } from '../ui/Button.js';

export function ContactForm() {
  return Section({
    id: 'contact',
    title: 'Let\'s Start <span class="text-gradient">Booking</span>',
    children: `
      <p style="text-align: center; color: var(--text-muted); margin-bottom: var(--spacing-xl); max-width: 600px; margin-inline: auto;">
        Drop your details below and a senior dispatcher will contact you within 24 hours to discuss your routes and rates.
      </p>
      <form class="glass" style="max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: var(--spacing-md); text-align: left; padding: var(--spacing-lg); border-radius: var(--border-radius-lg);">
        <div>
          <label style="display: block; margin-bottom: var(--spacing-sm); font-weight: 500; color: var(--text-muted);">Full Name</label>
          <input type="text" required style="width: 100%; padding: 14px; background: rgba(0,0,0,0.2); border: 1px solid var(--border-color); border-radius: var(--border-radius); color: var(--text-light); font-family: inherit;" />
        </div>
        <div>
          <label style="display: block; margin-bottom: var(--spacing-sm); font-weight: 500; color: var(--text-muted);">Email Address</label>
          <input type="email" required style="width: 100%; padding: 14px; background: rgba(0,0,0,0.2); border: 1px solid var(--border-color); border-radius: var(--border-radius); color: var(--text-light); font-family: inherit;" />
        </div>
        <div>
          <label style="display: block; margin-bottom: var(--spacing-sm); font-weight: 500; color: var(--text-muted);">Message or MC#</label>
          <textarea rows="5" required style="width: 100%; padding: 14px; background: rgba(0,0,0,0.2); border: 1px solid var(--border-color); border-radius: var(--border-radius); color: var(--text-light); font-family: inherit; resize: vertical;"></textarea>
        </div>
        <div style="margin-top: var(--spacing-sm);">
          ${Button({ label: 'Request Callback', className: 'btn-primary', style: 'width: 100%; font-size: 1.1rem;' })}
        </div>
      </form>
    `
  });
}
