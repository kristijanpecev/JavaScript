console.log("test");

const theList = ['Lawrence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

theList.shift;
console.log(theList.shift());

theList.pop;
console.log(theList.pop());

theList.unshift("First");
console.log(theList);

theList.splice(3,4,"Hello World");
console.log(theList);

let index = theList.indexOf(true);
theList[index] = "MIDDLE";
console.log(theList);

theList.push("LAST");
console.log(theList);
