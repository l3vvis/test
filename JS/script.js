"use strict";

// a = 15;
// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);


// console.log(name);
// var name = 'l3vvis';

// {
//     var result = 50;
// }
// console.log(result);


///////////////////////////////////////////////////////////////////


// let number = 4.5;

// console.log(4/0);
// console.log('string' * 9);

// const person = 'l3vvis';

// const bool = true;

// console.log(something);

// let und;
// console.log(und);

// const obj = {
//     name: 'l3vvis',
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name)
// console.log(obj['name'])

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []]
// console.log(arr[3])


///////////////////////////////////////////////////////////////////


// const arr = ['a', 'b', 'c'];

// arr[10] = '3456';

// console.log(arr)

// const arr0bj = {
//     a: 'a',
//     1: 'b',
//     2: 'c',
//     abc: {
//         df: [{}, {}],
//         def: {

//         }
//     }
// };

// const b = 'b';

// arr0bj.b = '1234';
// arr0bj['b'] = '1234';

// console.log(arr0bj['b']);
// console.log(arr0bj.b);

// const obj = {a: 1, b: 2};
// const obj = {
//     Anna: 500,
//     Alice: 800,
// };


// 13/////////////////////////////////////////////////////////////


// alert('Hello');

// const result = confirm("Are you READY???");
// console.log(result);

// const answer = +prompt('You normal?', '18');
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('че как', '');
// answers[1] = prompt('че каво', '');
// answers[2] = prompt('че зачем', '');

// document.write(answers);
// console.log(typeof(answers));
// console.log(typeof(null));


// 14/////////////////////////////////////////////////////////////


// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'l3vvis';

// alert(`Hi, ${user}`);


// 15/////////////////////////////////////////////////////////////


// console.log('arr' + ' - object');
// console.log(4 + ' - object');
// console.log(4 + +'5'); //унарный +

// инкремент и дикремент

// let incr = 10,
// decr = 10;

// ++incr; //increment - PREfix
// decr--; //decrement - POSTfix

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2 + 4 * 2 != 8);

////// && 'И'
////// || 'ИЛИ'

// const isCheck = false,
// isClose = false;

// console.log(isCheck && isClose);
// console.log(isCheck || isClose);

// ! 'ОТРИЦАНИЕ'

// console.log(isCheck || !isClose);


// 19/////////////////////////////////////////////////////////////

//19.1

// const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

//19.2

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat: false
// };

//19.3

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// 20/////////////////////////////////////////////////////////////

// if (1) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }

// const num = 50;

// if(num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Too much')
// } else {
//     console.log('Done');
// }

// (num === 50) ? console.log('Ok') : console.log('Error'); //тернарный оператор

// 4 + 4 //бинарный
// + '4' //унарный

// const num = 50; // проверка на строгое соответствие

// switch (num) {
//     case 49:
//         console.log('Not');
//         break;
//     case 100:
//         console.log('Not');
//         break;
//     case 51:
//         console.log('Yeap');
//         break;
//     default:
//         console.log('Something');
//         break;
// }

// 21/////////////////////////////////////////////////////////////

// const hamb = 5;
// const fri = null;

// if (hamb && fri) {
//     console.log('Cool!');
// }

// console.log((hamb && fri)); //возвращает булевое значение

////////////

// const hamb = 3;
// const fri = 1;
// const cola = 1;

// console.log(hamb === 3 && cola && fri);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'qwerty');

// if (hamb === 3 && cola === 1 && fri === 1) {
//     console.log('AllCool!');
// } else {
//     console.log('Out');
// }

/////////////

// const hamb = 3;
// const fri = 0;
// const cola = 0;

// if (hamb || cola || fri) {
//     console.log('AllCool!');
// } else {
//     console.log('Out');
// }

// console.log(hamb || cola || fri);

////////////

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

////////////

// const hamb = 3;
// const fri = 3;
// const cola = 0;
// const nuggets = 2; 

// if (hamb === 3 && cola === 2 || fri === 3 && nuggets) {
//     console.log('AllCool!');
// } else {
//     console.log('Out');
// }

