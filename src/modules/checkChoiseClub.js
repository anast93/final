'use strict';

// Проверка выбора клуба
const checkChoiseClub = () => {
    const clubsFooter = document.querySelectorAll('.choose-club .club input'),
        club = [...clubsFooter].find(item => item.checked);
    
    if(club !== undefined) {
        if(document.querySelector('.choose-club .div-error')) {
            document.querySelector('.choose-club .div-error').remove();
        }

        return true;
    }

    else {
        if(!document.querySelector('#footer_form .error-club')) {
            const divError = document.createElement('div');
            divError.classList.add('error-club');
            divError.textContent = 'Необходимо выбрать клуб.';
            divError.style.color = 'red';
            divError.style['text-align'] = 'center';
            document.querySelector('#footer_form').append(divError);
        }
        return false;
    }
};

export default checkChoiseClub;