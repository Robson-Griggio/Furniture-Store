let navList;

document.addEventListener('DOMContentLoaded', function() {
    navList = document.querySelector('#nav-list');
    hamburgerIcon = document.querySelector('.nav-hamburguer-icon')
});
const toggleMenuOpen = () => {
    document.body.classList.toggle('open');
    navList.classList.toggle('nav-list-open');
    hamburgerIcon.classList.toggle('open');
};