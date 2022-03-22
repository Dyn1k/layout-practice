import Swiper from 'swiper/bundle';

class newSwiper {
    swiper = null;

    addSwiper = (swiperName, swiperPaginationName) => {
        if (!this.swiper) {
            this.swiper = new Swiper(swiperName, {
                slidesPerView: 'auto',
                spaceBetween: 16,
                pagination: {
                    el: swiperPaginationName,
                    clickable: true,
                },
            });
        }
    }

    deleteSwiper = () => {
        if (this.swiper) {
            this.swiper.destroy();
            this.swiper = null;
        }
    }
}

const brandsSwiper = new newSwiper();
const priceSwiper = new newSwiper();
const techniquesSwiper = new newSwiper();

if (document.documentElement.clientWidth < 768) {
    brandsSwiper.addSwiper('#swiperBrands', '#swiperPaginationBrands');
    priceSwiper.addSwiper('#swiperPrice', '#swiperPaginationPrice');
    techniquesSwiper.addSwiper('#swiperTechniques', '#swiperPaginationTechniques');
}

window.addEventListener('resize', function () {
    if (document.documentElement.clientWidth < 768) {
        brandsSwiper.addSwiper('#swiperBrands', '#swiperPaginationBrands');
        priceSwiper.addSwiper('#swiperPrice', '#swiperPaginationPrice');
        techniquesSwiper.addSwiper('#swiperTechniques', '#swiperPaginationTechniques');
    } else if (document.documentElement.clientWidth >= 768) {
        brandsSwiper.deleteSwiper();
        priceSwiper.deleteSwiper();
        techniquesSwiper.deleteSwiper();
    }
});

const swiperBrands = document.querySelector('#sliderBrands');
const expandBrands = document.querySelector('#swiper-brands');
const expandBrandsText = expandBrands.querySelector('span');
const expandBrandsArrow = expandBrands.querySelector('img');

const swiperTechniques = document.querySelector('#sliderTechniques');
const expandTechniques = document.querySelector('#swiper-techniques');
const expandTechniquesText = expandTechniques.querySelector('span');
const expandTechniquesArrow = expandTechniques.querySelector('img');

const handleClick = (swiperName, expandNameText, expandNameArrow) => {
    if (expandNameText.textContent === 'Показать все') {
        swiperName.style.height = 'auto';
        expandNameText.textContent = 'Скрыть';
        expandNameArrow.src = '/img/narrow.svg';
        expandNameArrow.style.margin = '0 8px';
    } else {
        swiperName.style.height = '160px';
        expandNameText.textContent = 'Показать все';
        expandNameArrow.src = '/img/expand.svg';
        expandNameArrow.style.margin = '0';
    }

}

expandBrands.addEventListener('click', function () {
    handleClick(swiperBrands, expandBrandsText, expandBrandsArrow);
});

expandTechniques.addEventListener('click', function () {
    handleClick(swiperTechniques, expandTechniquesText, expandTechniquesArrow);
});

