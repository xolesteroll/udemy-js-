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

//CAllBAck ФУНКЦИИ

function first() {
    //Do something
    setTimeout(function() {
        console.log(1); \\\\\\\\\\\\\\\\\\\\\\\
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);

// Объекты, деструктуризация объектов

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// console.log(options.name);   //Использование конкретного свойства (ключ: значение) в объекте

// delete options.name;   // Удаление свойства из объекта

// console.log(options);

// for (let key in options) {   // ЦИкл FOR IN 
//     console.log(`Свойства ${key} имеет значение ${options[key]}`);
// }

// let counter = 0; // Счетчик


// for (let key in options) {   // ЦИкл FOR IN c перебором ключей внутри ключа (color) который в свою очередь является объектом
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
//             // counter++; //Счетчик + 1 считает в банном случае количество свойств в объекте
//         }
//     } else {
//         console.log(`Свойства ${key} имеет значение ${options[key]}`);
//         // counter++; //Счетчик + 1
//     }
//     counter++; // Отдельный счетчик для первичных свойтв не учитывая свойства обектов в обхъекте
    
// }

// // for (let key in options) { //Отдельный счетчик для первичных свойтв не учитывая свойства обектов в обхъекте
// //     counter++;
// // }
// console.log(counter);


//МЕДОТЫ ОБЪЕКТОВ (мтеод получения ключей объекта)
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    maketest: function() { //Метод, котоырй мы создаем (Самодельный)
        console.log("Test");
    }
};

options.maketest(); //Вызов самодельного метода


//ДЕструктуризация объекта

const{border, bg} = options.colors; //вытаскиваем ключи из объекта в объекта в отдельные переменные
console.log(border);

//Получение массива со всеми ключами
// console.log(Object.keys(options));

//Получение длины массива

console.log(Object.keys(options).length - 1 + Object.keys(options.colors).length);