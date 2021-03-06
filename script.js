// strict mode forbids us to do certain things and js would allow us to fail silently 
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log(`I can drive`);

// function logger() {
//  console.log(`my name is steve`)
// };

// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)
//function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1988);

// //function expression
// const calcAge2 = function (birthYear) {
//     return 2037- birthYear;
// }
// const age2 = calcAge2(1991)
// console.log(age1, age2)
//arrow function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1990, 'Steven'))

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
//     return juice;

// }
// console.log(fruitProcessor(2, 3));

const calcAge = function(birthYear){
    return 2037 - birthYear;
}
const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

yearsUntilRetirement(1991, 'Jonas');