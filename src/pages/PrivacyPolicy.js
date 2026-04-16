import { Header } from '../components/layout/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { Section } from '../components/ui/Section.js';
import { setSEO } from '../utils/seo.js';

export function PrivacyPolicy() {
  setSEO({ title: 'Privacy Policy', description: 'Privacy Policy for Prime Freight Management.' });

  return `
    ${Header()}
    <main>
      ${Section({
        title: 'Privacy Policy',
        children: `
        <div class="glass" style="max-width: 800px; margin: 0 auto; text-align: left; padding: var(--spacing-xl); border-radius: var(--border-radius-lg);">
          <h3 style="margin-bottom: var(--spacing-sm); color: var(--text-light); font-size: 1.5rem;">Information Collection</h3>
          <p style="color: var(--text-muted); margin-bottom: var(--spacing-lg);">We respect your privacy under all applicable laws. Any data collected via our contact forms is used solely to respond to your logistics inquiries and is never sold to third parties.</p>
          
          <h3 style="margin-bottom: var(--spacing-sm); color: var(--text-light); font-size: 1.5rem;">Cookies & Analytics</h3>
          <p style="color: var(--text-muted);">We use minimal tracking for performance analytics and website functionality to provide the best possible user experience to our fleet partners.</p>
        </div>
        `
      })}
    </main>
    ${Footer()}
  `;
}
