"use strict";
// порядком устаревшие методы
const box = document.getElementById("box");

console.log(box);

const buttons = document.getElementsByTagName("button");

console.log(buttons[1]);

const circles = document.getElementsByClassName("circle");

console.log(circles);

// Методы поновее

const hearts = document.querySelectorAll(".heart");

hearts.forEach(item => {
    console.log(item);
});


const oneHeart = document.querySelector(".heart"); // возвращает первый попавшийся элемент под указанным селектором

console.log(oneHeart);


