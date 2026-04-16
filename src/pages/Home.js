import { Header } from '../components/layout/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { Hero } from '../components/sections/Hero.js';
import { Stats } from '../components/sections/Stats.js';
import { ServicesPreview } from '../components/sections/ServicesPreview.js';
import { WhyChooseUs } from '../components/sections/WhyChooseUs.js';
import { TestimonialsStrip } from '../components/sections/TestimonialsStrip.js';
import { CTA } from '../components/sections/CTA.js';
import { setSEO } from '../utils/seo.js';

export async function Home() {
  setSEO({
    title: 'Home',
    description: 'Prime Freight Management offers premium truck dispatch services, load planning, and logistics support to maximize driver revenue.',
    keywords: 'top dispatch agency, best truck dispatching company'
  });

  const servicesHtml = await ServicesPreview();
  const testimonialsHtml = await TestimonialsStrip();

  return `
    ${Header()}
    <main>
      ${Hero()}
      ${Stats()}
      ${servicesHtml}
      ${WhyChooseUs()}
      ${testimonialsHtml}
      ${CTA()}
    </main>
    ${Footer()}
  `;
}
