let canvas = document.getElementById("matrix-canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let matrixActive = false;
let animationFrame;
let matrixTimer;

// Characters for matrix rain
let chars = "アァイィウエカキクケコサシスセタチツテトナニヌネノハヒフヘホ0123456789";
chars = chars.split("");

let fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0f0";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  });

  animationFrame = requestAnimationFrame(drawMatrix);
}

function startMatrix(duration = 1500) {
  if (matrixActive) return;
  matrixActive = true;

  canvas.style.display = "block";
  drawMatrix();

  clearTimeout(matrixTimer);
  matrixTimer = setTimeout(() => {
    stopMatrix();
  }, duration);
}

function stopMatrix() {
  cancelAnimationFrame(animationFrame);
  matrixActive = false;

  // Fade out canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.display = "none";
}

// Responsive resizing
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops = Array.from({ length: columns }).fill(1);
});

export { startMatrix };
