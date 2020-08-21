const log = function (a, b, ...rest) { // Rest Operator в случае когда мы не знаем сколько и каких аргументов у нас будет
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) {
    // basis = basis || 2; Старый вариант - не совсем стабильный
    console.log(number * basis);
}

calcOrDouble(3, 6);