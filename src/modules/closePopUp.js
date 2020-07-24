'use strict';

// Закрытие popup-menu при клике по любому пункту или по крестику
const closePopUp = () => {
    const popupMenu = document.querySelector('.popup-menu');
    if(popupMenu) {
        popupMenu.addEventListener('click', (e) => {
            const target = e.target;
            if(target.closest('a') || target.closest('img')) {
                popupMenu.style.display = 'none';
            }
        });
    }
};

export default closePopUp;