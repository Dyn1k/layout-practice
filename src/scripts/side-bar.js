const burgerButton = document.querySelector('.button__burger');
const sideBar = document.querySelector('.side-bar');

burgerButton.addEventListener('click', function () {
    sideBar.style.display = 'flex';
})

const closeBurgerButton = document.querySelector('.button__close');

closeBurgerButton.addEventListener('click', function () {
    sideBar.style.display = 'none';
})

document.addEventListener('click', function (evt) {
    if (!sideBar.contains(evt.target) && !burgerButton.contains(evt.target) && window.innerWidth < 1366) {
        sideBar.style.display = 'none';
    }
})

window.addEventListener('resize', function () {
    if (document.documentElement.clientWidth >= 1366) {
        sideBar.style.display = 'flex';
    } else {
        sideBar.style.display = 'none';
    }
})