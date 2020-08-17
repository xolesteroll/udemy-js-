const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn__wrapper');

// console.log(btns[0].classList.length); // Количество классов у элемента

// console.log(btns[0].classList.item(0)); // Выводит класс по индексу из списка

// btns[0].classList.add('button__3'); // ДОбавляем класс элементу

// console.log(btns[0].classList.length);

// btns[0].classList.remove('button__1'); // ДОбавляем класс элементу
// btns[0].classList.toggle('button__1'); // ТОглим классы

// console.log(btns[0].classList.length);

// console.log(btns[0].classList);

// if (btns[0].classList.contains('button__1')) {
//     console.log('button__1');
// }

// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }

//     // ИЛИ

//     btns[1].classList.toggle('red');
// });


// Делегирование событий

wrapper.addEventListener('click', (event) => { //Устанавливаем обработчик событий на родителе элементов
    if (event.target && event.target.tagName == 'BUTTON') { //указываем, тегнейм элемента по условию
        console.log('HEllo');
    }
    // Таким образом мы делегируем событие клика на потомков родителя указывая на каких именно.
});

// wrapper.addEventListener('click', (event) => { //Устанавливаем обработчик событий на родителе элементов
//     if (event.target && event.target.matches('button.red')) { //метод matches
//         console.log('HEllo');
//     }
//     // Таким образом мы делегируем событие клика на потомков родителя указывая на каких именно.
// });

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('click'); //добавляем обработчик события циклом перебирая элементы
//     });
// });


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn); // Динамически создаем желемент(button) на странице для проверки работы делегирования событий.