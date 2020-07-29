'use strict';

// Анимация цифр
const animateNumbers = (elemPrice, price) => {
    let count = +elemPrice.textContent,
        delta = price - count;

        // Ф-я для анимации цифр 
        const totalAnimation = () => {

            if(delta === 0 || count === price) {
                cancelAnimationFrame(requestId);
                return;
            }

            const deltaStr = Math.abs(delta) + '',
                length = deltaStr.length;
            
            // шаг, с которым происходит изменение числа
            let step = 10 **(length-2);

            // Если разница между рассчитаной стоимостью и значением в поле "Итого" стала меньше 
            //или равна шагу, то значению в поле присваивается рассчитанная стоимость.
            if(Math.abs(+elemPrice.textContent - price) <= step) {
                elemPrice.textContent = price;
                cancelAnimationFrame(requestId);
                return;
            }
            // Иначе, уменьшаем (увеличиваем) значение из поля "Итого" на величину шага

            if (delta < 0) {
                count -= step;
                elemPrice.textContent = count;
                requestAnimationFrame(totalAnimation);
            } else if (delta > 0) {
                count += step;
                elemPrice.textContent = count;
                requestAnimationFrame(totalAnimation);
            } 
        };

        let requestId = requestAnimationFrame(totalAnimation);
};

export default animateNumbers;
