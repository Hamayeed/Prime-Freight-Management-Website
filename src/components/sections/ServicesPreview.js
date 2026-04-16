import { Section } from '../ui/Section.js';
import { Card } from '../ui/Card.js';

export async function ServicesPreview({ limit = 0 } = {}) {
  let services = [];
  try {
    const response = await fetch('/src/data/services.json');
    services = await response.json();
  } catch (error) {
    console.error('Failed to load services', error);
  }

  // Modern SaaS SVGs mapping natively
  const svgs = [
    '<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    '<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    '<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
    '<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    '<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    '<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>'
  ];

  const displayServices = limit ? services.slice(0, limit) : services;
  const cardsHtml = displayServices.map((service, idx) =>
    Card({
      title: service.title,
      content: service.description,
      icon: svgs[idx] || svgs[0],
      features: service.features,
      badge: service.badge,
      className: 'reveal-stagger'
    })
  ).join('');

  return Section({
    id: 'services',
    title: ' Streamlined <span class="text-gradient">Dispatch Solutions</span> for Modern Fleets',
    children: `
      <p style="text-align: center; color: var(--text-muted); margin-bottom: var(--spacing-xl); max-width: 650px; margin-inline: auto; font-size: 1.3rem;">
        Complete, end-to-end management specifically engineered for independent owner-operators and fleets. Let us maximize your loaded miles and revenue.
      </p>
      <div class="services-grid">
        ${cardsHtml}
      </div>
    `
  });
}
