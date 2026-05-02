// ─── Scroll animations (WoW.js replacement) ──────────────────────────────
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.dataset.wowDuration) el.style.animationDuration = el.dataset.wowDuration;
        el.style.visibility = 'visible';
        el.classList.add('animated');
        observer.unobserve(el);
      });
    },
    { rootMargin: '-100px 0px' }
  );
  document.querySelectorAll('.wow').forEach((el) => observer.observe(el));
})();

// ─── Loader ───────────────────────────────────────────────────────────────
(function () {
  const loader = document.querySelector('.loader');
  if (!loader) return;
  loader.style.transition = 'opacity 1s';
  loader.style.opacity = '0';
  setTimeout(() => loader.remove(), 1000);
})();

// ─── Navbar collapse ──────────────────────────────────────────────────────
function collapseNavbar() {
  const scrolled = window.scrollY > 50;
  document.querySelectorAll('nav').forEach((nav) => {
    nav.classList.toggle('navbar-collapsed', scrolled);
    nav.classList.toggle('navbar-expanded', !scrolled);
  });
}
collapseNavbar();
window.addEventListener('scroll', collapseNavbar, { passive: true });

// ─── Scrollspy ────────────────────────────────────────────────────────────
(function () {
  const navLinks = document.querySelectorAll('nav li .anchor[href^="#"]');
  if (!navLinks.length) return;

  const sections = Array.from(
    new Set(Array.from(navLinks).map((a) => document.querySelector(a.getAttribute('href'))))
  ).filter(Boolean);

  let lastId = '';

  function updateActive() {
    const scrollY = window.scrollY;
    const atBottom = window.innerHeight + window.scrollY + 1 >= document.body.scrollHeight;
    let current = sections[0];
    for (const section of sections) {
      if (section.offsetTop <= scrollY + 1 || atBottom) current = section;
    }
    const id = current?.id ?? '';
    if (id === lastId) return;
    lastId = id;
    navLinks.forEach((link) => {
      link.parentElement.classList.toggle('active', link.getAttribute('href') === '#' + id);
    });
  }

  updateActive();
  window.addEventListener('scroll', updateActive, { passive: true });
})();

// ─── Smooth scroll ────────────────────────────────────────────────────────
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('.anchor');
  if (!anchor) return;
  const href = anchor.getAttribute('href');
  if (!href?.startsWith('#')) return;
  const target = document.getElementById(href.slice(1));
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth' });
});

// ─── Mobile menu ──────────────────────────────────────────────────────────
(function () {
  const btn = document.getElementById('mobile-menu-button');
  if (!btn) return;

  function openMenu() {
    document.getElementById('mobile-menu-button-closed').style.display = 'none';
    document.getElementById('mobile-menu-button-opened').style.display = '';
    btn.setAttribute('aria-expanded', 'true');
    document.getElementById('mobile-menu-sections').classList.remove('hidden');
  }

  function closeMenu() {
    document.getElementById('mobile-menu-button-closed').style.display = '';
    document.getElementById('mobile-menu-button-opened').style.display = 'none';
    btn.setAttribute('aria-expanded', 'false');
    document.getElementById('mobile-menu-sections').classList.add('hidden');
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });

  document.querySelectorAll('.li-section').forEach((li) => li.addEventListener('click', closeMenu));
})();

// ─── Carousel ─────────────────────────────────────────────────────────────
(function () {
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  const slides = Array.from(track.children);
  let current = 0;

  function goTo(index) {
    current = ((index % slides.length) + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
  }

  document.getElementById('carousel-prev')?.addEventListener('click', () => goTo(current - 1));
  document.getElementById('carousel-next')?.addEventListener('click', () => goTo(current + 1));
})();

// ─── Portfolio modals ─────────────────────────────────────────────────────
(function () {
  document.querySelectorAll('.image-popup').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const dialog = document.getElementById('dialog-' + trigger.dataset.modal);
      dialog?.showModal();
    });
  });

  document.querySelectorAll('.portfolio-dialog').forEach((dialog) => {
    dialog.querySelector('.popup-modal-close')?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) dialog.close();
    });
  });
})();
