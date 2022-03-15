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

const cards = document.querySelector('.swiper-wrapper');
const card = cards.querySelectorAll('.swiper-slide');
const swiperName = document.querySelector('#swiper-brands');
const swiperValue = swiperName.querySelector('span');
const swiperArrow = swiperName.querySelector('img');
let cardsRange;

const addHiddenClass = () => {
    if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1016) {
        cardsRange = 6;
    } else if (document.documentElement.clientWidth >= 1016) {
        cardsRange = 8;
    }

    for (let i = card.length - 1; i >= cardsRange; i--) {
        card[i].classList.toggle('swiper-wrapper--hidden');
    }
    if (swiperValue.textContent === 'Показать все') {
        swiperValue.textContent = 'Скрыть';
        swiperArrow.style.transform = 'rotate(180deg)';
    } else {
        swiperValue.textContent = 'Показать все';
        swiperArrow.style.transform = 'rotate(0deg)';
    }
}

if (document.documentElement.clientWidth >= 768) {
    addHiddenClass();
    swiperValue.textContent = 'Показать все';
    swiperArrow.style.transform = 'rotate(0deg)';
}

