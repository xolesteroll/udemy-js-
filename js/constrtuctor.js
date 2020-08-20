'use strict';

// ФУНКЦИИ КОНСТРУКТОРЫ

// Данный тип записи немного устарел в связи с тем что в стандарте ES6 были добмалены так называемые классы которые в разы 
// удобнее использовать для таких целей

function User(name, id) { // По сути тут создается функция которыя будет прототипом для элементов ниже
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`)
};

const ivan = new User('Ivan', 28); // Создаем нвоый объект прототипом для которого будет функция User
const alex = new User('Alex', 82); // Создаем нвоый объект прототипом для которого будет функция User

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan, alex);