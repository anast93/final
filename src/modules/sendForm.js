'use strict';

import checkConsent from './checkConsent';
import autoCloseThanks from './autoCloseThanks';
import checkPhone from './checkPhone';

//Отправка форм
const sendForm = () => {
    const preload = '<img src="./images/eclipse.svg">';
    

    document.addEventListener('submit', (event) => {
        const target = event.target;
        
        if(target.closest('form')) {
            event.preventDefault();

            const form = target.closest('form');
            if(!checkConsent(form) || !checkPhone(form)) return;
            // if(!checkPhone(form)) {
            //     return;
            // }

            const divLoad = form.parentNode.querySelector('.form-content_load'),
                thanks = document.getElementById('thanks');

            divLoad.style.display = 'flex';
            divLoad.innerHTML = preload;

            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            form.reset();

            if(form.querySelector('.error-club')) {
                form.querySelector('.error-club').remove();
            }

            postData(body)
            .then((response) => {
                if(response.status !== 200) {
                    throw new Error('status network not 200');
                }

                autoCloseThanks(form, thanks, divLoad);
                    
            })
            .catch((error) => {
                thanks.querySelector('.form-wrapper').querySelector('.form-content').innerHTML = `<h4>Что-то пошло не так...</h4>
                <p>Повторите попытку позже.</p>
                <button class="btn close-btn">OK</button>`;
                
                autoCloseThanks(form, thanks, divLoad);
            });
        }

    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(body)
        });
    };
};


export default sendForm;

