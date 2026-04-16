import { Button } from '../ui/Button.js';
import { APP_NAME } from '../../utils/constants.js';

export function Hero() {
  return `
    <section class="hero" style="
      position: relative;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(6, 23, 17, 0.85) 100%), url('/public/images/Hero.jpeg') center/cover no-repeat;
      color: var(--text-light); 
      text-align: center; 
      margin-top: -120px;
      padding: clamp(140px, 20vh, 200px) 20px clamp(80px, 10vh, 120px);
      overflow: hidden;
      border-bottom: 1px solid var(--border-color);
    ">
      <div style="
        position: absolute; 
        top: -20%; left: -10%; 
        width: 50%; height: 50%; 
        background: var(--primary-color); 
        filter: blur(150px); 
        opacity: 0.15; 
        z-index: 0;
      "></div>
      
      <div class="container" style="position: relative; z-index: 10; max-width: 800px; margin: 0 auto;">
        <img src="/public/images/Logo.png" alt="Logo icon" style="height: 128px; margin: 0 auto var(--spacing-lg) auto; opacity: 0.9;" />
        <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: var(--spacing-md); line-height: 1.0; font-weight: 800;">
          Elevate Your Fleet with <br/><span class="text-gradient">${APP_NAME}</span>
        </h1>
        <p style="font-size: clamp(1.1rem, 2vw, 1.25rem); margin-bottom: var(--spacing-xl); line-height: 1.6;">
          Consistent freight, better rates, and dedicated logistics support. Let us handle the heavy lifting of load planning so you can focus on the road.
        </p>
        <div style="display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap;">
          ${Button({ label: 'Get Started Today', href: '/contact', className: 'btn-primary' })}
          ${Button({ label: 'Explore Services', href: '/services', className: 'btn-secondary' })}
        </div>
      </div>
    </section>
  `;
}
