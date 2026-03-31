const hamburger_button = document.querySelector('.hamburger');

hamburger_button.addEventListener('click', () => {
    hamburger_button.classList.toggle('hamburger--active');
});
