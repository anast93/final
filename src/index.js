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

