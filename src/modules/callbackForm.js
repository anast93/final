'use strict'

// Открытие модального окна при клике на кнопку "Перезвоните мне"
const callbackForm = () => {
    const callbackBtn = document.querySelector('.callback-btn'),
        popup = document.getElementById('callback_form');

    callbackBtn.addEventListener('click', () => {
        popup.style.display = 'inline-block';
    });

    popup.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains('close_icon')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.form-content');

            if (!target) {
            popup.style.display = 'none';
            }
        }
    });
};

export default callbackForm;