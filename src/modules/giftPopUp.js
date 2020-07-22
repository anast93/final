'use strict';

import closeForm from './closeForm';

const giftPopUp = () => {
    const giftImg = document.querySelector('.fixed-gift img'),
        popup = document.getElementById('gift');
        
        giftImg.addEventListener('click', () => {
            popup.style.display = 'block';
            giftImg.remove();
        });
    
    closeForm(popup);
};

export default giftPopUp;