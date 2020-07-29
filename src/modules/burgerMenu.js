'use strict';

import togglePopUp from './togglePopUp';
import closePopUp from './closePopUp';

// Появление кнопки бургер-меню при разрешении экрана менее 768 px
const burgerMenu = () => {
    const menuBtn = document.querySelector('.menu-button'),
        topMenu = document.querySelector('.top-menu'),
        head = document.querySelector('.head');

    if(menuBtn) {
      document.addEventListener('scroll', () => {

        if(window.pageYOffset >= head.getBoundingClientRect().height) {
          topMenu.style.position = 'fixed';
          topMenu.style.top = '0';
          head.style['margin-bottom'] = '60px';
        } else {
          topMenu.style.position = '';
          head.style['margin-bottom'] = '0px';
        }
      });

      closePopUp();
      togglePopUp('.menu-button');
    }    
};

export default burgerMenu;