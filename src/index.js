'use strict';

import selectClub from './modules/selectClub';
import freeVisitForm from './modules/freeVisitForm';
import callbackForm from './modules/callbackForm';
import giftPopUp from './modules/giftPopUp';

selectClub();
freeVisitForm();
callbackForm();
if(document.querySelector('.fixed-gift img')) {
    giftPopUp();
}


