export function WhyChooseUs() {
  const reasons = [
    {
      title: 'Data-Driven Load Strategy',
      desc: 'We analyze real-time market data to position your trucks in the highest-paying lanes consistently.',
      highlights: ['Market Heatmaps', 'Lane Optimization', 'Trend Analysis']
    },
    {
      title: 'Flexible, Risk-Free Pricing',
      desc: 'No upfront fees. We offer both flat-rate and percentage options designed to scale with your business.',
      highlights: ['No Upfront Costs', 'Weekly Payments', 'Performance-Based']
    },
    {
      title: '24/7 Dedicated Support',
      desc: 'Your dispatcher is always available to solve problems before they impact your bottom line.',
      highlights: ['Real-time Updates', 'Issue Resolution', 'Always Online']
    }
  ];

  const cardsHtml = reasons.map((r, i) => `
    <div class="why-card ${i === 1 ? 'highlight' : ''}">
      <div class="why-card-content">
        <h3>${r.title}</h3>
        <p>${r.desc}</p>
        <ul class="why-highlights">
          ${r.highlights.map(h => `<li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ${h}
          </li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  return `
    <section class="section why-choose-us" id="why-pFM">
      <div class="container">
        <div class="why-header text-center">
          <h2 class="why-title">Why Top Fleets <span class="text-gradient">Choose PFM</span></h2>
          <p class="why-subtext mx-auto">
            We don’t just book loads — we build profitable, long-term freight strategies that keep your trucks moving and your revenue growing. Our team handles the back-office while you focus on the road.
          </p>
        </div>
        <div class="why-grid">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}