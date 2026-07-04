/* ============================================
   Flurix.in — Testimonial Slider Controller
   ============================================ */

export function initTestimonialSlider() {
  const track = document.getElementById('testimonial-track');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  if (!track) return;

  let currentIndex = 0;
  const cards = track.querySelectorAll('.testimonial-card');
  const totalCards = cards.length;

  function getCardWidth() {
    if (window.innerWidth < 768) return track.parentElement.offsetWidth;
    return 440;
  }

  function slide(direction) {
    const cardWidth = getCardWidth();
    const gap = 24;
    const maxIndex = totalCards - Math.floor(track.parentElement.offsetWidth / (cardWidth + gap));

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > Math.max(0, maxIndex)) currentIndex = Math.max(0, maxIndex);

    track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => slide(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => slide(1));

  /* Touch swipe support */
  let startX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  track.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      slide(diff > 0 ? 1 : -1);
    }
    isDragging = false;
  });
}

/* --- Portfolio Filter --- */
export function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const cards = document.querySelectorAll('.portfolio-card');
  let filterTimeout;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (filterTimeout) clearTimeout(filterTimeout);

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          filterTimeout = setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          filterTimeout = setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });
}
