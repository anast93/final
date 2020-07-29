'use strict';

// Закрытие модального окна
const closeForm = (popUp) => {
    popUp.addEventListener('click', (e) => {
        let target = e.target;
        const form = popUp.querySelector('form');

        const cleanForm = () => {
            popUp.style.display = 'none';

            const inputs = form.querySelectorAll('input');
            if([...inputs].some(elem => elem.value !== '')) {
                form.reset();
            }

            if(form.querySelector('#error-consent')) {
                form.querySelector('#error-consent').remove();
            }

            if(form.querySelector('#error-phone')) {
                form.querySelector('#error-phone').remove();
            }

        };
        

        if (target.classList.contains('close_icon') || target.closest('.close-btn')) {
            cleanForm();
        } else {
            target = target.closest('.form-content');

            if (!target) {
                cleanForm();
            }
        }
    });
};

export default closeForm;