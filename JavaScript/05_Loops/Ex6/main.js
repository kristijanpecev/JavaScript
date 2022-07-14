let object = {
    id: 2,
    type: "Ice Cream",
    description: "Milk Product"
}

let arr = [];

for (const prop in object) {
    console.log("Name of prop: " + prop + " Value of prop: " + object[prop]);
    arr.push(object[prop]);
}


//console.log(Object.values(object));
//console.log(Object.keys(object));
//console.log(arr);

/*for (const keys of Object.keys(object)) {
    console.log(`${keys}: ${object[keys]}`);
}*/

for (let i = 0; i < 10; i++) {
    if (i ===4) {
    break;
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i === 4) {
        continue;
    }
    console.log(i);
    
}