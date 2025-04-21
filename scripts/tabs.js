const buttons = document.querySelectorAll(".tab-button");
const tabs = document.querySelectorAll(".tab-content");
const canvas = document.getElementById("matrix-canvas");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();
    const target = button.dataset.tab;

    // Activate Matrix Rain
    canvas.style.opacity = 1;
    setTimeout(() => canvas.style.opacity = 0, 800);

    buttons.forEach(btn => btn.classList.remove("active"));
    tabs.forEach(tab => tab.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});
