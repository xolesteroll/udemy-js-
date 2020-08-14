// console.log(document.body); // доступ к body документа
// console.log(document.head); // доступ к head документа

// console.log(document.documentElement); // доступ ко всему документу через тег html

// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);//Первый дочерний элемент, не узел
// // console.log(document.body.lastChild);

// // console.log(document.querySelector("#current").parentNode.parentNode); // Получаеи
// // //родитесльский узел по id 
// console.log(document.querySelector("#current").parentElement);
// //Получаем родительский элемент, не узел

// // console.log(document.querySelector("[data-current='3']").nextSibling); // Получаем следующий узел 
// //верстки по дата аттрибуту
// console.log(document.querySelector("[data-current='3']").nextElementSibling); 
// //Следующий элемент не узел

// console.log(document.querySelector("[data-current='3']").previousSibling); 
//Получаем следующий ущел весртки по дата оттрибуту

for (let node of document.body.childNodes){
    if (node.nodeName == "#text"){
        continue;
    }
    console.log(node);
} //Цикл для перебора всех элементов в документе кроме текстовых узлов
