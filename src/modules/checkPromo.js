'use strict';

// Проверка промокода
const checkPromo = (str) => {
    const regExp = /^тело2020$/ig;
    const ratio = regExp.test(str) ? 0.7 : 1;
    return ratio;
};

export default checkPromo;