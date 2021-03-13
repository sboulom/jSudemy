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

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }
// const yearsUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0 ) {
//         return retirement;
//     } else {
//         return -1;
//     }
//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));

// const calcAverage = (a, b, c ) => (a + b + c) / 3;
// //testone
// let scoreDolphins = calcAverage (44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(avgDolphins, avgKoalas)

// const checkWinner = function(avgDolphins, avgKoalas){
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
//     } else {
//         console.log(`Must win by double the points to Win`)
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas)
// //test 2

// scoreDolphins=calcAverage(85, 54, 41);
// scoreKoalas=calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// const friends =['Steven', 'Michael', 'Jonas'];
// console.log(friends)
// const y = new Array(1991, 2001, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length -1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = 'Steven';
// const steven = [firstName, 'Boulom', 2021-1988, 'Server', friends];
// console.log(steven);

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];
// console.log(years)
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3); 

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// const friends =['Steven', 'Michael', 'Jonas'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('Jon');
// console.log(friends);

// friends.pop();
// console.log(friends);
// console.log(friends.indexOf('Steven'));

// //returns if element is in the array with strict equality;
// console.log(friends.includes('Steven'))

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const calcTip = function(bill){
//     return bill <= 300 && bill >= 50 ? bill * .15 : bill * .2 
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = 
// console.log(bills, tips);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037-1991,
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,

//     calcAge: function (){
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// }
// console.log(jonas.getSummary());

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = Math.floor(this.mass / this.height ** 2);
        return this.bmi;
    }
};

const john ={
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = Math.floor(this.mass / this.height ** 2);
        return this.bmi;
    }
};
john.calcBMI();
mark.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI is ${mark.bmi} is higher then ${john.fullName}'s BMI ${john.bmi}`)
} else {
    console.log(`its the other way around. `)
}
