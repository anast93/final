'use strict';

// Слайдер-карусель

class SliderCarousel {
    constructor({
      main, 
      wrap, 
      next, 
      prev, 
      position = 0, 
      slidesToShow = 4, 
      infinity = false,
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).querySelectorAll('.slide');
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
          position,
          infinity,
          widthSlide: Math.floor(100 / this.slidesToShow)
        };
    }

    init(){
        this.addNewClass();
        this.addStyle();

        if(this.prev && this.next) {
          this.controlSlider();
        } else {
          this.addArrow();
          this.controlSlider();
        }
    }

    addNewClass() {
        this.main.classList.add('new-slider');
        this.wrap.classList.add('new-slider__wrap');
        [...this.slides].forEach(item => {
            item.classList.add('new-slider__item');
        });
        console.log(this.slides);
    }

    addStyle() {
        const style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        style.textContent = `
            .new-slider{
              overflow: hidden !important;
            }
            .new-slider__wrap{
              display: flex !important;
              transition: transform 0.5s !important;
              will-change: transform !important;
            }
            .new-slider__item{
              flex: 0 0 ${this.wrap.offsetWidth / this.slidesToShow}px !important;
              width: ${this.wrap.offsetWidth / this.slidesToShow}px !important;
              /* flex: 0 0 ${this.options.widthSlide}% !important;*/
              /*margin: 0 auto !important;*/
            }
        `;

        document.head.append(style);
    }

    controlSlider() {
      this.prev.addEventListener('click', this.prevSlider.bind(this));
      this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider() {
      const arr = []
      if(this.options.infinity || this.options.position > 0) {
        --this.options.position;
      console.log(this.options.position);
      // if(this.options.position < 0) {

      // }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
      
    }

    nextSlider() {
      if(this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
        ++this.options.position;
      console.log(this.options.position);
      if(this.options.position > this.slides.length - this.slidesToShow) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
      
    }



    addArrow() {

    }
}

export default SliderCarousel;