'use strict';

// Проверка номера телефона
const checkPhone = (elemForm) => {
    const inputPhone = elemForm.querySelector('input[name="phone"]');
    const regExp = /^\+\d \(\d{3}\) \d{3}-\d{1,2}-?\d{0,2}$/;
    const div = document.createElement('div');
    div.textContent = 'Убедитесь, что номер телефона введен верно.';
    div.id = 'error-phone';
    div.style.color = 'red';
    div.style['text-align'] = 'center';
    if(regExp.test(inputPhone.value)) {
        return true;
    } else {
        if(!elemForm.querySelector('#error-phone')) {
            elemForm.append(div);
        }
        return false;
    }
};

export default checkPhone;