import { Section } from '../ui/Section.js';
import testimonialsData from '../../data/testimonials.json';

export async function Testimonials() {
  const testimonials = testimonialsData;
  
  const testimonialsHtml = testimonials.map(t => `
    <div class="glass" style="padding: var(--spacing-lg); border-radius: var(--border-radius-lg); position: relative;">
      <div style="color: var(--accent-color); font-size: 3rem; position: absolute; top: 10px; right: 20px; opacity: 0.2; font-family: serif;">"</div>
      <p style="font-style: italic; margin-bottom: var(--spacing-md); color: var(--text-light); position: relative; z-index: 1;">"${t.text}"</p>
      <strong style="color: var(--accent-color); font-family: var(--font-heading);">${t.name}</strong> 
      <div style="color: var(--text-muted); font-size: 0.9rem;">${t.role}</div>
    </div>
  `).join('');

  return Section({
    title: 'Trusted by <span class="text-gradient">Independent Fleets</span>',
    children: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-lg);">
        ${testimonialsHtml}
      </div>
    `
  });
}
