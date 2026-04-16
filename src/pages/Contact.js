import { Header } from '../components/layout/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { ContactForm } from '../components/sections/ContactForm.js';
import { setSEO } from '../utils/seo.js';

export function Contact() {
  setSEO({ 
    title: 'Contact Us', 
    description: 'Get in touch with Prime Freight Management.',
    keywords: 'contact truck dispatcher, hire dispatch service'
  });

  return `
    ${Header()}
    <main style="padding: var(--spacing-xl) 0;">
      ${ContactForm()}
    </main>
    ${Footer()}
  `;
}
