let str = [];

let skipNum = 5;

for (let i = 0; i < 10; i++) {
    if (i === skipNum) {
        continue;
    }
    if (i === 9) {
        str += i;
    } else {
        str += i + ", ";
    }
}
console.log(str);

let str1 = [];

for (let i = 0; i < 10; i++) {
    if (i === skipNum) {
        str1 = str1.substring(0, str1.length - 2);
        break;
    }
    if (i === 9) {
        str1 += i;
    } else {
        str1 += i + ", ";
    }
}
console.log(str1);