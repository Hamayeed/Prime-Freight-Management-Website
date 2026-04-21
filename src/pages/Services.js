import { Header } from '../components/layout/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { CTA } from '../components/sections/CTA.js';
import { setSEO } from '../utils/seo.js';
import servicesData from '../data/services.json';

export async function Services() {
  setSEO({ 
    title: 'Precision Truck Dispatch Services | Prime Freight Management', 
    description: 'Maximize your earnings with our professional truck dispatch service. We offer freight dispatch, route optimization, and logistics support for owner-operators.',
    keywords: 'truck dispatch service, freight dispatch, logistics support, load planning'
  });

  const services = servicesData;

  const servicesHtml = services.map((service, index) => {
    // Alternate sides for a broken grid layout
    const isEven = index % 2 === 0;
    
    return `
      <div class="service-detail-block ${isEven ? 'row-normal' : 'row-reverse'}">
        <div class="service-detail-content">
          ${service.badge ? `<span class="service-badge-tag">${service.badge}</span>` : ''}
          <h2 class="service-detail-title">${service.title}</h2>
          <p class="service-detail-description">${service.description}</p>
          <ul class="service-detail-features">
            ${service.features.map(f => `
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ${f}
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="service-detail-number">
          0${index + 1}
        </div>
      </div>
    `;
  }).join('');

  return `
    ${Header()}
    <main class="services-page-main">
      <!-- Top Hero Banner -->
      <section class="page-hero-section">
        <div class="page-hero-bg" style="background-image: url('/images/services_hero_bg.png');"></div>
        <div class="page-hero-overlay"></div>
        <div class="container relative z-10">
          <h1 class="page-hero-title">Our <span class="text-gradient">Services</span></h1>
          <p class="page-hero-subtitle">Comprehensive freight logistics and dispatching designed for growth.</p>
        </div>
      </section>

      <!-- Services List -->
      <section class="service-details-section">
        <div class="container">
          <div class="service-details-wrapper">
            ${servicesHtml}
          </div>
        </div>
      </section>

      ${CTA()}
    </main>
    ${Footer()}
  `;
}
