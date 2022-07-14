/*let firstString = "Zdravo";
let secondString = "Svetu";

console.log(firstString + secondString + "!");
console.log(firstString.concat(secondString, "!"));

let result = "Hello Javascript";
let arr_result = result.split(" ");
console.log(arr_result);*/


let myString = "ThIs WiLl be capiTalized fOr EaCh wOrD";

function capitalizedWords(str) {
    let lowerCaseStr = str.toLowerCase();
    let capitalizedArray = [];
    let myStringArray = lowerCaseStr.split(" ");
    
    for (let i = 0; i < myStringArray.length; i++) {
        let firstLetter = myStringArray[i].slice(0, 1);
        firstLetter = firstLetter.toUpperCase();
        let restOfTheWords = myStringArray[i].slice(1);
        let wholeWord = firstLetter + restOfTheWords;
        capitalizedArray.push(wholeWord);        
        //capitalizedArray.push(firstLetter.concat(restOfTheWords));        
    }
    let newCapitalizedWords = capitalizedArray.join(" ");
    return newCapitalizedWords;
}

console.log(capitalizedWords(myString));
