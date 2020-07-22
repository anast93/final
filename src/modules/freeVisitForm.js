'use strict';

const freeVisitForm = () => {
    const freeVisit = document.querySelector('.free-visit p'),
        popUp = document.getElementById('free_visit_form'),
        closeBtn = document.querySelector('.close_icon');

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