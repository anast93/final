'use strict';

// Слайдер-карусель вторая попытка...

const multiItemSlider = (() => {
    return (selector, config) => {
      let 
        mainElement = document.querySelector(selector), // основный элемент блока
        sliderWrapper = mainElement.querySelector('.services-slider-wrap'), // обертка для .slider-item
        sliderItems = mainElement.querySelectorAll('.slide'), // элементы (.slider-item)
        sliderControls = mainElement.querySelectorAll('.slider-arrow'), // элементы управления
        // sliderControlLeft = mainElement.querySelector('.prev'), // кнопка "LEFT"
        // sliderControlRight = mainElement.querySelector('.next'), // кнопка "RIGHT"
        wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width), // ширина обёртки
        itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width), // ширина одного элемента    
        positionLeftItem = 0, // позиция левого активного элемента
        transform = 0, // значение транфсофрмации .slider_wrapper
        step = itemWidth / wrapperWidth * 100, // величина шага (для трансформации)
        items = [], // массив элементов
        interval = 0,
        _config = {
          isCycling: false, // автоматическая смена слайдов
          direction: 'right', // направление смены слайдов
          interval: 1000, // интервал между автоматической сменой слайдов
          pause: true // устанавливать ли паузу при поднесении курсора к слайдеру
        };

      for (let key in config) {
        if (key in _config) {
          _config[key] = config[key];
        }
      }

      // наполнение массива items
      sliderItems.forEach((item, index) => {
        items.push({ item: item, position: index, transform: 0 });
      });

      const position = {
        getItemMin: () => {
          let indexItem = 0;
          items.forEach((item, index) => {
            if (item.position < items[indexItem].position) {
              indexItem = index;
            }
          });
          return indexItem;
        },
        getItemMax: () => {
          let indexItem = 0;
          items.forEach((item, index) => {
            if (item.position > items[indexItem].position) {
              indexItem = index;
            }
          });
          return indexItem;
        },
        getMin: () => {
          return items[position.getItemMin()].position;
        },
        getMax: () => {
          return items[position.getItemMax()].position;
        }
      };

      const transformItem = (direction) => {
        let nextItem;
        if (direction === 'right') {
          positionLeftItem++;
          if ((positionLeftItem + wrapperWidth / itemWidth - 1) > position.getMax()) {
            nextItem = position.getItemMin();
            items[nextItem].position = position.getMax() + 1;
            items[nextItem].transform += items.length * 100;
            items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
          }
          transform -= step;
        }
        if (direction === 'left') {
          positionLeftItem--;
          if (positionLeftItem < position.getMin()) {
            nextItem = position.getItemMax();
            items[nextItem].position = position.getMin() - 1;
            items[nextItem].transform -= items.length * 100;
            items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
          }
          transform += step;
        }
        sliderWrapper.style.transform = 'translateX(' + transform + '%)';
      };

      const cycle = (direction) => {
        if (!_config.isCycling) {
          return;
        }
        interval = setInterval(() => {
          transformItem(direction);
        }, _config.interval);
      };

      // обработчик события click для кнопок "назад" и "вперед"
      const controlClick = (e) => {
        if (e.target.closest('#right, #left')) {
          e.preventDefault();
          const direction = e.target.closest('#right') ? 'right' : 'left';
          transformItem(direction);
          clearInterval(interval);
          //cycle(_config.direction);
        }
      };

      const setUpListeners = () => {
        // добавление к кнопкам "назад" и "вперед" обработчика controlClick для событя click
        sliderControls.forEach((item) => {
          item.addEventListener('click', controlClick);
        });

        if (_config.pause && _config.isCycling) {
          sliderControls.forEach((item) => {
            item.addEventListener('mouseover', (e) => {
              if(e.target.closest('#left, #right')) {
                clearInterval(interval);
              }
            } );
          });

          sliderControls.forEach((item) => {
            item.addEventListener('mouseout', (e) => {
              if(e.target.closest('#left, #right')) {
                clearInterval(interval);
                cycle(_config.direction);
              }
            });
          });
        }
      };

      // инициализация
      setUpListeners();
      cycle(_config.direction);

      return {
        right: () => { // метод right
          transformItem('right');
        },
        left: () => { // метод left
          transformItem('left');
        },
        stop: () => { // метод stop
          _config.isCycling = false;
          clearInterval(interval);
        },
        cycle: () => { // метод cycle 
          _config.isCycling = true;
          clearInterval(interval);
          cycle();
        }
      };

    };
  })();

  export default multiItemSlider;