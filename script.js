(function() {
    'use strict';
}());



// let number = 5;
// const leftBorderWith = '1';

// number = 10;
// console.log(number);

// const car = {
//     type: 'cupe',
//     color: 'black',
//     isNew: true
// };
// console.log(car.color);

// const arr = ['cupe', 'black', true, 4];
// console.log(arr[2]);


// alert('Беда беда Мама лошара');

// const conf = confirm('ты мужчина?');

// const qw = prompt('Сколько вам лет?', '');
// console.log(conf + ' ' + qw);


// const name = prompt('Ваше имя?', '');

// console.log(`Hello, ${name}`);



// const isCecked = true,
//     isClosed = false;

// console.log(!isClosed);

// console.log(5 == 6 - 1);
// console.log(2 + 3 * 2 === '8');

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);