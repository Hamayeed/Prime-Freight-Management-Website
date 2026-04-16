export function Card({ title, content, icon = "", features = [], badge = null, className = "" }) {
  const featuresHtml = features && features.length > 0 
    ? `<ul class="card-features">
        ${features.map(f => `<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> ${f}</li>`).join('')}
       </ul>` 
    : '';

  const badgeHtml = badge 
    ? `<div class="card-badge">${badge}</div>` 
    : '';

  return `
    <div class="premium-card glass ${className}">
      ${badgeHtml}
      <div class="card-icon-wrapper">
        ${icon}
      </div>
      <h3 class="card-title">${title}</h3>
      <p class="card-desc">${content}</p>
      ${featuresHtml}
    </div>
  `;
}