// console.log(hamb === 3 && cola === 2 || fri === 3 && nuggets);

////////////

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(!0);

//PRACTICE///////////////PRACTICE//

// console.log(NaN || 2 || undefined);

// console.log(NaN && 2 && undefined);

// console.log(1 && 2 && 3);

// console.log(!1 && 2 || !3);

// console.log(25 || null && !3);

// console.log(NaN || null || !3 || undefined || 5);

// console.log(NaN || null && !3 && undefined || 5);

// console.log(5 === 5 && 3 > 1 || 5);

// 22/////////////////////////////////////////////////////////////

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

//////////

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

/////////

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
// }

// 23/////////////////////////////////////////////////////////////

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

//////////////

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//         for (let j = 0; j < i; j++) {
//             result += '*';
//         }

//     result += '\n'
// }

// console.log(result);

/////////////

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// 24/////////////////////////////////////////////////////////////

// const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('well done');
//     } else {
//         console.log('Error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }


// console.log(personalMovieDB);

/// 25/////////////////////////////////////////////////////////////

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('hello wrld');
// console.log(num);

////////////

// function calc (a, b) {
//     return(a + b);
// }

// console.log(calc(4, 14));
// console.log(calc(10, 3));
// console.log(calc(100, 13));

////////////

// function ret() {
//     let num = 15;
//     return num;
// }

// const another = ret();

// console.log(another);

////////////

// const logger = function() {
// console.log('hello')
// };

// logger();

////////////

// const calc = (a, b) => {return a + b};
// const calc = (a, b) => a + b;

/// 26/////////////////////////////////////////////////////////////

// const usdCurr = 98;
// const eurCurr = 110;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

/// 27/////////////////////////////////////////////////////////////

// const usdCurr = 98;
// const discount = 0.9

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr) 
// promotion(res);

//////////

// function test() {
//     for(let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('done');
// }

// test();

////////////

// function doNothing() {};
// console.log(doNothing() === undefined);

/// 28/////////////////////////////////////////////////////////////

// const str = 'teSt';
// const arr = [1, 2, 6];

// console.log(str[2] = 'd');

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

////////////

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));
// console.log(fruit.indexOf('q'));

////////////

// const logg = 'Hello wrld';

// console.log(logg.slice(6, 11));

// const logg = 'Hello wrld';

// console.log(logg.substring(6, 11));

////////////

// const logg = 'Hello wrld';

// console.log(logg.substr(6, 5));

////////////

// const num = 14.2;

// console.log(Math.round(num));

////////////

// const test = '12.6px';

// console.log(parseInt(test));

////////////

// const test = '12.6px';
// console.log(parseFloat(test));

/// 29/////////////////////////////////////////////////////////////

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('well done');
//         } else {
//             console.log('Error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }

// }
// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);
// console.log(personalMovieDB);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres();


/// 30/////////////////////////////////////////////////////////////

// метод .trim() - проверка на пробелы в поле ввода

/// 31/////////////////////////////////////////////////////////////

// function first() {
//     // do some
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function  second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Im Done');
// }

// learnJS('JavaScript', done);

/// 32/////////////////////////////////////////////////////////////

// const obj = new Object();

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background: 'gray'
//     }
// };

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

///////////////

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background: 'gray'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, background} = options.colors;
// console.log(border, background);

// console.log(Object.keys(options).length);

/// 33/////////////////////////////////////////////////////////////

// const arr = [1, 22, 13, 6, 10];
// arr.sort(compareNum);  
// console.log(arr);

// function compareNum(a, b) { 
//     return a - b;
// }
// arr[99] = 0;

// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

/////////////////////////////////////////////////////

// arr.pop(); // - удаляет последний элемент в массиве
// arr.push(20); //- добавляет элемент в конец массива 

/////////////////////////////////////////////////////

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) { // - работает только с массиво-подобными сущностями
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

/// 34/////////////////////////////////////////////////////////////



/// 35/////////////////////////////////////////////////////////////

// let a = 5,
//     b = a;

// b = b + 4;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // передаёт ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);

////////////

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// ////////////////////

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 9
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 15;

// // console.log(newNumbers);
// // console.log(numbers);

// //////////////////

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 40;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'sasasasasasas';
// console.log(newArray);
// console.log(oldArray);

// //////////////////

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'JJ', 'blogger'],
//         internet = [...video, ...blogs, 'vk', 'telegramm'];

