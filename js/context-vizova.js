'use strict';

// Контекст вызова 


// 1)
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);


// 2)
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         console.log(this);
//     }
// };
// obj.sum();


// 3)
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);


// 4)
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));


// 5)
// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     console.log(this);
// });


// 6)

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this); // стрелочная функция не имеет соего контекста вызова и находясь внутри метода ссылает на него, ну а метод всегнда сылается на объект поэтому
            // мы можем сказхать что стрелочная функция ссылается на объект
        };

        say();
    }
};

obj.sayNumber();

const double = a => a * 2; // стрелочая функция если помещается в одну строку вместе со своим действием то может быть записана в таком формате, без круглых и без фигурных скобок




// 1) Обычная функция: this = window, но если стоит 'use strict' - то мы получим undefined
// 2) Если мы используем метод внутри объекта контекст вызова будет ссылаться на сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind
// 5) Если callback функция записывается как обычная функция (не линейная) то контекстом вызова является сам элемент на котором произошло событие

