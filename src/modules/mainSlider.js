'use strict';

const mainSlider = () => {
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
};

export default mainSlider;