!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e){e.addEventListener("click",(function(t){var n=t.target;n.classList.contains("close_icon")||n.closest(".close-btn")?e.style.display="none":(n=n.closest(".form-content"))||(e.style.display="none")}))},o=function(){var e=document.querySelector(".free-visit p"),t=document.getElementById("free_visit_form"),n=t.querySelector("form");e.addEventListener("click",(function(e){t.style.display="inline-block",n.style.display="inline-block"})),r(t)},i=function(){var e=document.querySelector(".callback-btn"),t=document.getElementById("callback_form"),n=t.querySelector("form");e.addEventListener("click",(function(){t.style.display="inline-block",n.style.display="inline-block"})),r(t)},l=function(){var e=document.querySelector(".fixed-gift img"),t=document.getElementById("gift");e.addEventListener("click",(function(){t.style.display="block",e.remove()})),r(t)},c=function(){var e=document.querySelector(".main-slider").querySelectorAll(".slide"),t=0;setInterval((function(){e[t].style.display="none",++t>=e.length&&(t=0),e[t].style.display="flex"}),1300)},a=function(e){var t=document.querySelector(".popup-menu"),n=document.querySelector(e);n&&n.addEventListener("click",(function(){t.style.display="flex"}))},u=function(){var e=document.querySelector(".popup-menu");e&&e.addEventListener("click",(function(t){var n=t.target;(n.closest("a")||n.closest("img"))&&(e.style.display="none")}))},s=function(){var e=document.querySelector(".menu-button"),t=document.querySelector(".top-menu"),n=document.querySelector(".head");e&&(document.addEventListener("scroll",(function(){window.pageYOffset>=n.getBoundingClientRect().height?(t.style.position="fixed",t.style.top="0",n.style["margin-bottom"]="60px"):(t.style.position="",n.style["margin-bottom"]="0px")})),u(),a(".menu-button"))},d=function(){var e=document.getElementById("totop");e.style.display="none";var t=document.querySelector(".header-main");document.querySelector(".head-slider");document.addEventListener("scroll",(function(){window.pageYOffset>t.getBoundingClientRect().height?e.style.display="block":e.style.display="none"}))},f=function(e,t,n){/^тело2020$/gi.test(e)?t.textContent=Math.ceil(7*+n/10):t.textContent=n};function y(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=function(){if(document.getElementById("price-total")){var e=document.getElementById("card_order"),t=document.getElementById("price-total"),n=document.querySelectorAll(".time input"),r=document.getElementById("card_leto_mozaika"),o=document.querySelector(".price-message input"),i=new Map;i.set(1,1999).set(6,9900).set(9,13900).set(12,19900);var l=new Map;l.set(1,2999).set(6,14990).set(9,21990).set(12,24990);var c=function(){var e=r.checked?i:l,t=y(n).filter((function(e){if(e.checked)return e}));return e.get(+t[0].value)};e.addEventListener("click",(function(e){var n=e.target;(n.matches(".club input")||n.matches(".time input"))&&(o.value?f(o.value,t,c()):t.textContent=c())})),o.addEventListener("change",(function(){o.value?f(o.value,t,c()):t.textContent=c()}))}},v=function(){var e,t=document.querySelector(".gallery-slider"),n=t.querySelectorAll(".slide"),r=t.querySelectorAll(".slider-dots ul>li"),o=0;r[0].classList.add("slick-active");var i=function(e,t,n){e[t].classList.remove(n)},l=function(e,t,n){e[t].classList.add(n)},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(a,t)},a=function(){var e=t.querySelector(".slide img");t.style.height="".concat(e.offsetHeight,"px"),i(r,o,"slick-active"),i(n,o,"slide-active"),++o>=n.length&&(o=0),l(r,o,"slick-active"),l(n,o,"slide-active")};t.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.closest("#next, #prev, .slider-dots")&&(i(r,o,"slick-active"),i(n,o,"slide-active"),t.closest("#next")?o++:t.closest("#prev")?o--:t.closest(".slider-dots ul>li")&&(t=t.closest(".slider-dots ul>li"),r.forEach((function(e,n){e===t&&(o=n)}))),o>=n.length&&(o=0),o<0&&(o=n.length-1),l(r,o,"slick-active"),l(n,o,"slide-active"))})),t.addEventListener("mouseover",(function(t){(t.target.closest(".slider-arrow")||t.target.closest(".slider-dots"))&&clearInterval(e)})),t.addEventListener("mouseout",(function(e){(e.target.closest(".slider-arrow")||e.target.closest(".slider-dots"))&&c()})),c(2e3)};function g(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=function(){if(void 0!==g(document.querySelectorAll(".choose-club .club input")).find((function(e){return e.checked})))return document.querySelector(".choose-club .div-error")&&document.querySelector(".choose-club .div-error").remove(),!0;if(!document.querySelector(".choose-club .div-error")){var e=document.createElement("div");e.classList.add("div-error"),e.textContent="Необходимо выбрать клуб.",e.style.color="red",document.querySelector(".choose-club").append(e)}return!1},S=function(e){var t=e.querySelector(".personal-data input");if(t){if(t.noValidate=!0,t.checked)return e.querySelector(".personal-data .errorContens")&&e.querySelector(".personal-data .errorContens").remove(),!0;if(!e.querySelector(".personal-data").querySelector(".errorContens")){var n=document.createElement("div");n.textContent="Необходимо подтвердить согласие.",n.style.color="red",n.classList.add("errorContens"),e.querySelector(".personal-data").append(n)}return!1}return b()},E=function(){document.addEventListener("submit",(function(t){var n=t.target;if(n.closest("form")){t.preventDefault();var o=n.closest("form");if(!S(o))return;var i=o.parentNode.querySelector(".form-content_load"),l=document.getElementById("thanks");i.style.display="flex",i.innerHTML='<img src="./images/eclipse.svg">';var c=new FormData(o),a={};c.forEach((function(e,t){a[t]=e})),o.reset(),e(a).then((function(e){if(200!==e.status)throw new Error("status network not 200");i.style.display="none",o.closest(".popup")&&(o.style.display="none",o.closest(".popup").style.display="none"),l.style.display="block",r(l)})).catch((function(e){i.style.display="none",o.closest(".popup")&&(o.style.display="none",o.closest(".popup").style.display="none"),l.querySelector(".form-wrapper").querySelector(".form-content").innerHTML='<h4>Что-то пошло не так...</h4>\n                <p>Повторите попытку позже.</p>\n                <button class="btn close-btn">OK</button>',l.style.display="block",r(l)}))}}));var e=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"aplication/json"},body:JSON.stringify(e)})}},q=function(){document.addEventListener("input",(function(e){var t=e.target.closest('input[name="name"]:not([id="promo"]');t&&(t.value=t.value.replace(/[^а-яё\s]/gi,""))}))};function k(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(e);function r(e){var n=e.keyCode,r=t,o=r.replace(/\D/g,""),i=this.value.replace(/\D/g,""),l=0,c=r.replace(/[_\d]/g,(function(e){return l<i.length?i.charAt(l++)||o.charAt(l):e}));-1!=(l=c.indexOf("_"))&&(c=c.slice(0,l));var a=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=c),"blur"==e.type&&this.value.length<5&&(this.value="")}var o,i=k(n);try{for(i.s();!(o=i.n()).done;){var l=o.value;l.addEventListener("input",r),l.addEventListener("focus",r),l.addEventListener("blur",r)}}catch(e){i.e(e)}finally{i.f()}},A=function(e,t){var n=document.querySelector(e),r=n.querySelector(".services-slider-wrap"),o=n.querySelectorAll(".slide"),i=n.querySelectorAll(".slider-arrow"),l=parseFloat(getComputedStyle(r).width),c=parseFloat(getComputedStyle(o[0]).width),a=0,u=0,s=c/l*100,d=[],f=0,y={isCycling:!1,direction:"right",interval:1e3,pause:!0};for(var p in t)p in y&&(y[p]=t[p]);o.forEach((function(e,t){d.push({item:e,position:t,transform:0})}));var m={getItemMin:function(){var e=0;return d.forEach((function(t,n){t.position<d[e].position&&(e=n)})),e},getItemMax:function(){var e=0;return d.forEach((function(t,n){t.position>d[e].position&&(e=n)})),e},getMin:function(){return d[m.getItemMin()].position},getMax:function(){return d[m.getItemMax()].position}},v=function(e){var t;"right"===e&&(++a+l/c-1>m.getMax()&&(t=m.getItemMin(),d[t].position=m.getMax()+1,d[t].transform+=100*d.length,d[t].item.style.transform="translateX("+d[t].transform+"%)"),u-=s),"left"===e&&(--a<m.getMin()&&(t=m.getItemMax(),d[t].position=m.getMin()-1,d[t].transform-=100*d.length,d[t].item.style.transform="translateX("+d[t].transform+"%)"),u+=s),r.style.transform="translateX("+u+"%)"},g=function(e){y.isCycling&&(f=setInterval((function(){v(e)}),y.interval))},h=function(e){if(e.target.closest("#right, #left")){e.preventDefault();var t=e.target.closest("#right")?"right":"left";v(t),clearInterval(f),g(y.direction)}};return i.forEach((function(e){e.addEventListener("click",h)})),y.pause&&y.isCycling&&(i.forEach((function(e){e.addEventListener("mouseover",(function(e){e.target.closest("#left, #right")&&clearInterval(f)}))})),i.forEach((function(e){e.addEventListener("mouseout",(function(e){e.target.closest("#left, #right")&&(clearInterval(f),g(y.direction))}))}))),g(y.direction),{right:function(){v("right")},left:function(){v("left")},stop:function(){y.isCycling=!1,clearInterval(f)},cycle:function(){y.isCycling=!0,clearInterval(f),g()}}};(function(){var e=document.querySelector(".clubs-list").querySelectorAll("ul");document.addEventListener("click",(function(t){t.target.closest(".club-select")&&e.forEach((function(e){"none"!==e.style.display&&e.style.display?e.style.display="none":e.style.display="inline-block"}))}))})(),o(),i(),document.querySelector(".fixed-gift img")&&l(),c(),s(),a(),d(),m(),E(),v(),q(),x('input[name="phone"]'),A(".services-slider",{isCycling:!0})}]);