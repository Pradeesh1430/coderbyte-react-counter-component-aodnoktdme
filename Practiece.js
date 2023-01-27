//  Remove Duplicates from an Array
// var array = [0,1,2,3,4,3,2];

// let uniqueArray = [];


// array.forEach(ele => {
//     if(!uniqueArray.includes(ele)){
//         uniqueArray.push(ele)   
//      }
// })

// console.log(uniqueArray)

//  USING SET KEYWORD
// let getU = () => {
//     return [...new Set(array)]
// }
// console.log(getU())

//  USING FILTER METHOD
// var arr = [1,2,6,7,4,5,3,2,1]

// let getU2 = () => {
//     return arr.filter((item, index) => {
//         return arr.indexOf(item) == index
//     })
// }
// console.log(getU2())

// --------------------------------------------------------------------------------------------------------------------------------------

//  FINDING MAXIMUM AND MINIMUM NUMBERS IN AN ARRAY
// var array = [12,43,56,98,14,54,36]

// var max = array[0];

// for ( let i = 0; i < array.length; i++) {
//     if (array[i] >= max) {
//         max = array[i]
//     }
// }

// var min = array[0];

// for ( var i=0; i < array.length; i++) {
//     if (array[i] <= min) {
//         min = array[i]
//     }
// }
// console.log(max, min)

// --------------------------------------------------------------------------------------------------------------------------------------

// REVWERSE A STRING
var name1 = "Hi My Name Is Pradeesh Amasa";

// let splitStr = name1.split('');

// let revSplit = splitStr.reverse();

// let reverseStr = revSplit.join('')

// let result = name1.split('').reverse().join('')
// let result = [...name1].reverse().join('')
// console.log(result)


// USING FOR-LOOP
// function getRev(str) {
//     let revStr = "";

//     for ( let i = str.length - 1; i >=0; i--) {
//         revStr += str[i]
//     }
//     return revStr
// }
// console.log(getRev('DEMO'))

// //  USING ARROW FUNCTION
// const getRevrs = (str) => {
//     let revStr = "";

//     for ( let i = str.length-1; i >= 0; i--){
//         revStr += str[i]
//     }
//     return revStr
// }

// console.log(getRevrs('DEMO'))


// --------------------------------------------------------------------------------------------------------------------------------------


//  REDUCE 
// var arr = [4, 54,67,89,2,1,34];

// let sum = arr.reduce(function(acc, curr) {
//     return acc + curr
// }, 0)

// console.log(sum)



// --------------------------------------------------------------------------------------------------------------------------------------


//  EMPTY AN ARRAY IN JAVASCRIPT

// var arrayList = [ 'a','b','c','d']
// arrayList =  [];    //==> Method-1
// arrayList.length =  0; //==> Method-2
// arrayList.splice(0, arrayList.length);  // Method -3
// while( arrayList.length) {
//     arrayList.pop()              // Method - 4
// }
// console.log(arrayList);


// --------------------------------------------------------------------------------------------------------------------------------------

//  PROGRAM TO CHECK STRING IS PALINDROME OR NOT?
// var string = "aabbaa";

// let loewer = string.toLocaleLowerCase();

// let result = [...string].reverse().join('');

// if (result == loewer) {
//     console.log('String is Palindeome')
// }else{
//     console.log('String is Not a Palindromee')
// }



// --------------------------------------------------------------------------------------------------------------------------------------


// How to Write function which invokes like multiply(2)(3)  --> Function Currying.

// function multiply (num1) {
//     return function (num2) {
//         console.log(num1 * num2)
//     }
// }
// multiply(2)(3);



// --------------------------------------------------------------------------------------------------------------------------------------


// Count of all the duplicates in an Array

// var array = ['one', 'two', 1,1,2,2,3,'one'];

// const count = {}

// array.forEach(element => {
//     count[element] = (count[element] || 0) + 1
// });
// console.log(count)


