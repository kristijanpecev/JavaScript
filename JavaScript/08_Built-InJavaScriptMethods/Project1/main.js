let myString = "MyWord";

function wordscramble(str = "") {
    let stringLength = str.length;
    let scrambledWord = " ";

    for (let i = 0; i < stringLength; i++) {
        let stringIndex = Math.floor(Math.random() * str.length)
        let stringCharacter = str[stringIndex];
        scrambledWord = scrambledWord.concat(stringCharacter);
        str = str.substring(0, stringIndex) + str.substring(stringIndex + 1, str.length);
    }
    return scrambledWord;
}

console.log(wordscramble(myString));