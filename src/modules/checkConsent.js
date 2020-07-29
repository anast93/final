'use strict';

import checkChoiseClub from './checkChoiseClub';

// Проверка согласия на обработку ПДн
const checkConsent = (elem) => {
    const consent = elem.querySelector('.personal-data input');
    
    if(consent) {
        consent.noValidate = true;

        if(consent.checked) {
            return true;
        } else {
            if(!elem.querySelector('#error-consent')) {
                const div = document.createElement('div');
                div.textContent = 'Необходимо подтвердить согласие.';
                div.style.color = 'red';
                div.style['text-align'] = 'center';
                div.id = 'error-consent';
                elem.append(div);
            }
            return false;
        }
    } else return checkChoiseClub();
};

export default checkConsent;