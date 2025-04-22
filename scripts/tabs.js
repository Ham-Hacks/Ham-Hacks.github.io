
document.querySelectorAll(".tab-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");

    if (typeof startMatrixTemporarily === "function") {
      startMatrixTemporarily();
    }
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
