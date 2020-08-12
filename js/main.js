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
// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function(){
//         console.log("Hello");
//     }
// };

// const jonh = Object.create(soldier); //Прототипное наследование во время создания объекта

// // const jonh = {
// //     health: 100
// // };

// // // jonh.__proto__ = soldier; //Устаревший метод

// // Object.setPrototypeOf(jonh, soldier); // БОлее новый способ

// console.log(jonh.armor);
// jonh.sayHello(); //ФУнкци тоже наследуются по прототипному наследованию

// let x = 5; alert(x++); //Алерт будет выведен в значении 5 , потому что инкремент постфиксный в данном случае

// [] + false - null + true

// console.log([] + false); //false 
// console.log(typeof([] + false)); // тип данных string

// console.log([] + false - null); // NaN
// console.log(typeof([] + false - null)); // тип данных number

// console.log([] + false - null + true); // NaN
// console.log(typeof([] + false - null + true)); // тип данных number

// let y = 1; 
// let x = y = 2; //Сначала перебивается значение y с 1 на 2, а потом присвается такое же значение x
// alert(x);

// console.log([] + 1 + 2); // 12, потмоу что сложение пустогно массива с любым типом данных на выводе получается строка


// alert( "1"[0] ); // 1 потмоу что обращзение к строке по индексу ывводит сивмолы в соответсвии с их положением в строке

// console.log(2 && 1 && null && 0 && undefined); // null , потому что оператор И(&&) всегда останавливает на лжи (false)

// console.log(!!(1 && 2) === (1 && 2)); // false, потмоу что двойное отрицание дает нам на выходе Boolean значение

// alert( null || 2 && 3 || 4); // Оператор И(&&) имеет приоритет преред оператором ИЛИ(||) 
//Следовательно выполняется сначала он, результатом его работы будет последнее значение являющееся TRUe
// А это соответсвенно 3, потом работает оператор ИЛИ слева направо, так как оператор ИЛИ
// ЗАпинается на правде то результатом будет число 3 получение в результате работы И 
// И в конце выполнится последнее ИЛИ которое запинается на правдеЖ, соответсвенно на 
// 3. Результатом этого логического выражения будет - 3

let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a == b); // Массивы не равны друг другу, я учил это в питоне, это разные переменные в разных блоках памяти


// alert(+"Infinity");

// console.log("Ёжик" > "яблоко"); //false, сравнение строк использует посимвольное сравнение, можно посмотреть в юникод таблице

console.log(0 || "" || 2 || undefined || true || false);//2 - ИЛИ запинается на правде, поэтому результат 2