/* ============================================
   Flurix — Shared Header + Footer Components
   Injects consistent nav & footer into every page
   ============================================ */
(function () {

  const path = window.location.pathname;
  const isCareers = path.includes('careers') || path.includes('job');
  const isHome    = !isCareers; // extend as more pages are added

  /* On sub-pages, prefix hash links with '/' so they navigate to home page sections:
     e.g. from /careers: '#contact' becomes '/#contact' which loads home page and scrolls to #contact */
  const root = isHome ? '' : '/';

  /* ── NAV HTML ── */
  function buildNav() {
    return `
    <nav class="fl-nav" id="flNav">
      <div class="fl-nav-inner">

        <a href="${isHome ? '#' : '/'}" class="fl-nav-logo">
          <img src="https://flurix.s3.us-east-1.amazonaws.com/transparent_logo_Flurix.png" alt="Flurix.in">
        </a>

        <ul class="fl-nav-links">
          <li><a href="${root}#home"    ${isHome ? 'class="active"' : ''}>Home</a></li>
          <li><a href="${root}#about"   >About</a></li>

          <!-- Services Dropdown -->
          <li class="fl-dropdown">
            <a href="${root}#services">
              Services
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 9l-7 7-7-7"/></svg>
            </a>
            <div class="fl-dropdown-menu">
              <a href="#" class="fl-dd-item">
                <div class="fl-dd-icon"><svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
                <div><div class="fl-dd-label">AI Agents</div><div class="fl-dd-sub">Intelligent automation</div></div>
              </a>
              <a href="#" class="fl-dd-item">
                <div class="fl-dd-icon"><svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg></div>
                <div><div class="fl-dd-label">Chatbots</div><div class="fl-dd-sub">Conversational AI</div></div>
              </a>
              <a href="#" class="fl-dd-item">
                <div class="fl-dd-icon"><svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg></div>
                <div><div class="fl-dd-label">Web Dev</div><div class="fl-dd-sub">Scalable platforms</div></div>
              </a>
              <a href="#" class="fl-dd-item">
                <div class="fl-dd-icon"><svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg></div>
                <div><div class="fl-dd-label">App Dev</div><div class="fl-dd-sub">Native mobile apps</div></div>
              </a>
              <a href="#" class="fl-dd-item">
                <div class="fl-dd-icon"><svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg></div>
                <div><div class="fl-dd-label">E-Commerce</div><div class="fl-dd-sub">Online stores</div></div>
              </a>
              <a href="${root}#digital-marketing" class="fl-dd-item">
                <div class="fl-dd-icon"><svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg></div>
                <div><div class="fl-dd-label">Digital Marketing</div><div class="fl-dd-sub">Google Ads · Meta Ads</div></div>
              </a>
            </div>
          </li>

          <li><a href="${root}#our-work">Our Work</a></li>
          <li><a href="${root}#digital-marketing">Digital Marketing</a></li>
          <li><a href="/careers" ${isCareers ? 'class="active"' : ''}>Careers</a></li>
        </ul>

        <a href="${root}#contact" class="fl-nav-cta">Contact Us</a>

        <button class="fl-hamburger" id="flHamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="fl-mobile-nav" id="flMobileNav">
      <a href="${root}#home">Home</a>
      <a href="${root}#about">About</a>
      <a href="${root}#services">Services</a>
      <a href="${root}#our-work">Our Work</a>
      <a href="${root}#digital-marketing">Digital Marketing</a>
      <a href="/careers" ${isCareers ? 'class="active"' : ''}>Careers</a>
      <a href="${root}#contact" class="fl-mob-cta">Contact Us</a>
    </div>`;
  }

  /* ── FOOTER HTML ── */
  function buildFooter() {
    return `
    <footer class="fl-footer">
      <div class="fl-footer-inner">
        <div>
          <img src="https://flurix.s3.us-east-1.amazonaws.com/transparent_logo_Flurix.png" alt="Flurix.in" class="fl-footer-logo">
          <p class="fl-footer-desc">Building intelligent, scalable, and premium software products for the world's most innovative companies.</p>
          <div class="fl-footer-socials">
            <a href="https://www.linkedin.com/company/flurix/" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" aria-label="X / Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>

        <div class="fl-footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="${root}#about">About Us</a></li>
            <li><a href="${root}#services">Services</a></li>
            <li><a href="${root}#why-flurix">Why Flurix.in</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>

        <div class="fl-footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="${root}#services">AI Agents</a></li>
            <li><a href="${root}#services">Custom Chatbots</a></li>
            <li><a href="${root}#services">Web Platforms</a></li>
            <li><a href="${root}#services">E-Commerce</a></li>
            <li><a href="${root}#services">Digital Marketing</a></li>
          </ul>
        </div>

        <div class="fl-footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
          <br>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@flurix.in">info@flurix.in</a></li>
            <li><a href="mailto:careers@flurix.in">careers@flurix.in</a></li>
          </ul>
        </div>
      </div>

      <div class="fl-footer-bottom">
        <p>© 2026 Flurix.in — All rights reserved.</p>
        <p>Made with precision in India 🇮🇳</p>
      </div>
    </footer>`;
  }

  /* ── INIT ── */
  function init() {
    /* Insert nav at top of body */
    document.body.insertAdjacentHTML('afterbegin', buildNav());

    /* Insert footer at bottom of body (before any existing footer) */
    const existingFooter = document.querySelector('footer');
    if (existingFooter) {
      existingFooter.outerHTML = buildFooter();
    } else {
      document.body.insertAdjacentHTML('beforeend', buildFooter());
    }

    /* Navbar scroll glass effect */
    const nav = document.getElementById('flNav');
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    /* Hamburger toggle */
    const hamburger = document.getElementById('flHamburger');
    const mobileNav = document.getElementById('flMobileNav');

    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    /* Active nav link on scroll */
    const sections = document.querySelectorAll('section[id]');
    if (sections.length > 0) {
      window.addEventListener('scroll', function () {
        const scrollY = window.scrollY + 120;
        const navLinks = document.querySelectorAll('.fl-nav-links a');
        const mobileLinks = document.querySelectorAll('.fl-mobile-nav a');
        sections.forEach(section => {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          const id = section.getAttribute('id');
          const selector = id === 'home' ? 'a[href="#home"]' : `a[href="#${id}"]`;
          const link = document.querySelector(selector);
          if (link && scrollY >= top && scrollY < top + height) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            if (mobileLinks.length > 0) {
              mobileLinks.forEach(l => l.classList.remove('active'));
              const mobileLink = document.querySelector(`.fl-mobile-nav ${selector}`);
              if (mobileLink) mobileLink.classList.add('active');
            }
          }
        });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
