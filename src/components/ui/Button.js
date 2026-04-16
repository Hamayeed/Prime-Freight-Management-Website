export function Button({ label, href, className = "btn-primary", style = "" }) {
  if (href) {
    return `<a href="${href}" class="btn ${className}" style="${style}">${label}</a>`;
  }
  return `<button class="btn ${className}" style="${style}">${label}</button>`;
}
