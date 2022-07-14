let arr = [];
let NofM = 7;

for (let i = 0; i <= NofM; i++) {
let tempArray = [];
    for (let j = 0; j <= NofM; j++) {
        if(i * j === 0) {
            continue;
        }
        tempArray.push(i * j);
    }
    arr.push(tempArray);
}

console.table(arr);