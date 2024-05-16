import Swiper, {
  Navigation, Autoplay
} from 'swiper';

const slider = new Swiper('.slider__swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  modules: [Navigation, Autoplay],
  draggable: true,
  grabCursor: true,
  speed: 700,
  // loop: true,
  // autoplay: {
  //   delay: 3000,
  // },

  navigation: {
    nextEl: '.slider__swiper .btn--next',
    prevEl: '.slider__swiper .btn--prev',
  },

  breakpoints: {

    375: {
      slidesPerView: 1,
    },

    475: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    575: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 3,
    },

    992: {
      slidesPerView: 3,
    },
  },

});