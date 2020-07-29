'use strict';

import checkPromo from './checkPromo';
import animateNumbers from './animateNumbers';

// Калькулятор
const calc = () => {
    if(document.getElementById('price-total')) {
        const cardOrder = document.getElementById('card_order'),
            price = document.getElementById('price-total'),
            time = document.querySelectorAll('.time input'),
            mozaika = document.getElementById('card_leto_mozaika'),
            promo = document.querySelector('.price-message input');

        let mapMozaika = new Map();
        mapMozaika
        .set(1, 1999)
        .set(6, 9900)
        .set(9, 13900)
        .set(12, 19900);

        let mapSchelkovo = new Map();
        mapSchelkovo
        .set(1, 2999)
        .set(6, 14990)
        .set(9, 21990)
        .set(12, 24990);

        const checkClub = () => {
            let map;
            if(mozaika.checked) {
                map = mapMozaika;
            } else {
                map = mapSchelkovo;
            }
            return map;
        };

        // Какой клуб чекнут? => какой период чекнут? => берем из коллекции значение цены по ключу, равному периоду
        const priceValue = () => {
            const club = checkClub();

            const arr = [...time].filter(elem => {
                if(elem.checked) {
                    return elem;
                }
            });
        
            const result = Math.ceil(club.get(+arr[0].value) * checkPromo(promo.value));
            
            animateNumbers(price, result);

        };

        cardOrder.addEventListener('click', (event) => {
            const target = event.target;
            if(target.matches('.club input') || target.matches('.time input')) {
                priceValue();
            }
        });

        promo.addEventListener('change', () => {
            priceValue();
        });

    }
};

export default calc;