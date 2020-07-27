'use strict';

// Слайдер-фотогалерея
const sliderGallery = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
        slide = gallerySlider.querySelectorAll('.slide'),
        dot = gallerySlider.querySelectorAll('.slider-dots ul>li');

    let currentSlide = 0,
        interval;
    dot[0].classList.add('slick-active');

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);

    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);

    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    const autoPlaySlide = () => {
        const imgNode = gallerySlider.querySelector('.slide img');
        gallerySlider.style.height = `${imgNode.offsetHeight}px`;
    

        prevSlide(dot, currentSlide, 'slick-active');
        prevSlide(slide, currentSlide, 'slide-active');
        
        currentSlide++;
        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }

        nextSlide(dot, currentSlide, 'slick-active');
        nextSlide(slide, currentSlide, 'slide-active');
 
    };


    gallerySlider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if(!target.closest('#next, #prev, .slider-dots' )) {
            return;
        }

        prevSlide(dot, currentSlide, 'slick-active');
        prevSlide(slide, currentSlide, 'slide-active');

        if (target.closest('#next') ) {
            currentSlide++;
        } else if (target.closest('#prev')) {
            currentSlide--;
        } else if(target.closest('.slider-dots ul>li')) {
            target = target.closest('.slider-dots ul>li');
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }

        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }

        if(currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(dot, currentSlide, 'slick-active');
        nextSlide(slide, currentSlide, 'slide-active');
    });

    gallerySlider.addEventListener('mouseover', (event) => {
        if (event.target.closest('.slider-arrow') || event.target.closest('.slider-dots')) {
            stopSlide();
        }
    });
    
    gallerySlider.addEventListener('mouseout', (event) => {
        if (event.target.closest('.slider-arrow') || event.target.closest('.slider-dots')) {
            startSlide();
        }
    });

    startSlide(2000);

};

export default sliderGallery;