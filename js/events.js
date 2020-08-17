"use strict";
// let i = 0;
// const btn = document.querySelectorAll("button"),
//       overlay = document.querySelector(".overlay"),
//       deleteElement = (e) => { 
//         console.log(e.currentTarget);
//         console.log(e.type);
//         // i++;
//         // if (i == 5) {
//         //     btn[1].removeEventListener("click", deleteElement);
//         // }
//         // alert("fuckyougirl");
//     };

// // btn.onclick = function() {
// //     alert("click");
// // }; // Почти не используется такая записб нельзя будет удалить в последующей работе данынй обработчик собития

// // btn.onclick = function() {
// //     alert("second click");
// // };

// btn[0].addEventListener("click", (e) => {
//     console.log(e);
//     alert("fuckyouman"); // Можно назначать несколько действий на одно событие, которые будут выполняться по очереди
// });

// // btn[1].addEventListener("mouseenter", (e) => { 
// //     console.log(e.target);
// //     // alert("fuckyougirl");
// //     e.target.remove();
// // });

// // btn[1].addEventListener("click", deleteElement);
// // overlay.addEventListener("click", deleteElement);


// const link = document.querySelector("a");

// link.addEventListener("click", function(event) {
//     event.preventDefault();  // Отменяем стандартное поведения браузера, в данном случае- стандартный переъход по ссылке

//     console.log(event.target);
// });

// btn.forEach(item => {
//     item.addEventListener('click', deleteElement, {once: true}); // Цикл на перебор всех жэелементов псевдомассива
// }); //

// События на мобильных браузерах

//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.circle');

    box.addEventListener('touchstart', (e) => {
        console.log('Start');
        console.log(e.targetTouches);
    });

    // box.addEventListener('touchmove', (e) => {
    //     console.log('MOve');
    // });

    // box.addEventListener('touchend', (e) => {
    //     console.log('End');
    // });
});

// touches - получаем массив с отображением всех touches тобишь всех пальцев
// targetTouches
//changedTouches 

