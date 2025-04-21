document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const tab = button.dataset.tab;
    document.querySelectorAll('.tab-content').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(tab).classList.add('active');

    if (typeof startMatrix === 'function') startMatrix();
  });
});
