'use strict';

function calcAge(birthYear){
    const age = 2037 - birthYear;
    function printAge(){
        const outPut = `You are ${age}, born in ${birthYear}`;
        console.log(outPut);
        if(birthYear >= 1981 && birthYear <= 1996){
            const str = `You are a millenial ${firstName}`
            console.log(str);
        }
    }
    printAge();
    return age;
}

const firstName = 'Steven';
calcAge(1991);
