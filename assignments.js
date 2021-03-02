// const country = "United States";
// const continent = "North America";
// const population = 80;

// console.log(country);
// console.log(continent);
// console.log(population);
// const isIsland = false;
// // isIsland = true;
// let language = "English";

// // console.log(typeof isIsland);
// // console.log(typeof population);
// // console.log(typeof country);
// // console.log(typeof language);

// // console.log(population/2);
// // population++;

// // temperate literal 

// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// console.log(description);


// // if else 
// if(population > 33){
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s populstion is below average`);
// }

// // type conversion and coercion 

// console.log('9' - '5');
// console.log('19' - '13'+ '17');
// console.log('19' - '13'+ 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// // let numNeighbors = prompt (
// //     "How many neigbor countries does your country have?"
// // )

// // if (numNeighbors === 1 ){
// //     console.log("only one border");
// // } else if (numNeighbors > 1){
// //     console.log("more than 1 border");
// // } else {
// //     console.log("its an islan bruh")
// // }

// if (language === "English" && population < 50 && !isIsland ){
//     console.log(`you should live in ${country}`)
// } else {
//     console.log("find another country")
// }


// // switch 

// // switch (language) {
// //     case mandarin:
// //         console.log("Most number of native speakers!");
// //         break;
// //     case spanish:
// //         console.log("2nd place in number of native speakers");
// //         break;
// //     case english: 
// //         console.log("3rd place");
// //         break;
// //     case hindi:
// //         console.log("number 4");
// //         break;
// //     case arabic:
// //         console.log("5th most spoken language");
// //         break
// //     default:
// //         console.log("time to learn a language");
// // }

// // ternary operator 
// // if(`${population}` > 33){ 
// //     console.log(`${country}'s populaton is above average`);
// // } else {
// //     console.log(`${country}'s populaton is below average`);
// // }

// function describeCountry(country, population, capitalCity){
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
// const descGermany = describeCountry('Germany', 83, 'Berlin');
// const descFinland = describeCountry('Finland', 6, 'Helsinki');

// function percentageOfWorld1(population) {
//     return(population/7900) * 100;
// }

// // const germanyPer = Math.floor(percentageOfWorld1(83));
// // const portugalPer = Math.floor(percentageOfWorld1(10));
// // const finlandPer = Math.floor(percentageOfWorld1(51));
// // console.log(germanyPer, portugalPer, finlandPer);

// // const percentageOfWorld3 = population => (population / 7900) * 100;

// // const describePopulation = function (country, population){
// //     const percentage = percentageOfWorld1(population);
// //     const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
// //     console.log(description);   
// // }

// // describePopulation("Portugal", 10);
// // describePopulation("Germany", 83);
// // describePopulation("Finland", 6);

// // intro to array 

// const populations = [10, 83, 70, 440];
// console.log(populations.length === 4);
// const percentage2 =[];
// for (let i = 0; i < populations.length; i++) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentage2.push(perc);
// }
// console.log(percentage2);

// const percentages = [
//     Math.floor(percentageOfWorld1(populations[0])),
//     Math.floor(percentageOfWorld1(populations[1])),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3]),
// ]
// console.log(percentages)

// const neighbors = ['Canada', 'United States', 'Mexico'];

// neighbors.push('Utopia');
// console.log(neighbors);
// neighbors.pop('Utopia')
// console.log(neighbors);

// if(!neighbors.includes('Canada')){
//     console.log('Come visit the United States')
// } else {
//     console.log('You live on an island')
// };

// neighbors[neighbors.indexOf('United States')] = "All Mighty US of A";

// console.log(neighbors)

// // intro to Object

// const myCountry = {
//     country: 'United States',
//     capital: 'Washington DC',
//     language: 'English',
//     population: 6,
//     neighbors: ['Canada', 'United States', 'Mexico'],

//     describe: function(){
//         console.log(
//             `${this.country} has ${this.population} million ${this.language}-speaking people,${this.neighbors.length} neighbouring countries and a capitol called ${this.capital}`
//         );
//     },
//     checkIsland: function(){
//         this.isIsland = this.neighbors.length === 0 ? true: false
//     }
// };

// myCountry.describe()
// myCountry.checkIsland()
// console.log(myCountry)

// // dot v bracket notation 
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbors.length} neighboring countries and a capital city called ${myCountry.capital}`);

// myCountry.population += 2;
// console.log(myCountry.population)

// myCountry['population'] -= 2;
// console.log(myCountry.population)

// // iteration for loop

// for (let voter = 1; voter <=50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`)
// };

// // looping backwards 

// const listOfNeighbors = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweeden", "Russia"]];

// for (let i = 0; i < listOfNeighbors.length; i++) {
//    for (let y = 0; y < listOfNeighbors[i].length; y++) {
//         console.log(`Neighbor: ${listOfNeighbors[i] [y]}`);
    
//    }
// }

// // while loop 

// const percentage3 = [];
// let i = 0;
// while(i<populations.length){
//     const perc = percentageOfWorld1(populations[i]);
//     percentage3.push(perc);
//     i++;
// }
// console.log(percentage3)

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log("Good to go")
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`You have to wait ${yearsLeft} more years`)
// };

// const birthYear = 2012;

// let century;
// if(birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);


// coding challenge #1 & #2


// const massMark = 78;
// const hMark = 1.69;
// const massJohn = 92;
// const hJohn = 1.95;
// const massMark = 95;
// const hMark = 1.88;
// const massJohn = 85;
// const hJohn = 1.76;

// const BMIMark = massMark / hMark **2 
// const BMIJohn = massJohn / hJohn **2
// // const markHeigherBMI = BMIMark > BMIJohn;

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark})is higher than John's`)
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's`)
// }

//turthy and falsy
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('steven'));
// console.log(Boolean({}));

// const money = 0;

// if(money){
//     console.log("don't spend it all");
// } else {
//     console.log("you should get a job");
// }

// const hasDriverLicense = true;
// const hasGoodVision = false; 

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;

// if(shouldDrive){
//     console.log(`Sara should drive`);
// }else {
//     console.log(`someone else should drive`);
// }

//challenge #3
// const scoreDolphins = Math.floor((96 + 108 + 89) / 3);
// const scoreKoala = Math.floor((88 + 91 + 110) / 3);
// console.log(scoreDolphins, scoreKoala);

// if(scoreDolphins > scoreKoala){
//     console.log(`Dolphins average more PPG and WIN`);
// } else if (scoreDolphins < scoreKoala){
//     console.log(`Koalas average more PPG and WIN`);
// } else if (scoreDolphins === scoreKoala){
//     console.log(`Tie`);
// }
// bonus 1
// const scoreDolphins = Math.floor((97 + 112 + 101)/3);
// const scoreKoala = Math.floor((109 + 95 + 106)/3);
// console.log(scoreDolphins, scoreKoala);

// if(scoreDolphins > scoreKoala && scoreDolphins >= 100){
//     console.log(`Dolphins average more PPG and WIN`);
// } else if (scoreDolphins < scoreKoala && scoreKoala >= 100){
//     console.log(`Koalas average more PPG and WIN`);
// } else if (scoreDolphins === scoreKoala && scoreDolphins >= 100 && scoreKoala >= 100){
//     console.log(`Tie`);
// } else {
//     console.log(`BOTH LOSE need to score 100 points`);
// }
// const day = 'monday';

// switch (day) {
//     case 'monday':
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case 'tuesday':
//         console.log(`Theory videos`);
//         break;

// }
// ternary operator 
const age = 23;
// age >= 18 ? console.log(`i like to drink wine`) : console.log(`i like to drink water`)
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`I like to drink ${drink}`)