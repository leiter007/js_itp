"JS exercise 1: Simple if statement"
if ("Felix" == "Felix"){
    true;}

"JS exercise 1: Simple if function"
function testName(a) {
    if (a == "Felix") {
        return "true";
    } else {
        return "false";
    }
}

"JS exercise 1: Using for loop to add values from one array to another..

let myArray = ["Thomas", "Sophie", "Faraz"];
let emptyArray = []
let lengt = myArray.length

for (i = 0; lengt; i++) {
    if (i > 2) {break;}
    emptyArray[i] = myArray[i];
}

