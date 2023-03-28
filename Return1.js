const readLine = require('readline-sync');

//qq1
function nameSwapper(){
    let first = readLine.question("First Name: ");
    let last = readLine.question("Last Name: ");
    return(`${last}, ${first}`);
}

let myName = nameSwapper();
console.log(myName);

//qq2
function numberGenerator(inital0, inital9){
console.log(inital0+ inital9);
return (0+9);
}

//qq3
function aug(temp1,temp2,temp3,temp4,temp5,temp6,temp7) {
    console.log(`${temp1},+${temp2},+${temp3},+${temp4},+${temp5},+${temp6},=${temp7}`)
}

//qq4