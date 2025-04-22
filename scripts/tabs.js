import { startMatrix } from './matrix.js';

document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();

    // Get the tab ID from the button
    const tabId = button.getAttribute('data-tab');

    // Deactivate all tabs and their contents
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

    // Activate the clicked tab and its content
    document.querySelector(`#${tabId}`).classList.add('active');
    button.classList.add('active');

    // Trigger matrix rain effect
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
