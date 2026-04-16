import { Container } from './Container.js';

export function Section({ id = "", className = "", title = "", children }) {
  const heading = title ? `<h2>${title}</h2>` : '';
  return `
    <section id="${id}" class="section ${className}" style="padding: var(--spacing-xl) 0;">
      ${Container(`
        ${heading ? `<div style="text-align: center; margin-bottom: var(--spacing-lg);">${heading}</div>` : ''}
        ${children}
      `)}
    </section>
  `;
}
