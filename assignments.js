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

function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descFinland = describeCountry('Finland', 6, 'Helsinki');

function percentageOfWorld1(population) {
    return(population/7900) * 100;
}

const germanyPer = Math.floor(percentageOfWorld1(83));
const portugalPer = Math.floor(percentageOfWorld1(10));
const finlandPer = Math.floor(percentageOfWorld1(51));
console.log(germanyPer, portugalPer, finlandPer);

const percentageOfWorld3 = population => (population / 7900) * 100;

const describePopulation = function (country, population){
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
    console.log(description);   
}

describePopulation("Portugal", 10);
describePopulation("Germany", 83);
describePopulation("Finland", 6);