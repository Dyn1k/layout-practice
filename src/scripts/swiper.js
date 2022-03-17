import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiper = null;

const addSwiper = () => {
    if (!swiper) {
        swiper = new Swiper(".swipe", {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}

const deleteSwiper = () => {
    if (swiper) {
        swiper.destroy();
        swiper = null;
    }
}

if (document.documentElement.clientWidth < 768) {
    addSwiper();
}

window.addEventListener('resize', function () {
    if (document.documentElement.clientWidth < 768) {
        addSwiper();
    } else if (document.documentElement.clientWidth >= 768) {
        deleteSwiper();
    }
});

const swipe = document.querySelector('.swiper-brands__swiper');
const swiperName = document.querySelector('#swiper-brands');
const swiperValue = swiperName.querySelector('span');
const swiperArrow = swiperName.querySelector('img');
let flag = true;

const handleClick = () => {
    if (flag) {
        swipe.style.height = 'auto';
        swiperValue.textContent = 'Скрыть';
        swiperArrow.style.transform = 'rotate(180deg)';
        flag = false;
    } else {
        swipe.style.height = '160px';
        swiperValue.textContent = 'Показать все';
        swiperArrow.style.transform = 'rotate(0deg)';
        flag = true;
    }

}

swiperName.addEventListener('click', handleClick);

