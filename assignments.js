const country = "United States";
const continent = "North America";
const population = 80;

console.log(country);
console.log(continent);
console.log(population);
const isIsland = false;
// isIsland = true;
let language = "English";

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// console.log(population/2);
// population++;

// temperate literal 

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);


// if else 
if(population > 33){
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s populstion is below average`);
}

// type conversion and coercion 

console.log('9' - '5');
console.log('19' - '13'+ '17');
console.log('19' - '13'+ 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// let numNeighbors = prompt (
//     "How many neigbor countries does your country have?"
// )

// if (numNeighbors === 1 ){
//     console.log("only one border");
// } else if (numNeighbors > 1){
//     console.log("more than 1 border");
// } else {
//     console.log("its an islan bruh")
// }

if (language === "English" && population < 50 && !isIsland ){
    console.log(`you should live in ${country}`)
} else {
    console.log("find another country")
}


// switch 

// switch (language) {
//     case mandarin:
//         console.log("Most number of native speakers!");
//         break;
//     case spanish:
//         console.log("2nd place in number of native speakers");
//         break;
//     case english: 
//         console.log("3rd place");
//         break;
//     case hindi:
//         console.log("number 4");
//         break;
//     case arabic:
//         console.log("5th most spoken language");
//         break
//     default:
//         console.log("time to learn a language");
// }

// ternary operator 
// if(`${population}` > 33){ 
//     console.log(`${country}'s populaton is above average`);
// } else {
//     console.log(`${country}'s populaton is below average`);
// }
