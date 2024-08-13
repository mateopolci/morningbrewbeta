const mobileMenu = document.getElementById('mobileMenu');
const mobileButton = document.getElementById('mobileButton');

mobileButton.addEventListener('click', (event) => {
    event.preventDefault();
    mobileMenu.classList.toggle('hidden');
});
