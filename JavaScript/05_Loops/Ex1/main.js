for (let i = 0; i < array.length; i++) {
    console.log("First loop iteration = " + i);
    console.log("---------------------------------");
    for (let j = 0; j < array.length; j++) {
        console.log("Second loop iteration 'i' = " + i);
        console.log("Second loop iteration 'j' = " + j);
    }
    console.log("---------------------------------");
}