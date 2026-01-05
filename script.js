// mobile menu toggle (defensive)
try {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // animate sections on scroll (fallback for AOS)
  const sections = document.querySelectorAll('.section');

  const reveal = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(reveal, { threshold: 0.2 });
    sections.forEach(sec => observer.observe(sec));
  }

  // initialize AOS if loaded
  if (window.AOS && typeof AOS.init === 'function') {
    AOS.init();
  }
} catch (err) {
  // Log errors to console so user can see them in DevTools
  console.error('Script error:', err);
}

/* ---------- TRIGGER FLOAT-IN WHEN SECTION SCROLLS INTO VIEW ---------- */
const sections = document.querySelectorAll('.section');

const secObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => secObserver.observe(sec));