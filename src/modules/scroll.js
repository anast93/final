'use strict';

// Плавный скролл от пунктов меню до секций на странице
const scroll = () => {
    const menu = document.querySelectorAll('.popup-menu, .top-menu');
    menu.forEach(elem => {
        elem.addEventListener('click', (event) => {
            const target = event.target;
                
            if(target.closest('ul>li>a')) {
              const ancor = target.closest('ul>li>a'),
                id = ancor.getAttribute('href');

                if(!document.querySelector('input[id="promo"]') && ancor.textContent === 'Клубы') return;
                else {
                  event.preventDefault();
                  document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'start'
                  });
                }
            } else return;
        });
    });
};

export default scroll;