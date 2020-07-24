'use strict';

// Появление стрелки в правом ниже углу 
const addArrow = () => {
    const arrowUp = document.getElementById('totop');
    arrowUp.style.display = 'none';
    const headerMain = document.querySelector('.header-main');
    const headSlider = document.querySelector('.head-slider');
    
    document.addEventListener('scroll', () => {

        if(window.pageYOffset > headerMain.getBoundingClientRect().height) {
            
            arrowUp.style.display = 'block';

        } else {
            arrowUp.style.display = 'none';
        }
    });
};

export default addArrow;