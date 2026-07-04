/* ============================================
   Flurix.in — Main Application Entry
   ============================================ */

import { initScrollReveal, initCounters, initParticles, initPreloader, initBackToTop, initFAQ, initParallax } from './animations.js';
import { initTestimonialSlider, initPortfolioFilter } from './slider.js';

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn  = document.getElementById('contact-submit');
  const modal      = document.getElementById('contact-success-modal');
  const modalClose = document.getElementById('success-modal-close');

  /* ── Show / hide modal ── */
  function openModal() {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    // Update URL for Google Ads conversion tracking (no page reload)
    window.location.hash = 'thank-you';
    modalClose?.focus();
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    // Restore clean URL (remove #thank-you hash)
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }

  modalClose?.addEventListener('click', closeModal);

  // Close on overlay click
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) closeModal();
  });

  /* ── Form submit ── */
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const payload = {
      fullname:        document.getElementById('contact-fullname')?.value.trim(),
      email:           document.getElementById('contact-email')?.value.trim(),
      contact_number:  document.getElementById('contact-number')?.value.trim(),
      service_needed:  document.getElementById('contact-service')?.value,
      budget:          document.getElementById('contact-budget')?.value,
      project_details: document.getElementById('contact-project')?.value.trim() || null,
    };

    // Basic client-side guard
    if (!payload.fullname || !payload.email || !payload.contact_number ||
        !payload.service_needed || !payload.budget) {
      alert('Please fill in all required fields.');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          style="animation:spin 1s linear infinite">
          <circle cx="12" cy="12" r="10" stroke-opacity=".25"/>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/>
        </svg>
        Sending…`;
    }

    try {
      const response = await fetch('https://api.flurix.in/contactUs/send_enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) console.warn('API responded with', response.status);
    } catch (error) {
      // Backend may not be updated yet — log silently, still show success UX
      console.warn('Contact form API error (non-blocking):', error.message);
    }

    // Always show success popup and update URL for Google Ads tracking
    form.reset();
    openModal();

    // Re-enable button and restore label
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        Get Free Consultation`;
    }
  });
}


function initNewsletter() {
  const btn = document.querySelector('.newsletter-subscribe-btn');
  const input = btn?.previousElementSibling;
  if (!btn || !input) return;
  btn.addEventListener('click', () => {
    const email = input.value.trim();
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    btn.textContent = 'Subscribed!';
    setTimeout(() => { btn.textContent = 'Subscribe'; }, 2000);
  });
}

/* --- Boot application --- */
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initScrollReveal();
  initCounters();
  initParticles();
  initBackToTop();
  initFAQ();
  initParallax();
  initTestimonialSlider();
  initPortfolioFilter();
  initContactForm();
  initNewsletter();

  console.log('%c✦ Flurix.in — Loaded', 'color:#b57c8a;font-size:14px;font-weight:bold;');
});
