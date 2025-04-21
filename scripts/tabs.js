<script>
  // Email obfuscation
  const user = 'hamhacks';
  const domain = 'hotmail.com';
  const emailLink = document.getElementById('email-link');

  if (emailLink) {
    const email = `${user}@${domain}`;
    emailLink.innerHTML = `<a href="mailto:${email}">${email}</a>`;
  }
</script>


document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = tab.getAttribute("data-tab");

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      contents.forEach(c => {
        c.classList.remove("active");
        if (c.id === targetId) c.classList.add("active");
      });

      if (typeof triggerMatrixRain === "function") {
        triggerMatrixRain(1200);
      }
    });
  });
});
