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

