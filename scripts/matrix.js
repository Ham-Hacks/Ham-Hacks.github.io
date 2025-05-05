const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");


let animationId;
let active = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);
const drops = new Array(columns).fill(1);

function drawMatrix() {
  if (!active) return;

  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff00";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }

  animationId = requestAnimationFrame(drawMatrix);
}

function triggerMatrixRain(duration = 1500) {
  if (active) return;

  active = true;
  canvas.style.opacity = 1;
  drawMatrix();

  setTimeout(() => {
    active = false;
    cancelAnimationFrame(animationId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.opacity = 0;
  }, duration);
}
