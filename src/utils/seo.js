import { APP_NAME } from './constants.js';

export function setSEO({ title, description, keywords }) {
  document.title = `${title} | ${APP_NAME}`;
  
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute("content", description);

  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    document.head.appendChild(metaKeywords);
  }
  
  // Default industry keywords strictly implemented
  const baseKeywords = "truck dispatch service, freight dispatch, logistics support, load planning, owner operator transport";
  metaKeywords.setAttribute("content", keywords ? `${keywords}, ${baseKeywords}` : baseKeywords);
}
