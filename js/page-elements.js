"use strict";
// порядком устаревшие методы
const box = document.getElementById("box"),

// console.log(box);

    buttons = document.getElementsByTagName("button"),

// console.log(buttons[1]);

    circles = document.getElementsByClassName("circle"),

// console.log(buttons[1]);


// console.log(circles);

// Методы поновее

    hearts = document.querySelectorAll(".heart"),

// hearts.forEach(item => {
//     console.log(item);
// });

// hearts.forEach(item => {
//     console.log(item);
// });


        oneHeart = document.querySelector(".heart"), // возвращает первый попавшийся элемент под указанным селектором

// console.log(oneHeart);
        wrapper = document.querySelector(".wrapper");


console.dir(buttons[1]); // Выводи все методы для объекта в консоль

// box.style.backgroundColor = "blue"; // Стили в формате кэмел кейса
// box.style.width = "500px";

buttons[1].style.borderRadius = "100%";

circles[0].style.backgroundColor = "red";

box.style.cssText = "background-color: blue; width: 500px"; // Стили в стандартном css формате с помощью метода cssText
                                                    //Переменная для динамического добавления стилей
// box.style.cssText = `background-color: blue; width: ${i}px`;

// for (let i = 0; i < hearts.length; i++) { 
//     hearts[i].style.backgroundColor = "blue"; //Цикл для перебора элементов внутри псевдомассива
// }

hearts.forEach(item => {
    item.style.backgroundColor = "blue"; // Метод forEach для перебора элементов внутри псевдомассива
});

const div  = document.createElement("div"); // Генерируем HTML элемент который существует внутри скрипта
// const text = document.createTextNode("Тут был я"); // Создаем текстовый узел (текст без тега)

div.classList.add('black'); // Добавляем класс для созданного элемента

// document.body.append(div); // Добавляем созаднный элемент в конец body (div с классом black)

// document.querySelector(".wrapper").append(div); // ДОбавляем элемент в конец другого элемента или блока по селектору 
// Не объявляя переменную для этого

wrapper.append(div); // ДОбавляем элемент вконец другого элемента или блока по селектору 
// объявив заранее переменную wrapper с методом queryselector
// wrapper.appendChild(div); // Устаревшая версия метода append

// wrapper.prepend(div); // добавляем в начало

// hearts[0].before(div); // Элемент добавляестся ПЕРЕД указанным элементом
// wrapper.insertBefore(div, hearts[0]); // первый аргумент - вставляемый жлемент, второй аргумент- элемент перед которым он будет вставлен
// hearts[0].after(div); // Элемент добавляестся ПОСЛЕ указанного элемента

// circles[0].remove(); // Удаляем указанный элемент
// wrapper.removeChild(hearts[1]); // устаревший вариант удаления элемента

// hearts[0].replaceWith(circles[0]); // Перемещаем элемент из одного массива в другой заменяя при этом элемент
// wrapper.replaceChild(circles[0], hearts[0]); // Устаревший вариант замены одного элемента на другой. Первый аргумент
// это элемент который мы будем перемещать и вставлять вместо другого, а второй - это элемент который мы будем заменять

// const oneHeart = document.querySelector(".heart"); // возвращает первый попавшийся элемент под указанным селектором

// console.log(oneHeart);

console.dir(box);// Элемент на странице воспринимается как объект с помозью назначения переменной сожержащую сам этот элемент



// box.style.backgroundColor = "blue";  // Или так
// box.style.width = "500px";

box.style.cssText = "background-color: blue; width: 500px;";  // Или так
box.style.cssText = `background-color: blue; width: ${num}px;`;  // Или так

buttons[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";
div.innerHTML = "<h1>Hello World</h1>"; // ДОбавляем контент (HTML) в созданный элемент

// div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>"); // Вставляем html код перед началом элемента "div"
// div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>"); // Вставляем html код после начала элемента "div"
// div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>"); // Вставляем html код перед концом элемента "div"
// div.insertAdjacentHTML("afterend", "<h2>Hello</h2>"); // Вставляем html код после конца элемента "div"

// div.style.cursor = "pointer";
// div.textContent = "HEllo"; // для добавления текста, нельзя вставлять HTML разметку. Испольхуется для безопасности.


