const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const burst = document.getElementById('matrix-burst');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.getAttribute('data-tab');

    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    document.getElementById(tab).classList.add('active');
    button.classList.add('active');

    showMatrixBurst();
  });
});

function showMatrixBurst() {
  const cols = Math.floor(window.innerWidth / 10);
  const rows = Math.floor(window.innerHeight / 20);
  let matrix = '';
  const chars = '01';

  for (let i = 0; i < rows; i++) {
    let line = '';
    for (let j = 0; j < cols; j++) {
      line += chars[Math.floor(Math.random() * chars.length)];
    }
    matrix += line + '\n';
  }

  burst.textContent = matrix;
  burst.style.opacity = '1';

  setTimeout(() => {
    burst.style.opacity = '0';
  }, 400);
}
