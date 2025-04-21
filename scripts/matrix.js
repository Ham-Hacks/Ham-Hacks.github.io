const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'アァイィウエエェオカキクケコサシスセソタチツテトナニヌネノ'.split('');
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = Array.from({ length: columns }).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0f0';
  ctx.font = fontSize + 'px monospace';

  drops.forEach((y, x) => {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, x * fontSize, y * fontSize);
    drops[x] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
  });
}

let interval;

function startMatrix() {
  canvas.style.opacity = 1;
  interval = setInterval(draw, 33);
  setTimeout(() => {
    clearInterval(interval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.opacity = 0;
  }, 1500);
}
