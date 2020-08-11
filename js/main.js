"use strict";

// console.log('arr' + ' - object');

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);


// console.log(5%2);

// console.log(2 + 2 * 2 != 8);

// const isCheked = false,
//       isClosed = false;

// console.log(isCheked || !isClosed);

// const str = prompt("", "");
// const products = str.split(", "); // Получение массива из отдельных элементов через запятую
// products.sort(); //Сортировка элементов внутри массива, 
// console.log(products.join("! ")); // Предоставление массива ввиде строки с разделителем "!" в данном случае

// let str = "some",
//     strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);


//ПРототипное наследование
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log("Hello");
    }
};

const jonh = Object.create(soldier); //Прототипное наследование во время создания объекта

// const jonh = {
//     health: 100
// };

// // jonh.__proto__ = soldier; //Устаревший метод

// Object.setPrototypeOf(jonh, soldier); // БОлее новый способ

console.log(jonh.armor);
jonh.sayHello(); //ФУнкци тоже наследуются по прототипному наследованию