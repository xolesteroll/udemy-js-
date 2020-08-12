//Первая задача, по подставлению значений в объект  часть 1 

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// Использование циклов и условий часть 2.

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++) { 
//     const a = prompt('Один из последних просмотренных фильмов', ''),
//           b = prompt('На сколько оцените его?', '');

//     if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('Error');
//         i--;
//     }
    
// }


// if (personalMovieDB.count < 10){
//     console.log('ВЫсмотрели слишком мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     console.log('Вы ахуенный кинокритик, почти бэдкомедианТ');
// } else if (personalMovieDB.count >= 30){
//     console.log('Удачи вам по жизни, фарту масти');
// } else {
//     console.log('Произошла ошибка');
// }

// console.log(personalMovieDB);


//использование функций часть 3.

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) { 
            const a = prompt('Один из последних просмотренных фильмов', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('Error');
                i--;
            }
            
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10){
            console.log('ВЫсмотрели слишком мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы ахуенный кинокритик, почти бэдкомедианТ');
        } else if (personalMovieDB.count >= 30){
            console.log('Удачи вам по жизни, фарту масти');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB:  function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++){
            // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            // personalMovieDB.genres[i - 1] = genre;
            //Укороченный вариант
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            // if (genre === '' || genre == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // } 
            let genre = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genre.split(', ');
                personalMovieDB.genres.sort();
            } 
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`ЛЮбимый жанр ${i + 1} - это ${item}`);
        });
    }
};


// Мой вариант
// function showMyDB() {
//     (personalMovieDB.privat == false) ? console.log(personalMovieDB) : console.log("No access");
// }
// showMyDB();

//Вариант учителя

