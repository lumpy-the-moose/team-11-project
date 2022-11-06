import './js/modal.js';
import './js/mobile-menu.js';
import './js/subscribe.js';
import './js/modal-input';
import './js/btn-up';

// swiperJS

import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const swiper = new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },

  touchRatio: 1.5,
  touchAngle: 45,
  grabCursor: true,
  speed: 900,

  //  autoplay: {
  //   delay: 1000,
  //   stopOnLastSlide: true,
  //   disableOnInteraction: false

  //  },
});
