import { Header } from '../components/layout/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { Stats } from '../components/sections/Stats.js';
import { CTA } from '../components/sections/CTA.js';
import { setSEO } from '../utils/seo.js';
import { APP_NAME } from '../utils/constants.js';

export function About() {
  setSEO({ 
    title: 'About Us | Prime Freight Management', 
    description: `Learn more about ${APP_NAME} and our mission to support trucking professionals. Elite dispatching, logistics management, and revenue optimization.`,
    keywords: `about us, ${APP_NAME}, expert dispatchers, trucking logistics`
  });

  return `
    ${Header()}
    <main class="about-page-main">
      <!-- Top Hero Banner -->
      <section class="page-hero-section">
        <div class="page-hero-bg" style="background-image: url('/public/images/about_hero_bg.png');"></div>
        <div class="page-hero-overlay"></div>
        <div class="container relative z-10">
          <h1 class="page-hero-title">About <span class="text-gradient">PFM</span></h1>
          <p class="page-hero-subtitle">We are redefining freight management and dispatching through precision, transparency, and dedication.</p>
        </div>
      </section>

      <!-- Intro & Mission Section -->
      <section class="about-intro-section">
        <div class="container">
          <div class="about-intro-grid">
            <div class="about-text-block">
              <h2 class="about-section-heading">Our Story</h2>
              <p>
                Prime Freight Management was built on a simple premise: Owner-operators deserve a dispatching partner that works as hard as they do. The freight industry is complex and constantly fluctuating, and we saw too many drivers losing money to poor lane choices, cheap freight, and predatory broker practices.
              </p>
              <p>
                We established PFM to be the back-office powerhouse for ambitious fleets. We treat your trucks like our own, negotiating aggressively to secure the highest possible rates while managing every logistical detail from start to finish.
              </p>
            </div>
            
            <div class="about-mission-card glass">
              <div class="mission-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower trucking professionals by providing elite logistics management, seamless back-office support, and consistent revenue growth through data-driven dispatching solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us Snapshot -->
      <section class="about-why-section">
        <div class="container">
          <div class="about-why-header">
            <h2 class="about-section-heading text-center">The PFM <span class="text-gradient">Advantage</span></h2>
            <p class="about-why-subtext">We built PFM around one goal — protecting your bottom line. Here's what makes us different from every other dispatch agency in the market.</p>
          </div>
          <div class="about-why-grid">

            <div class="about-why-item">
              <div class="why-item-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3>Boutique Approach</h3>
              <p>We purposefully limit the ratio of trucks per dispatcher so your business always gets the focused, high-quality attention it deserves — never lost in a queue.</p>
            </div>

            <div class="about-why-item">
              <div class="why-item-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3>Fierce Rate Negotiation</h3>
              <p>Our dispatchers are trained to push hard on every load. We use live market data and strong broker relationships to consistently secure the highest rates available for your lanes.</p>
            </div>

            <div class="about-why-item about-why-item--highlight">
              <div class="why-item-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>100% Price Transparency</h3>
              <p>We have <strong>zero upfront fees</strong> and <strong>zero hidden charges</strong>. We only charge a flat percentage on the <em>base rate</em> of each load — never on accessorials like fuel surcharges, detention, or TONU. You always see exactly what the broker paid, every time.</p>
              <ul class="about-why-bullets">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                  $0 upfront — start dispatching immediately
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                  Fee is based on load base rate only
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                  Accessorials (fuel surcharge, detention, etc.) go 100% to you
                </li>
              </ul>
            </div>

            <div class="about-why-item">
              <div class="why-item-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
              </div>
              <h3>You Stay in Control</h3>
              <p>We work for <em>you</em> — not the other way around. You set the rules: preferred lanes, minimum rates, home-time requirements, and load preferences. We execute within your strategy and never take a load without your approval.</p>
              <ul class="about-why-bullets">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                  You approve every load before we book
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                  Set your own rate floor and lane preferences
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                  Change your strategy anytime — no lock-ins
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <!-- Stats Section -->
      ${Stats()}
      
      ${CTA()}
    </main>
    ${Footer()}
  `;
}
