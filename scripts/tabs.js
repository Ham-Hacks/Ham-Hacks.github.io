document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = tab.getAttribute("data-tab");

      // Neon tab switch
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Show correct content
      contents.forEach(c => {
        c.classList.remove("active");
        if (c.id === targetId) c.classList.add("active");
      });

      // ⚡ Trigger matrix burst
      if (typeof triggerMatrixRain === "function") {
        triggerMatrixRain(1200); // 1.2 seconds
      }
    });
  });
});
