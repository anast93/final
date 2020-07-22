'use strict';

// открытие модального окна при клике на надпись "Записаться на бесплатынй прием"
const freeVisitForm = () => {
    const freeVisit = document.querySelector('.free-visit p'),
        popUp = document.getElementById('free_visit_form');

    freeVisit.addEventListener('click', (e) => {
        popUp.style.display = 'inline-block';
    });

    popUp.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains('close_icon')) {
            popUp.style.display = 'none';
        } else {
            target = target.closest('.form-content');

            if (!target) {
            popUp.style.display = 'none';
            }
        }
    });

};

export default freeVisitForm;