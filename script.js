// Sticky header
window.addEventListener('scroll', () => {
  const h = document.getElementById('header');
  h.classList.toggle('scrolled', window.scrollY > 60);
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
});

// Tutup menu saat link diklik
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
  });
});

// Form submit
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  this.style.display = 'none';
  const notif = document.getElementById('notif');
  notif.style.display = 'flex';
  notif.style.animation = 'fadeInUp 0.6s ease forwards';
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.harga-card, .aktivitas-card, .rekom-card, .tentang-grid').forEach(el => {
  el.classList.add('fade-on-scroll');
  observer.observe(el);
});
