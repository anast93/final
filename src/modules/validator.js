'use strict';

import checkPhone from './checkPhone';
import checkConsent from './checkConsent';

// Валидатор
const validator = () => {
    document.addEventListener('input', (event) => {
        const target = event.target,
            inputName = target.closest('input[name="name"]:not([id="promo"]');
            
        if(inputName) {
            inputName.value = inputName.value.replace(/[^а-яё\s]/gi, '');
        }

    });

    document.addEventListener('input', (event) => {
        const target = event.target,
            inputPhone = target.closest('input[name="phone"]');

        if(inputPhone) {
            const form = target.closest('form');
            if(checkPhone(form) && form.querySelector('#error-phone')) {
                form.querySelector('#error-phone').remove();
            }
        }

    });

    document.addEventListener('change', (event) => {
        const target = event.target;
        if(target.closest('.personal-data input')) {
            const form = target.closest('form');
            if(checkConsent(form) && form.querySelector('#error-consent')) {
                form.querySelector('#error-consent').remove();
            }
        }
    });
    
};

export default validator;