/* My first
javascript code
*/

//console.log("Kristijan Pecev");

let lname = "Pecev";
let age = "22";

//Global Variable
function FirstName(firstname) { //Start of block scope
   //Local Variable
    let fname = firstname;
    /* 
    This function is concatinating two strings
    with empty space between.
    */ 
    console.log(fname + " " + lname);
}   //End of block scope

function Lastname() {
    /*
    This function is showing
    only the last name into the console.
    */
    console.log(lname);
}


function bio() {
    //Local Variable
    let fname = "Kristijan";

    age++;

    // height++;
    // height = 181;

    console.log(fname + " " + lname + " " + "-Age:" + age + "-Height" + height);
}

// This line of code is calling the first funtion.
FirstName("Kristijan");
// This line of code is calling the second funtion.
Lastname();

bio();

bio();