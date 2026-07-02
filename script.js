lucide.createIcons();

// Nav: fundo ao rolar
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Menu mobile
const toggle = document.getElementById('nav-toggle');
const links  = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
});

links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);
revealEls.forEach(el => revealObserver.observe(el));

// Contador animado nos números
// Lê o texto original, extrai prefixo + número + sufixo e anima
function animateCounter(el) {
  const original = el.textContent.trim();
  const match = original.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
  if (!match) return;

  const [, prefix, numStr, suffix] = match;
  const target   = parseInt(numStr, 10);
  const duration = 1400;
  let startTime  = null;

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function step(ts) {
    if (!startTime) startTime = ts;
    const progress = Math.min((ts - startTime) / duration, 1);
    const current  = Math.round(target * easeOutCubic(progress));
    el.textContent = prefix + current + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }

  // Respeita prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  requestAnimationFrame(step);
}

const numberValues = document.querySelectorAll('.numbers__value');
const counterObserver = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  }),
  { threshold: 0.5 }
);
numberValues.forEach(el => counterObserver.observe(el));

// Form: feedback visual no submit
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn  = form.querySelector('button[type="submit"]');
    const icon = btn.querySelector('svg');

    const originalHTML = btn.innerHTML;
    btn.disabled   = true;
    btn.innerHTML  = 'Mensagem enviada!';
    btn.style.cssText = 'background:#065f46; color:#fff; cursor:default;';

    setTimeout(() => {
      btn.innerHTML     = originalHTML;
      btn.disabled      = false;
      btn.style.cssText = '';
      lucide.createIcons();
      form.reset();
    }, 3500);
  });
}