//         console.log(internet);

// ///////////////////

// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

///////////////////

// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

/// 36/////////////////////////////////////////////////////////////

// let str = 'awesome';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3,4,5]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('hello');
//     }
// };

// const john = Object.create(soldier);

// // const john = {
// //     health: 100,
// // };

// // john.__proto__ = soldier; // - устаревший формат

// Object.setPrototypeOf(john, soldier); // - новый формат
// // console.log(john.armor);
// john.sayHello();

/// 37/////////////////////////////////////////////////////////////

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько оцените его?', '');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('well done');
//             } else {
//                 console.log('Error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('Произошла ошибка');
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i <= 3; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             if (genre === '' || genre == null) {
//                 console.log('Вы ввели некорректные данные или пустое поле');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             }
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };

/// 38/////////////////////////////////////////////////////////////
/// 39/////////////////////////////////////////////////////////////


// Строка
// 1.

// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// // 2.

// console.log(typeof(5 + ''));

// const num = 5;

// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';

// Число

// 1.

// console.log(typeof(Number('5')));

// // 2.

// console.log(typeof(+'5'));

// // 3.

// console.log(typeof(parseInt('15px', 10)));

// let answ = +prompt('Hello', '');


// boolean

// 1.

// 0, '', null, undefined, NaN;

// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// // 2.

// console.log(typeof(Boolean('5')));

// // 3.

// console.log(typeof(!!'44444'));

/// 40/////////////////////////////////////////////////////////////

// let number = 5; debugger

// function logNumber() {
//     // let number = 4; debugger
//     console.log(number);
// }

// number = 6;

// logNumber(); debugger


// number = 10;

// logNumber(); debugger

///////////////

// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     }

//     return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

/// 41/////////////////////////////////////////////////////////////

// let x = 5;

// alert( ++x );

//////////////////

// [] + false - null + true
// console.log(typeof([] + false)); // 'false'
// console.log([] + false - null + true); // 'NaN'

//////////////////

// let y = 1;

// let x = y = 2;

// alert(x);

//////////////////

// [] + 1 + 2

// console.log([] + 1 + 2);

//////////////////

// alert('1'[0])

// console.log(alert);

//////////////////

// const x = 2 && 1 && null && 0 && undefined
// console.log(x)
// И запинается на лжи
// ИЛИ запинается на правде

//////////////////

// console.log(!!(1 && 2) === (1 && 2));

//////////////////

// alert(null || 2 && 3 || 4);

/// 47/////////////////////////////////////////////////////////////

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//         // result = x * result;
//     }
//     return result;
// }

// function pow(x, n) {

//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// pow(2, 1) // 2
// pow(2, 2) // 4
// pow(2, 3) // 8
// pow(2, 4) // 16

// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],
//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }],

//         semi: {
//             students: [{
//                 name: 'test',
//                 progress: 100
//             }]
//         }
//     }
// };

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;
//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// console.log(getTotalProgressByIteration(students));

//////////////////////////

// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];

//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }

//         return total;
//     }
// }

// const result = getTotalProgressByRecursion(students);

// console.log(result[0] / result[1]);


//////////////////////////////////////

// function factorial(n) {
//     // Проверяем, является ли n дробным числом или не числом
//     if (typeof n !== 'number' || n % 1 !== 0) {
//         return 'Введите целое число';
//     }
//     // Проверяем, является ли n отрицательным или равным нулю
//     if (n <= 0) {
//         return 1;
//     }
//     // Рекурсивно вызываем функцию, умножая n на factorial(n-1)
//     return n * factorial(n - 1);
// }

// // Тестируем наши примеры
// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(3)); // 6
// console.log(factorial(4)); // 24
// console.log(factorial(5)); // 120


/// 48/////////////////////////////////////////////////////////////



/// 49/////////////////////////////////////////////////////////////



/// 50/////////////////////////////////////////////////////////////

