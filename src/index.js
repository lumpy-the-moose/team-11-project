import './js/modal.js';
import './js/mobile-menu.js';
import './js/subscribe.js';

import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const swiper = new Swiper('.swiper', {
  loop: true,

  loop: true,

  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },
});
