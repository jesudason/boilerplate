const hamburgerButton = document.querySelector('.hamburger');

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('hamburger--active'); // BEM modifier for active state
});
