
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let columns = Math.floor(width / 20);
let drops = Array(columns).fill(1);
let animationFrame;

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#0f0";
  ctx.font = "20px monospace";

  for (let i = 0; i < drops.length; i++) {
    let text = String.fromCharCode(0x30A0 + Math.random() * 96);
    ctx.fillText(text, i * 20, drops[i] * 20);
    if (drops[i] * 20 > height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }

  animationFrame = requestAnimationFrame(drawMatrix);
}

function startMatrixTemporarily() {
  cancelAnimationFrame(animationFrame);
  ctx.clearRect(0, 0, width, height);
  drops = Array(columns).fill(1);
  drawMatrix();
  setTimeout(() => cancelAnimationFrame(animationFrame), 1500);
}

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  columns = Math.floor(width / 20);
  drops = Array(columns).fill(1);
});
