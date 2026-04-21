import { Header } from '../components/layout/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { setSEO } from '../utils/seo.js';
import privacyData from '../data/privacy_policy.json';

/* -------------------------------------------------------
   Helper: render a single privacy section card
------------------------------------------------------- */
function renderSection(section, index) {
  const numberLabel = String(index).padStart(2, '0');

  const listHtml = section.list
    ? `<ul class="privacy-list">
        ${section.list.map(item => `
          <li>
            <span class="list-bullet">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="3.5"
                stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            ${item}
          </li>`).join('')}
      </ul>`
    : '';

  const footerHtml = section.footer
    ? `<p class="privacy-section-body">${section.footer}</p>`
    : '';

  return `
    <article class="privacy-section-card" data-index="${numberLabel}">
      <span class="privacy-section-number">Section ${index}</span>
      <h2 class="privacy-section-heading">${section.heading}</h2>
      <p class="privacy-section-body">${section.content}</p>
      ${listHtml}
      ${footerHtml}
    </article>`;
}

/* -------------------------------------------------------
   Page
------------------------------------------------------- */
export async function PrivacyPolicy() {
  setSEO({
    title: 'Privacy Policy',
    description: 'Read the Privacy Policy for Prime Freight Management. Learn how we collect, use, and protect your personal data.',
    keywords: 'privacy policy, data protection, prime freight management privacy'
  });

  const sectionsHtml = privacyData.sections
    .map((section, i) => renderSection(section, i + 1))
    .join('');

  return `
    ${Header()}
    <main class="privacy-page-main">

      <!-- ═══ HERO ═══ -->
      <section class="privacy-hero-section" aria-label="Privacy Policy header">
        <div class="privacy-hero-bg"></div>
        <div class="privacy-hero-content">
          <span class="privacy-hero-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Legal &amp; Compliance
          </span>
          <h1 class="privacy-hero-title">${privacyData.title}</h1>
          <p class="privacy-hero-subtitle">
            Your privacy and data security are important to us. We are committed to
            being fully transparent about how we handle your information.
          </p>
          <div class="privacy-hero-meta">
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Effective from 2025
            </span>
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Prime Freight Management
            </span>
          </div>
        </div>
      </section>

      <!-- ═══ CONTENT ═══ -->
      <section class="privacy-content-section" aria-label="Privacy Policy content">
        <div class="privacy-content-wrapper">

          <!-- Intro paragraph -->
          <div class="privacy-intro-block">
            <p>${privacyData.intro}</p>
          </div>

          <!-- All sections -->
          ${sectionsHtml}

          <!-- Closing statement -->
          <div class="privacy-closing-block">
            <p>${privacyData.closing}</p>
          </div>

        </div>
      </section>

    </main>
    ${Footer()}
  `;
}
