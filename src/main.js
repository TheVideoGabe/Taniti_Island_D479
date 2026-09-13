import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('#mainNav');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
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

// Track all sections that match your nav links
document.querySelectorAll('section[id], div[id]').forEach(section => {
  if (['home', 'activities', 'food', 'visit', 'faq'].includes(section.id)) {
    observer.observe(section);
  }
});
