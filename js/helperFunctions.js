const menuButton = document.querySelector('#js-toggle-button');
const navItem = document.querySelector('.nav-item');
const body = document.querySelector('body')

menuButton.addEventListener('click', () => {
navItem.classList.toggle('active');
body.classList.toggle('active');

})