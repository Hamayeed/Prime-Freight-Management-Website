import { GOOGLE_SHEETS_URL } from './constants.js';

/* ============================================================
   VALIDATION
   ============================================================ */

const VALIDATORS = {
  name(value) {
    if (!value.trim()) return 'Full name is required.';
    if (value.trim().length < 2) return 'Name must be at least 2 characters.';
    return null;
  },

  email(value) {
    if (!value.trim()) return 'Email address is required.';
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(value.trim())) return 'Please enter a valid email address.';
    return null;
  },

  phone(value) {
    if (!value.trim()) return 'Phone number is required.';
    // Accept formats: (123) 456-7890, 123-456-7890, +1 713 309 6606, etc.
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!re.test(value.replace(/\s/g, ''))) return 'Please enter a valid phone number.';
    return null;
  },

  // Optional fields — always valid
  message: () => null,
  mcNumber: () => null,
};

/**
 * Validate a single field.
 * @param {string} field - key matching VALIDATORS
 * @param {string} value
 * @returns {string|null} error message or null
 */
export function validateField(field, value) {
  return VALIDATORS[field] ? VALIDATORS[field](value) : null;
}

/**
 * Validate the entire form data object.
 * @param {Object} data
 * @returns {{ isValid: boolean, errors: Object }}
 */
export function validateForm(data) {
  const errors = {};
  for (const field of Object.keys(VALIDATORS)) {
    const error = validateField(field, data[field] ?? '');
    if (error) errors[field] = error;
  }
  return { isValid: Object.keys(errors).length === 0, errors };
}

/* ============================================================
   SUBMISSION
   ============================================================ */

/**
 * Submit form data to Google Sheets via Apps Script Web App.
 * @param {Object} data - { name, email, phone, message, mcNumber }
 * @returns {Promise<{ ok: boolean, message: string }>}
 */
export async function submitToGoogleSheets(data) {
  const payload = {
    ...data,
    timestamp: new Date().toISOString(),
  };

  const response = await fetch(GOOGLE_SHEETS_URL, {
    method: 'POST',
    // Apps Script requires text/plain or no-cors mode when called cross-origin.
    // Using 'no-cors' means we can't read the response body, but the data
    // is still appended. We treat any network success as a form success.
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  // In 'no-cors' mode response.ok is always false (opaque response).
  // If fetch itself didn't throw, the request was sent successfully.
  return { ok: true, message: 'Your message has been sent.' };
}

/* ============================================================
   DOM HELPERS
   ============================================================ */

function getEl(id) {
  return document.getElementById(id);
}

function showError(fieldId, message) {
  const el = getEl(`${fieldId}-error`);
  const input = getEl(fieldId);
  if (el) {
    el.textContent = message;
    el.classList.add('visible');
  }
  if (input) input.classList.add('input-error');
}

function clearError(fieldId) {
  const el = getEl(`${fieldId}-error`);
  const input = getEl(fieldId);
  if (el) {
    el.textContent = '';
    el.classList.remove('visible');
  }
  if (input) input.classList.remove('input-error');
}

function clearAllErrors() {
  ['cf-name', 'cf-email', 'cf-phone', 'cf-message', 'cf-mc'].forEach(clearError);
}

function setSubmitState(isLoading) {
  const btn = getEl('cf-submit');
  const spinner = getEl('cf-spinner');
  const btnText = getEl('cf-btn-text');
  if (!btn) return;

  btn.disabled = isLoading;
  if (spinner) spinner.style.display = isLoading ? 'inline-block' : 'none';
  if (btnText) btnText.textContent = isLoading ? 'Sending…' : 'Request Callback';
}

function showBanner(type, message) {
  const banner = getEl('cf-banner');
  if (!banner) return;
  banner.className = `cf-banner cf-banner--${type} visible`;
  banner.querySelector('.cf-banner-text').textContent = message;
  banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideBanner() {
  const banner = getEl('cf-banner');
  if (banner) banner.classList.remove('visible');
}

function resetForm() {
  const form = getEl('contact-form');
  if (form) form.reset();
}

/* ============================================================
   FIELD NAMES → IDs MAP
   ============================================================ */

const FIELD_MAP = {
  'cf-name': 'name',
  'cf-email': 'email',
  'cf-phone': 'phone',
  'cf-message': 'message',
  'cf-mc': 'mcNumber',
};

/* ============================================================
   INIT — call this after the page HTML is injected into the DOM
   ============================================================ */

export function initContactForm() {
  const form = getEl('contact-form');
  if (!form) return;

  // --- Live validation on blur ---
  Object.entries(FIELD_MAP).forEach(([inputId, fieldKey]) => {
    const input = getEl(inputId);
    if (!input) return;

    input.addEventListener('blur', () => {
      const error = validateField(fieldKey, input.value);
      if (error) {
        showError(inputId, error);
      } else {
        clearError(inputId);
      }
    });

    // Clear error as user types
    input.addEventListener('input', () => clearError(inputId));
  });

  // --- Submit ---
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideBanner();
    clearAllErrors();

    // Collect values
    const data = {
      name: getEl('cf-name')?.value ?? '',
      email: getEl('cf-email')?.value ?? '',
      phone: getEl('cf-phone')?.value ?? '',
      message: getEl('cf-message')?.value ?? '',
      mcNumber: getEl('cf-mc')?.value ?? '',
    };

    // Validate
    const { isValid, errors } = validateForm(data);
    if (!isValid) {
      Object.entries(errors).forEach(([field, msg]) => {
        // Find the input ID for this field key
        const inputId = Object.keys(FIELD_MAP).find(k => FIELD_MAP[k] === field);
        if (inputId) showError(inputId, msg);
      });
      // Focus first invalid field
      const firstErrorId = Object.keys(FIELD_MAP).find(k => FIELD_MAP[k] in errors);
      if (firstErrorId) getEl(firstErrorId)?.focus();
      return;
    }

    // Submit
    setSubmitState(true);
    try {
      const result = await submitToGoogleSheets(data);
      if (result.ok) {
        showBanner('success', '✓ Message received! A senior dispatcher will contact you within 24 hours.');
        resetForm();
      } else {
        showBanner('error', result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      showBanner('error', 'Network error. Please check your connection and try again.');
    } finally {
      setSubmitState(false);
    }
  });
}
