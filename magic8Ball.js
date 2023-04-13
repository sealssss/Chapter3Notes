const readLine = require ('readline-sync');

let answers=['yes', 'no', 'maybe', 'I dont know', 'try again later', 'you may rely on it'];

let randomNum = Math.floor(Math.random()*answers.length);
let answer = answers[randomNum];
console.log(answer);

let answer = readLine.question("Do you want to quit?");
while (answer !="yes" && answer !="no"){
    console.log("Thank you for using the magic9Ball!");
    answer = readLine.question("Do you want to quit?");
}
console.log("rest of program");

let answer = readLine.question("Do you want to quit");
while (answer !="yes" && answer !="no"){
    console.log(answer)
}

