// ── SMOOTH SCROLL ──
// Scrolls to a section by its ID
function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ── CONTACT FORM SUBMIT ──
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const service = form.querySelector('select').value;
    const message = form.querySelector('textarea').value.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in your name, email, and project description.');
      return;
    }

    // TODO: Replace this with a real form submission.
    // Option 1 — Formspree (free, no backend needed):
    //   1. Sign up at https://formspree.io
    //   2. Create a form and get your endpoint URL
    //   3. Set the <form> action attribute to that URL and method="POST"
    //
    // Option 2 — EmailJS (send email directly from JS):
    //   https://www.emailjs.com
    //
    // Option 3 — Your own backend API endpoint.

    console.log('Form submitted:', { name, phone, email, service, message });
    alert('Thanks, ' + name + '! We\'ll be in touch within one business day.');
    form.reset();
  });
});
