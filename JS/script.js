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

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

//19.2

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

//19.3

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// 20/////////////////////////////////////////////////////////////

