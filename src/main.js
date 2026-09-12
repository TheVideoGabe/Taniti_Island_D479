import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

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
