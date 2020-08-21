'use strict';

const person = {
    name: 'Alex',
    tel: '+728728232',
    parents: {
        mom: 'Olga',
        dad: 'OLEG'
    }
};

// console.log(JSON.stringify(person)); // Метод stringify преобразует нашу стандартную запись ключ:значение в запись подходящую для отправки на сервер {"name":"Alex","tel":"+728728232"}

// console.log(JSON.parse(JSON.stringify(person))); // Метод parse проделывает обратную операцию, и преобразует данные полученные с сервера в формате записи JSON в нашу обычную запись { name: 'Alex', tel: '+728728232' }

// console.log(JSON.parse(JSON.stringify(person)).name);

const clone = JSON.parse(JSON.stringify(person)); // Глубокое клонирование объектов

clone.parents.mom = 'SHmara'; // Меняем свойство клона объекта, при этом благодаря глубокому клонированию значение клонируемого объекта не менятеся

console.log(person);
console.log(clone);
