export async function TestimonialsStrip() {
  let testimonials = [];
  try {
    const response = await fetch('/src/data/testimonials.json');
    testimonials = await response.json();
  } catch (e) {
    console.error('Failed to load testimonials', e);
  }

  // Double the testimonials for seamless loop
  const displayItems = [...testimonials, ...testimonials];

  const cardsHtml = displayItems.map(t => {
    const stars = Array(t.rating || 5).fill('<svg width="14" height="14" viewBox="0 0 24 24" fill="var(--primary-color)" stroke="var(--primary-color)" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>').join('');

    return `
      <div class="testimonial-strip-card glass">
        <div class="testimonial-stars">${stars}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <div class="author-info">
            <span class="author-name">${t.name}</span>
            <span class="author-role">${t.role}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="testimonials-strip-section">
      <div class="container">
        <h2 class="section-title-small">Trusted Across <span class="text-gradient">The Country</span></h2>
      </div>
      <div class="strip-container">
        <div class="strip-track">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}
