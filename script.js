const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const faqButtons = document.querySelectorAll('.faq-item button');
const form = document.querySelector('.contact-form');
const feedback = document.querySelector('.form-feedback');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A' && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
  }
});

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isOpen = item.classList.toggle('open');
    button.setAttribute('aria-expanded', isOpen);
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const nombre = data.get('nombre').trim();
  const correo = data.get('correo').trim();
  const motivo = data.get('motivo');

  if (!nombre || !correo || !motivo) {
    feedback.textContent = 'Completa nombre, correo y selecciona un motivo.';
    feedback.style.color = '#f59e0b';
    return;
  }

  feedback.textContent = '¡Gracias! Un asesor te contactará en breve.';
  feedback.style.color = '#38bdf8';
  form.reset();
});
