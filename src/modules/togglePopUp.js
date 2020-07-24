'use strict';

// Popup-menu
const togglePopUp = (selector) => {
    const popupMenu = document.querySelector('.popup-menu');
    const btn = document.querySelector(selector);
    //console.log(btn);
    if(btn) {
        btn.addEventListener('click', () => {
            popupMenu.style.display = "flex";
        });
    }
};

export default togglePopUp;