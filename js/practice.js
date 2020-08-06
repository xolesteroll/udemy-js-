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

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
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
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log('ВЫсмотрели слишком мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы ахуенный кинокритик, почти бэдкомедианТ');
    } else if (personalMovieDB.count >= 30){
        console.log('Удачи вам по жизни, фарту масти');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();
// Мой вариант
// function showMyDB() {
//     (personalMovieDB.privat == false) ? console.log(personalMovieDB) : console.log("No access");
// }
// showMyDB();

//Вариант учителя



function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        // personalMovieDB.genres[i - 1] = genre;
        //Укороченный вариант
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);



