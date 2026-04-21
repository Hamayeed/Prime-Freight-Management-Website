(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();const l="Prime Freight Management",E="info@primefreight.com",D="https://script.google.com/macros/s/AKfycbyoRMfxw0xkkgQPvjTKKyrj9RvDaiktO31OBz8Gz-0A2eJYm36qvPQdJzu5rCL-WpAlvg/exec",u={HOME:"/",SERVICES:"/services",ABOUT:"/about",CONTACT:"/contact",PRIVACY:"/privacy-policy"};function R(){const e=[{name:"Home",path:"/"},{name:"Services",path:"/services"},{name:"About Us",path:"/about"},{name:"Contact Us",path:"/contact"}],t=e.map(o=>`
    <li><a href="${o.path}">${o.name}</a></li>
  `).join(""),i=[...e.map(o=>`<li><a href="${o.path}">${o.name}</a></li>`),'<li><a href="/privacy-policy" class="mobile-privacy-link">Privacy Policy</a></li>'].join("");return`
    <nav class="main-nav">
      <!-- Desktop Menu -->
      <ul class="nav-links">
        ${t}
      </ul>

      <!-- Hamburger Button -->
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>

    <!-- Mobile overlay + drawer injected into body by initNavigation() -->
    <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>
    <div class="mobile-menu" id="mobileMenu">
      <div class="mobile-menu-header">
        <img src="/images/Logo-name.png" alt="${l} Logo" class="mobile-logo" />
        <button class="close-menu" id="closeMenu" aria-label="Close Menu">&times;</button>
      </div>
      <ul class="mobile-nav-links">
        ${i}
      </ul>
    </div>
  `}function h(){return`
    <header class="site-header">
      <a href="/" class="site-logo">
        <img src="/images/Logo-name.png" alt="${l} Logo" />
      </a>
      ${R()}
    </header>
  `}function m(){return`
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-brand">
          <img src="/images/Footer-Logo.png" alt="${l} Logo" />
          <p>Delivering premium logistics and dispatch support for modern fleets and owner-operators.</p>
        </div>
        
        <div class="footer-links-col">
          <h4>Quick Links</h4>
          <a href="${u.HOME}">Home</a>
          <a href="${u.SERVICES}">Services</a>
          <a href="${u.ABOUT}">About Us</a>
        </div>
        
        <div class="footer-links-col">
          <h4>Support &amp; Contact</h4>
          <a href="mailto:${E}">${E}</a>
          <a href="tel:+17133096606">+1 (713) 309-6606</a>
          <a href="${u.CONTACT}">Contact Form</a>
          <a href="${u.PRIVACY}">Privacy Policy</a>
        </div>

        <div class="footer-links-col">
          <h4>Our Office</h4>
          <address class="footer-address">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>10685B Hazelhurst DR 36058<br>Houston, Texas 77043</span>
          </address>
        </div>
      </div>
      
      <div class="footer-bottom">
        &copy; ${new Date().getFullYear()} ${l}. All rights reserved.
      </div>
    </footer>
  `}function w({label:e,href:t,className:i="btn-primary",style:o=""}){return t?`<a href="${t}" class="btn ${i}" style="${o}">${e}</a>`:`<button class="btn ${i}" style="${o}">${e}</button>`}function j(){return`
    <section class="hero" style="
      position: relative;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(6, 23, 17, 0.85) 100%), url('/images/Hero.jpeg') center/cover no-repeat;
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
        <img src="/images/Logo.png" alt="Logo icon" style="height: 128px; margin: 0 auto var(--spacing-lg) auto; opacity: 0.9;" />
        <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: var(--spacing-md); line-height: 1.0; font-weight: 800;">
          Elevate Your Fleet with <br/><span class="text-gradient">${l}</span>
        </h1>
        <p style="font-size: clamp(1.1rem, 2vw, 1.25rem); margin-bottom: var(--spacing-xl); line-height: 1.6;">
          Consistent freight, better rates, and dedicated logistics support. Let us handle the heavy lifting of load planning so you can focus on the road.
        </p>
        <div style="display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap;">
          ${w({label:"Get Started Today",href:"/contact",className:"btn-primary"})}
          ${w({label:"Explore Services",href:"/services",className:"btn-secondary"})}
        </div>
      </div>
    </section>
  `}function T(){return`
    <section class="stats-section glass">
      <div class="stats-container">
        ${[{number:"6+",label:"Years Experience"},{number:"33+",label:"Carrier Partners"},{number:"All 50",label:"States Covered"},{number:"$3.5M+",label:"Revenue Generated for Carriers"}].map(i=>`
    <div class="stat-item">
      <div class="stat-number">${i.number}</div>
      <div class="stat-label">${i.label}</div>
    </div>
  `).join("")}
      </div>
    </section>
  `}function N(e){return`<div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 var(--spacing-md);">${e}</div>`}function F({id:e="",className:t="",title:i="",children:o}){const n=i?`<h2>${i}</h2>`:"";return`
    <section id="${e}" class="section ${t}" style="padding: var(--spacing-xl) 0;">
      ${N(`
        ${n?`<div style="text-align: center; margin-bottom: var(--spacing-lg);">${n}</div>`:""}
        ${o}
      `)}
    </section>
  `}function W({title:e,content:t,icon:i="",features:o=[],badge:n=null,className:s=""}){const r=o&&o.length>0?`<ul class="card-features">
        ${o.map(v=>`<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> ${v}</li>`).join("")}
       </ul>`:"",c=n?`<div class="card-badge">${n}</div>`:"";return`
    <div class="premium-card glass ${s}">
      ${c}
      <div class="card-icon-wrapper">
        ${i}
      </div>
      <h3 class="card-title">${e}</h3>
      <p class="card-desc">${t}</p>
      ${r}
    </div>
  `}const k=[{id:"1",title:"Full-Service Truck Dispatching",description:"Our premium truck dispatch service provides complete operations management, including high-paying load sourcing, aggressive rate negotiation, and dedicated 24/7 support for owner-operators.",badge:"Most Popular",cta:"Get Started",features:["Strategic Load Sourcing","Aggressive Rate Negotiation","Dedicated 1-on-1 Support","No Upfront Fees"]},{id:"2",title:"Strategic Freight Dispatch",description:"Maximize your revenue per mile with our freight dispatch solutions. We optimize your routes to minimize deadhead and keep your trucks moving in the most profitable lanes.",cta:"Optimize Now",features:["Route Optimization","Deadhead Minimization","Market Density Tracking","Lane Analysis"]},{id:"3",title:"Logistics Support & Back-Office",description:"Reduce your administrative burden with professional logistics support. We handle invoicing, broker setup, and document management so you can stay focused on driving.",cta:"Learn More",features:["Invoicing & Direct Billing","New Broker Setup","Digital Document Management","Factoring Assistance"]},{id:"4",title:"Broker Credit & Compliance",description:"Work with confidence. We perform rigorous broker credit checks and verify payment history to protect your business from financial risks and unreliable partners.",cta:"View Details",features:["Creditworthiness Verification","Payment History Review","Financial Risk Mitigation","Compliance Monitoring"]},{id:"5",title:"Insurance & Safety Consulting",description:"Ensure your fleet stays compliant and protected. We provide guidance on insurance brokering and safety compliance to minimize risks and lower your overhead costs.",cta:"Get Quote",features:["Insurance Selection Support","Safety Policy Development","Compliance Auditing","Risk Assessment"]},{id:"6",title:"24/7 Emergency Dispatch",description:"Reliable support when you need it most. Our 24/7 truck dispatch assistance handles load updates, emergency issues, and broker communication around the clock.",badge:"Essential",cta:"Support Now",features:["Round-the-clock Help Line","Emergency Load Handling","Real-time Issue Tracking","Direct Broker Interface"]}];async function q({limit:e=0}={}){const t=['<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>','<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>','<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>','<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>','<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>','<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>'],o=(e?k.slice(0,e):k).map((n,s)=>W({title:n.title,content:n.description,icon:t[s]||t[0],features:n.features,badge:n.badge,className:"reveal-stagger"})).join("");return F({id:"services",title:' Streamlined <span class="text-gradient">Dispatch Solutions</span> for Modern Fleets',children:`
      <p style="text-align: center; color: var(--text-muted); margin-bottom: var(--spacing-xl); max-width: 650px; margin-inline: auto; font-size: 1.3rem;">
        Complete, end-to-end management specifically engineered for independent owner-operators and fleets. Let us maximize your loaded miles and revenue.
      </p>
      <div class="services-grid">
        ${o}
      </div>
    `})}function G(){return`
    <section class="section why-choose-us" id="why-pFM">
      <div class="container">
        <div class="why-header text-center">
          <h2 class="why-title">Why Top Fleets <span class="text-gradient">Choose PFM</span></h2>
          <p class="why-subtext mx-auto">
            We don’t just book loads — we build profitable, long-term freight strategies that keep your trucks moving and your revenue growing. Our team handles the back-office while you focus on the road.
          </p>
        </div>
        <div class="why-grid">
          ${[{title:"Data-Driven Load Strategy",desc:"We analyze real-time market data to position your trucks in the highest-paying lanes consistently.",highlights:["Market Heatmaps","Lane Optimization","Trend Analysis"]},{title:"Flexible, Risk-Free Pricing",desc:"No upfront fees. We offer both flat-rate and percentage options designed to scale with your business.",highlights:["No Upfront Costs","Weekly Payments","Performance-Based"]},{title:"24/7 Dedicated Support",desc:"Your dispatcher is always available to solve problems before they impact your bottom line.",highlights:["Real-time Updates","Issue Resolution","Always Online"]}].map((i,o)=>`
    <div class="why-card ${o===1?"highlight":""}">
      <div class="why-card-content">
        <h3>${i.title}</h3>
        <p>${i.desc}</p>
        <ul class="why-highlights">
          ${i.highlights.map(n=>`<li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ${n}
          </li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("")}
        </div>
      </div>
    </section>
  `}const U=[{id:"1",name:"Adan Calderon",role:"Owner-Operator, Cal Transports Inc",text:"Way better planning, steady money, and I actually get more time at home now.",rating:5},{id:"2",name:"Arturo Velazques",role:"Owner-Operator, A&A Express",text:"Got 2 trucks running the same round trip nonstop. Super consistent and no downtime.",rating:5},{id:"3",name:"Jerold Roubik",role:"Fleet Owner, Roubik, INC",text:"Dan from PFM secured a dedicated lane for our operation, ensuring consistent freight flow and strong profitability across the fleet.",rating:5},{id:"4",name:"German Guerrero",role:"Owner-Operator, GG Pride Deliver Services & Trucking LLC",text:"I’m picky with my RPM and they get it right. Rates have been solid every time.",rating:5},{id:"5",name:"Mariam Rafat",role:"Fleet Owner, Madey Carrier Logistics LLC",text:"Managing 7 trucks is way easier with them. Everything just runs smoother.",rating:5},{id:"6",name:"Xiwen Liang",role:"Owner-Operator, Global Star Freight",text:"Short 50-mile loads on a dedicated lane. Quick, easy, and keeps me moving.",rating:5},{id:"7",name:"Ricardo Ortega",role:"Owner-Operator, Desert Moon Trucking",text:"Good loads, good rates. My truck stays busy, that’s all I need.",rating:5},{id:"8",name:"Baptiste Milfort",role:"Owner-Operator, B2 Trucking LLC",text:"Super easy to work with. They take care of everything on the back end.",rating:5}];async function V(){const e=U;return`
    <section class="testimonials-strip-section">
      <div class="container">
        <h2 class="section-title-small">Trusted Across <span class="text-gradient">The Country</span></h2>
      </div>
      <div class="strip-container">
        <div class="strip-track">
          ${[...e,...e].map(o=>`
      <div class="testimonial-strip-card glass">
        <div class="testimonial-stars">${Array(o.rating||5).fill('<svg width="14" height="14" viewBox="0 0 24 24" fill="var(--primary-color)" stroke="var(--primary-color)" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>').join("")}</div>
        <p class="testimonial-text">"${o.text}"</p>
        <div class="testimonial-author">
          <div class="author-info">
            <span class="author-name">${o.name}</span>
            <span class="author-role">${o.role}</span>
          </div>
        </div>
      </div>
    `).join("")}
        </div>
      </div>
    </section>
  `}function M(){return`
    <section class="cta-banner-section">
      <div class="cta-banner-background"></div>
      <div class="cta-banner-overlay"></div>
      
      <div class="container relative z-10">
        <div class="cta-banner-content">
          <h2 class="cta-banner-title">Ready to Maximize Your Revenue?</h2>
          <p class="cta-banner-description">
            Partner with an elite dispatching team that treats your business like their own. Experience aggressive rate negotiation, strategic route planning, and 24/7 dedicated support.
          </p>
          <div class="cta-banner-action">
            ${w({label:"Get Started Today",href:"/contact",className:"btn-primary btn-cta"})}
          </div>
        </div>
      </div>
    </section>
  `}function g({title:e,description:t,keywords:i}){document.title=`${e} | ${l}`;let o=document.querySelector('meta[name="description"]');o||(o=document.createElement("meta"),o.name="description",document.head.appendChild(o)),o.setAttribute("content",t);let n=document.querySelector('meta[name="keywords"]');n||(n=document.createElement("meta"),n.name="keywords",document.head.appendChild(n));const s="truck dispatch service, freight dispatch, logistics support, load planning, owner operator transport";n.setAttribute("content",i?`${i}, ${s}`:s)}async function Y(){g({title:"Home",description:"Prime Freight Management offers premium truck dispatch services, load planning, and logistics support to maximize driver revenue.",keywords:"top dispatch agency, best truck dispatching company"});const e=await q(),t=await V();return`
    ${h()}
    <main>
      ${j()}
      ${T()}
      ${e}
      ${G()}
      ${t}
      ${M()}
    </main>
    ${m()}
  `}async function _(){g({title:"Precision Truck Dispatch Services | Prime Freight Management",description:"Maximize your earnings with our professional truck dispatch service. We offer freight dispatch, route optimization, and logistics support for owner-operators.",keywords:"truck dispatch service, freight dispatch, logistics support, load planning"});const t=k.map((i,o)=>`
      <div class="service-detail-block ${o%2===0?"row-normal":"row-reverse"}">
        <div class="service-detail-content">
          ${i.badge?`<span class="service-badge-tag">${i.badge}</span>`:""}
          <h2 class="service-detail-title">${i.title}</h2>
          <p class="service-detail-description">${i.description}</p>
          <ul class="service-detail-features">
            ${i.features.map(s=>`
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ${s}
              </li>
            `).join("")}
          </ul>
        </div>
        <div class="service-detail-number">
          0${o+1}
        </div>
      </div>
    `).join("");return`
    ${h()}
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
            ${t}
          </div>
        </div>
      </section>

      ${M()}
    </main>
    ${m()}
  `}function K(){return g({title:"About Us | Prime Freight Management",description:`Learn more about ${l} and our mission to support trucking professionals. Elite dispatching, logistics management, and revenue optimization.`,keywords:`about us, ${l}, expert dispatchers, trucking logistics`}),`
    ${h()}
    <main class="about-page-main">
      <!-- Top Hero Banner -->
      <section class="page-hero-section">
        <div class="page-hero-bg" style="background-image: url('/images/about_hero_bg.png');"></div>
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
      ${T()}
      
      ${M()}
    </main>
    ${m()}
  `}function Q(){return F({id:"contact",title:`Let's Start <span class="text-gradient">Booking</span>`,children:`
      <p style="text-align: center; color: var(--text-muted); margin-bottom: var(--spacing-xl); max-width: 600px; margin-inline: auto;">
        Drop your details below and a senior dispatcher will contact you within 24 hours to discuss your routes and rates.
      </p>

      <div class="contact-form-card">
        <!-- Status Banner -->
        <div id="cf-banner" class="cf-banner">
          <div class="cf-banner-text"></div>
        </div>

        <form id="contact-form" novalidate>
          <!-- Row 1: Name & Email -->
          <div class="cf-row">
            <div class="cf-field">
              <label for="cf-name" class="cf-label">Full Name <span class="required-star">*</span></label>
              <input type="text" id="cf-name" class="cf-input" placeholder="Enter your name" required>
              <span id="cf-name-error" class="cf-error"></span>
            </div>
            <div class="cf-field">
              <label for="cf-email" class="cf-label">Email Address <span class="required-star">*</span></label>
              <input type="email" id="cf-email" class="cf-input" placeholder="example@email.com" required>
              <span id="cf-email-error" class="cf-error"></span>
            </div>
          </div>

          <!-- Row 2: Phone & MC# -->
          <div class="cf-row">
            <div class="cf-field">
              <label for="cf-phone" class="cf-label">Phone Number (Cell) <span class="required-star">*</span></label>
              <input type="tel" id="cf-phone" class="cf-input" placeholder="(555) 000-0000" required>
              <span id="cf-phone-error" class="cf-error"></span>
            </div>
            <div class="cf-field">
              <label for="cf-mc" class="cf-label">MC# <span class="optional-tag">(Optional)</span></label>
              <input type="text" id="cf-mc" class="cf-input" placeholder="Motor Carrier Number">
              <span id="cf-mc-error" class="cf-error"></span>
            </div>
          </div>

          <!-- Message -->
          <div class="cf-field">
            <label for="cf-message" class="cf-label">Message or Load Details <span class="optional-tag">(Optional)</span></label>
            <textarea id="cf-message" class="cf-textarea" placeholder="Tell us about your fleet or specific loads..."></textarea>
            <span id="cf-message-error" class="cf-error"></span>
          </div>

          <!-- Submit -->
          <div class="cf-submit-area">
            <button type="submit" id="cf-submit" class="btn btn-primary">
              <span id="cf-spinner" class="cf-spinner"></span>
              <span id="cf-btn-text">Request Callback</span>
            </button>
          </div>
        </form>
      </div>
    `})}function J(){return g({title:"Contact Us",description:"Get in touch with Prime Freight Management.",keywords:"contact truck dispatcher, hire dispatch service"}),`
    ${h()}
    <main style="padding: var(--spacing-xl) 0;">
      ${Q()}
    </main>
    ${m()}
  `}const X="Privacy Policy",Z="At Prime Freight Management, safeguarding your privacy is paramount. Our commitment to ensuring the confidentiality and security of your personal data is reflected in this Privacy Policy, which delineates the measures we undertake to collect, utilize, disclose, and protect your information when you engage with our services.",ee=[{id:1,heading:"Information Gathering",content:"Your interaction with our website, applications, or other services may entail the collection of personal information.",list:["Name","Contact details (such as email address, phone number)","Address","Payment particulars"],footer:"We gather this data to enhance our services, facilitate transactions, engage in communication with you, and adhere to legal obligations."},{id:2,heading:"Information Utilization",content:"The information we collect serves multiple purposes, including but not limited to:",list:["Provision, upkeep, and enhancement of our services","Transaction processing","Correspondence regarding your account and our services","Addressing your inquiries and requests","Disseminating crucial notifications and updates","Conducting research and analysis to refine our services"]},{id:3,heading:"Information Disclosure",content:"We do not engage in selling, trading, or transferring your personal information to third parties without your explicit consent.",footer:"Furthermore, we ensure that no mobile information is shared with third-party affiliates for marketing or promotional activities. This assurance excludes text messaging originator opt-in data and consent, which remains confidential and unshared with any third parties."},{id:4,heading:"Data Security",content:"While we implement reasonable measures to safeguard your personal data against unauthorized access, use, disclosure, alteration, or destruction, no method of transmission over the internet or electronic storage is entirely foolproof.",footer:"Consequently, we cannot guarantee the absolute security of your information."},{id:5,heading:"Children’s Privacy",content:"Our services are not intended for individuals under the age of 13, and we do not knowingly collect personal information from such individuals.",footer:"If we become aware of inadvertently collecting personal data from a child under 13 without parental consent, we will promptly take steps to remove that information from our servers."},{id:6,heading:"Amendments to this Privacy Policy",content:"We retain the right to amend this Privacy Policy as necessary.",footer:"In the event of substantial changes, we will notify you via email or by posting a notice on our website before the modifications take effect. We encourage you to periodically review this Privacy Policy for any updates."},{id:7,heading:"Your Privacy Rights",content:"You have rights regarding your personal information, including access, modification, and deletion.",footer:"Additional rights may apply based on your jurisdiction. We do not share or sell SMS opt-in data or phone numbers for the purpose of SMS."},{id:8,heading:"Contact Us",content:"Should you have any inquiries or concerns regarding this Privacy Policy or our handling of your personal information, please contact us:",list:["Phone: +1 (713)-309-6606","Email: Info@primefreight.co"]}],te="By utilizing our services, you implicitly agree to abide by the terms outlined in this Privacy Policy. If you disagree with these terms, we kindly ask you to refrain from using our services.",f={title:X,intro:Z,sections:ee,closing:te};function ie(e,t){const i=String(t).padStart(2,"0"),o=e.list?`<ul class="privacy-list">
        ${e.list.map(s=>`
          <li>
            <span class="list-bullet">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="3.5"
                stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            ${s}
          </li>`).join("")}
      </ul>`:"",n=e.footer?`<p class="privacy-section-body">${e.footer}</p>`:"";return`
    <article class="privacy-section-card" data-index="${i}">
      <span class="privacy-section-number">Section ${t}</span>
      <h2 class="privacy-section-heading">${e.heading}</h2>
      <p class="privacy-section-body">${e.content}</p>
      ${o}
      ${n}
    </article>`}async function oe(){g({title:"Privacy Policy",description:"Read the Privacy Policy for Prime Freight Management. Learn how we collect, use, and protect your personal data.",keywords:"privacy policy, data protection, prime freight management privacy"});const e=f.sections.map((t,i)=>ie(t,i+1)).join("");return`
    ${h()}
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
          <h1 class="privacy-hero-title">${f.title}</h1>
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
            <p>${f.intro}</p>
          </div>

          <!-- All sections -->
          ${e}

          <!-- Closing statement -->
          <div class="privacy-closing-block">
            <p>${f.closing}</p>
          </div>

        </div>
      </section>

    </main>
    ${m()}
  `}function ne(){const e=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&o.target.classList.add("revealed")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".reveal-stagger, .why-card").forEach(i=>e.observe(i))}function se(){const e=document.getElementById("menuToggle");document.getElementById("closeMenu");const t=document.getElementById("mobileMenu"),i=document.getElementById("mobileMenuOverlay"),o=document.querySelectorAll(".mobile-nav-links a");if(!e||!t)return;document.getElementById("mobileMenu-mounted")||(t.id="mobileMenu-mounted",i.id="mobileMenuOverlay-mounted",document.body.appendChild(i),document.body.appendChild(t));const n=document.getElementById("mobileMenu-mounted"),s=document.getElementById("mobileMenuOverlay-mounted"),r=c=>{n.classList.toggle("active",c),s.classList.toggle("active",c),document.body.style.overflow=c?"hidden":""};e.addEventListener("click",()=>r(!0)),document.getElementById("closeMenu").addEventListener("click",()=>r(!1)),s.addEventListener("click",()=>r(!1)),o.forEach(c=>{c.addEventListener("click",()=>r(!1))})}const x={name(e){return e.trim()?e.trim().length<2?"Name must be at least 2 characters.":null:"Full name is required."},email(e){return e.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())?null:"Please enter a valid email address.":"Email address is required."},phone(e){return e.trim()?/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(e.replace(/\s/g,""))?null:"Please enter a valid phone number.":"Phone number is required."},message:()=>null,mcNumber:()=>null};function H(e,t){return x[e]?x[e](t):null}function ae(e){const t={};for(const i of Object.keys(x)){const o=H(i,e[i]??"");o&&(t[i]=o)}return{isValid:Object.keys(t).length===0,errors:t}}async function re(e){const t={...e,timestamp:new Date().toISOString()};return await fetch(D,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{ok:!0,message:"Your message has been sent."}}function a(e){return document.getElementById(e)}function L(e,t){const i=a(`${e}-error`),o=a(e);i&&(i.textContent=t,i.classList.add("visible")),o&&o.classList.add("input-error")}function $(e){const t=a(`${e}-error`),i=a(e);t&&(t.textContent="",t.classList.remove("visible")),i&&i.classList.remove("input-error")}function ce(){["cf-name","cf-email","cf-phone","cf-message","cf-mc"].forEach($)}function B(e){const t=a("cf-submit"),i=a("cf-spinner"),o=a("cf-btn-text");t&&(t.disabled=e,i&&(i.style.display=e?"inline-block":"none"),o&&(o.textContent=e?"Sending…":"Request Callback"))}function b(e,t){const i=a("cf-banner");i&&(i.className=`cf-banner cf-banner--${e} visible`,i.querySelector(".cf-banner-text").textContent=t,i.scrollIntoView({behavior:"smooth",block:"nearest"}))}function le(){const e=a("cf-banner");e&&e.classList.remove("visible")}function de(){const e=a("contact-form");e&&e.reset()}const p={"cf-name":"name","cf-email":"email","cf-phone":"phone","cf-message":"message","cf-mc":"mcNumber"};function ue(){const e=a("contact-form");e&&(Object.entries(p).forEach(([t,i])=>{const o=a(t);o&&(o.addEventListener("blur",()=>{const n=H(i,o.value);n?L(t,n):$(t)}),o.addEventListener("input",()=>$(t)))}),e.addEventListener("submit",async t=>{var s,r,c,v,S,P;t.preventDefault(),le(),ce();const i={name:((s=a("cf-name"))==null?void 0:s.value)??"",email:((r=a("cf-email"))==null?void 0:r.value)??"",phone:((c=a("cf-phone"))==null?void 0:c.value)??"",message:((v=a("cf-message"))==null?void 0:v.value)??"",mcNumber:((S=a("cf-mc"))==null?void 0:S.value)??""},{isValid:o,errors:n}=ae(i);if(!o){Object.entries(n).forEach(([y,z])=>{const O=Object.keys(p).find(I=>p[I]===y);O&&L(O,z)});const d=Object.keys(p).find(y=>p[y]in n);d&&((P=a(d))==null||P.focus());return}B(!0);try{const d=await re(i);d.ok?(b("success","✓ Message received! A senior dispatcher will contact you within 24 hours."),de()):b("error",d.message||"Something went wrong. Please try again.")}catch(d){console.error("Contact form submission error:",d),b("error","Network error. Please check your connection and try again.")}finally{B(!1)}}))}const A={"/":Y,"/services":_,"/about":K,"/contact":J,"/privacy-policy":oe};async function C(){const e=window.location.pathname,t=A[e]||A["/"],i=document.getElementById("root");try{i.innerHTML=typeof t.then=="function"||t.constructor.name==="AsyncFunction"?await t():t(),ne(),se(),e==="/contact"&&ue()}catch(o){console.error(o),i.innerHTML="<h1>Error loading page</h1>"}}window.addEventListener("popstate",C);document.body.addEventListener("click",e=>{if(e.target.matches("a")){const t=e.target.getAttribute("href");t&&t.startsWith("/")&&(e.preventDefault(),history.pushState(null,null,t),C())}});C();
