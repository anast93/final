'use strict';

import selectClub from './modules/selectClub';
import freeVisitForm from './modules/freeVisitForm';
import callbackForm from './modules/callbackForm';
import giftPopUp from './modules/giftPopUp';
import mainSlider from './modules/mainSlider';
import burgerMenu from './modules/burgerMenu';
import togglePopUp from './modules/togglePopUp';
import addArrow from './modules/addArrow';
import calc from './modules/calc';
import sliderGallery from './modules/sliderGallery';
import sendForm from './modules/sendForm';
import validator from './modules/validator';
import maskPhone from './modules/maskPhone';
import multiItemSlider from './modules/multiItemSlider';
import scroll from './modules/scroll';


selectClub();
freeVisitForm();
callbackForm();

if(document.querySelector('.fixed-gift img')) {
    giftPopUp();
}

mainSlider();
burgerMenu();
togglePopUp();
addArrow();
calc();
sendForm();
sliderGallery();
validator();
maskPhone('input[name="phone"]');

multiItemSlider('.services-slider', {
    isCycling: true
  });

scroll();





