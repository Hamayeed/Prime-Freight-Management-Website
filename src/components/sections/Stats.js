export function Stats() {
  const statsList = [
    {
      number: '6+',
      label: 'Years Experience'
    },
    {
      number: '33+',
      label: 'Carrier Partners'
    },
    {
      number: 'All 50',
      label: 'States Covered'
    },
    {
      number: '$3.5M+',
      label: 'Revenue Generated for Carriers'
    }
  ];

  const statsHtml = statsList.map(stat => `
    <div class="stat-item">
      <div class="stat-number">${stat.number}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');

  return `
    <section class="stats-section glass">
      <div class="stats-container">
        ${statsHtml}
      </div>
    </section>
  `;
}
