import 'bootstrap/dist/css/bootstrap.min.css';
import Collapse from 'bootstrap/js/dist/collapse';
import './style.css';
import './css/phone.css';
import './css/tablet.css';
import './css/4k.css';

const app = document.querySelector('#app');

app.innerHTML = ``;

document.querySelector('#contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#formMessage').textContent =
    'Thanks! Your message has been received.';
  event.target.reset();
});

document.querySelectorAll('.navbar-nav .nav-link, .navbar-brand[href="#home"], .site-footer a[href="#home"]').forEach(link => {
  link.addEventListener('click', event => {
    const menu = document.querySelector('#mainNav');
    const hash = link.getAttribute('href');
    const target = document.querySelector(hash);
    if (!target) return;

    const menuIsOpen = link.matches('.navbar-nav .nav-link') && menu.classList.contains('show');
    const mobileHomeLink = window.matchMedia('(max-width: 991.98px)').matches && hash === '#home';
    if (!menuIsOpen && !mobileHomeLink) return;

    event.preventDefault();

    const scrollToTarget = () => {
      history.pushState(null, '', hash);
      const top = mobileHomeLink ? 0 : target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    if (menuIsOpen) {
      menu.addEventListener('hidden.bs.collapse', scrollToTarget, { once: true });
      Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
    } else {
      scrollToTarget();
    }
  });
});

// Add click event listeners to nav items to handle active state
document.querySelectorAll('.navbar-nav .nav-item').forEach(item => {
  item.addEventListener('click', function() {
    // 1. Remove the active class from whichever item currently has it
    document.querySelector('.nav-item.active')?.classList.remove('active');
    
    // 2. Add the active class to the clicked item
    this.classList.add('active');
  });
});

// Intersection Observer to highlight nav items based on visible section
const observerOptions = {
  root: null,
  rootMargin: '-50% 0px -50% 0px', // Triggers when section is in the middle of the screen
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  // Mobile uses the sticky header edge as its active-section boundary below.
  if (window.matchMedia('(max-width: 991.98px)').matches) return;

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      // Find the link matching the visible section's ID
      const activeLink = document.querySelector(`.navbar-nav a[href="#${id}"]`);
      
      if (activeLink) {
        // Remove active class from all nav-items
        document.querySelectorAll('.navbar-nav .nav-item').forEach(nav => nav.classList.remove('active'));
        // Add active class to the parent .nav-item of the matching link
        activeLink.closest('.nav-item').classList.add('active');
      }
    }
  });
}, observerOptions);

// On phones, highlight the section whose top has reached the sticky nav.
// This keeps the open hamburger menu in sync with the section title the user
// has just scrolled to, instead of highlighting a section farther down screen.
const mobileNavQuery = window.matchMedia('(max-width: 991.98px)');
const updateMobileActiveLink = () => {
  if (!mobileNavQuery.matches) return;

  const brand = document.querySelector('.site-header .navbar-brand');
  const navBoundary = window.scrollY + (brand?.getBoundingClientRect().bottom ?? 50) + 8;
  const sections = [...document.querySelectorAll('.navbar-nav a[href^="#"]')]
    .map(link => ({ link, section: document.querySelector(link.getAttribute('href')) }))
    .filter(item => item.section)
    .filter(item => item.section.getBoundingClientRect().top + window.scrollY <= navBoundary);
  const activeLink = sections.at(-1)?.link;

  document.querySelectorAll('.navbar-nav .nav-item').forEach(item => item.classList.remove('active'));
  activeLink?.closest('.nav-item')?.classList.add('active');
};

window.addEventListener('scroll', updateMobileActiveLink, { passive: true });
window.addEventListener('resize', updateMobileActiveLink);
window.addEventListener('hashchange', updateMobileActiveLink);
mobileNavQuery.addEventListener('change', updateMobileActiveLink);
updateMobileActiveLink();

// Track all sections that match your nav links
document.querySelectorAll('section[id], div[id]').forEach(section => {
  if (['home', 'activities', 'food', 'transportation', 'accommodations', 'faq'].includes(section.id)) {
    observer.observe(section);
  }
});
