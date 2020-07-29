'use strict';

import closeForm from './closeForm';

// Плавное исчезновение модального окна с сообщением об отправке формы
const autoCloseThanks = (elemForm, elemPopup, elemLoad) => {
    elemLoad.style.display = 'none';
    if(elemForm.closest('.popup')) {
      elemForm.style.display = 'none';
      elemForm.closest('.popup').style.display = 'none';
    }

    elemPopup.style.opacity = "1";
    elemPopup.style.display = 'block';
    closeForm(elemPopup);
                    
    let step = 100;
    const idTimeout = setTimeout(() => {
      const idInterval = setInterval(() => {
      elemPopup.style.opacity = step/100;
      step--;
        if(step < 0) {
          elemPopup.style.display = 'none';
          clearInterval(idInterval);
        }
      }, 20);
    }, 2000);
                    
    if(elemPopup.style.display === 'none') {
      clearTimeout(idTimeout);
    }
};

export default autoCloseThanks;