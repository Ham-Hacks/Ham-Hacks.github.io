
import { startMatrix } from './matrix.js';

document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const tabId = button.getAttribute('data-tab');

    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('active');
    });

    document.querySelector(`#${tabId}`).classList.add('active');

    document.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    // Trigger matrix rain effect briefly
    startMatrix();
  });
});


// Email obfuscation
const user = "hamhacks";
const domain = "hotmail.com";
const emailLink = document.getElementById("email-link");
if (emailLink) {
  const email = `${user}@${domain}`;
  emailLink.innerHTML = `<a href="mailto:${email}">${email}</a>`;
}
