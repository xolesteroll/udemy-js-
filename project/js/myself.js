'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
},
      adv = document.querySelectorAll(".promo__adv img"),
      poster = document.querySelector(".promo__bg"),
      genre = poster.querySelector(".promo__genre"),
      movieList = document.querySelector(".promo__interactive-list");


adv.forEach(item => {
    item.remove();
});

genre.textContent = "драма";

poster.style.background = "url(img/bg.jpg)";

movieDB.movies.sort();

movieList.innerHTML = "";

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

