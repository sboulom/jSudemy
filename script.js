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

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3)

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1990))
