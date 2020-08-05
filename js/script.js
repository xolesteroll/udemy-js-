"use strict";



// Условия if / else


if (4 == 9) {
    console.log('OK!');
} else {
    console.log('Error!');
}



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num == 50) ? console.log('Ok!') : console.log('Error');

// Оператор switch как замена if / else работает только с точным сравнением по значению, тоесть не может
// проверять условия больше или меньше, только на предмет равенства.



switch (50) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('Не в этот раз');
        break;
}

// Циклы

let num = '50';

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num < 55);

for (let i = 1; i <= 10; i++){
    if (i === 6){
        // break;
        continue;
    }
    // console.log(num);
    // num++;
    console.log(i);
}