import './js/modal.js';

import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation,]);

const swiper = new Swiper('.swiper', {

    loop: true,
  
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

