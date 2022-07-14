let ArrayofArrays = [];

let cells = 64;

let counter = 0;

let row;

for (let i = 0; i < cells + 1; i++) {
    if (counter % 8 === 0) {
        if (row !== undefined) {
            ArrayofArrays.push(row);
        }
        row = [];
    }
    row.push(++counter);
}

console.table(ArrayofArrays);
