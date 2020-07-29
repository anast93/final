'use strict';

// Появление стрелки в правом ниже углу 
const addArrow = () => {
    const arrowUp = document.getElementById('totop');
    arrowUp.style.display = 'none';
    const headerMain = document.querySelector('.header-main');
    
    document.addEventListener('scroll', () => {

        if(window.pageYOffset > headerMain.getBoundingClientRect().height) {
            
          arrowUp.style.display = 'block';

        } else {
          arrowUp.style.display = 'none';
        }
    });

    arrowUp.addEventListener('click', () => {
        event.preventDefault();

        const id = arrowUp.getAttribute('href');

        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start'
        });
    });
};

export default addArrow;