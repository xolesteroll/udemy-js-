"use strict";
// порядком устаревшие методы
const box = document.getElementById("box"),

// console.log(box);

    buttons = document.getElementsByTagName("button"),

// console.log(buttons[1]);

    circles = document.getElementsByClassName("circle"),

// console.log(circles);

// Методы поновее

    hearts = document.querySelectorAll(".heart"),

// hearts.forEach(item => {
//     console.log(item);
// });


    oneHeart = document.querySelector(".heart"); // возвращает первый попавшийся элемент под указанным селектором

// console.log(oneHeart);

console.dir(box);// Элемент на странице воспринимается как объект с помозью назначения переменной сожержащую сам этот элемент



// box.style.backgroundColor = "blue";  // Или так
// box.style.width = "500px";

box.style.cssText = "background-color: blue; width: 500px;";  // Или так
box.style.cssText = `background-color: blue; width: ${num}px;`;  // Или так

buttons[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

