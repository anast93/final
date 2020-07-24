'use strict'

const mainSlider = () => {
    
    if(document.querySelector('.slider-image')) {
        const blockSlider = document.querySelector('.main-slider'),
            slide = blockSlider.querySelectorAll('.slide');

        let count = 0;

        setInterval(() => {
        slide[count].style.display = 'none';
        count++;
        if(count >= slide.length) {
            count = 0;
        }

        slide[count].style.display = 'flex';
        //slide[count].style.margin = '0 auto';
    }, 1300);
    } else return;
 

};

export default mainSlider;