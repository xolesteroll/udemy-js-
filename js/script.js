"use strict";



// Условия if / else


// if (4 == 9) {
//     console.log('OK!');
// } else {
//     console.log('Error!');
// }



// // if (num < 49) {
// //     console.log('Error');
// // } else if (num > 100) {
// //     console.log('Много');
// // } else {
// //     console.log('Ok!');
// // }

// // (num == 50) ? console.log('Ok!') : console.log('Error');

// // Оператор switch как замена if / else работает только с точным сравнением по значению, тоесть не может
// // проверять условия больше или меньше, только на предмет равенства.

// switch (50) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('Верно');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// // Циклы

// // let num = '50';

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while(num < 55);

// // for (let i = 0; i <= 10; i++){
// //     console.log(num);
// //     num++;
// //     if (i === 6 || num === 56){
// //         // break;
// //         continue;
// //     }
// //     // console.log(num);
// //     // num++;
// //     console.log(i);
// // }

// // ФУНКЦИИ

// let num = 20;

// function showFirstMEssage(text) {
//     console.log(text);
//     // let num = 10;
//     console.log(num);
// }

// showFirstMEssage("ИДИ нАх УЙЙЙЙ");
// console.log(num);

// // function calc(a, b) {
// //     return (a + b);
// //     // console.log('dsad')      Недоступный код после return(unreachable)
// // }

// // console.log(calc(4, 3));
// // console.log(calc(5, 6));
// // console.log(calc(109, 212));
// // console.log(calc(45, 32131));

// function ret() {
//     let num = 50;
//     return num + 5;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log('Hello');
// };

// logger();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };

// console.log(calc(5, 10));

// МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ

const str = "teSt";
const arr = [1, 2, 4];

// console.log(str[2] = "d");
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q"));  // Поиск в строке

const logg = "Убись Конем Кончужка";  
// Вырезаем слова из строк по индексам, аргументы - начало отрезка и конец отрезка
// не включительно, данный метод поддерживает отрицательные индексы, в таком случае
// отсчет начинается с конца стрроки
console.log(logg.slice(0, 5) + " " + logg.slice(12) + " " + logg.slice(6, 11));
// ТОт же метод, только в профиль. НЕ поддерживает отрицательные индексы и
// допускает вариант когда первый аргумент больше чем второй
console.log(logg.substring(11, 6));
// Похожий метод, разница в том что первый аргумент указывает начало отрезка строки,
// А второй аргумент указывает количества символом после него которые надо вырезать
console.log(logg.substr(6, 5));


// Методы для чисел

// данный метод округляет число до ближайшего целого
const num = 12.2;
console.log(Math.round(num));
// данный метод трансформирует строку в число. в данном случае обрезает строку до числа до десятичной запятой.
const test = "12.3px";
console.log(parseInt(test));
//данный метод трансформирует строку в число не обрезая число до десятичной запятой.
console.log(parseFloat(test));



