const readLine = require ('readline-sync');

//3
let answers=['yes', 'no', 'maybe', 'I dont know', 'try again later', 'you may rely on it'];

let randomNum = Math.floor(Math.random()*answers.length);
let answer = answers[randomNum];
console.log(answer);

//1
let answer = readLine.question("Do you want to quit?");
while (answer !="yes" && answer !="no"){
    console.log("Thank you for using the magic9Ball! You have consulted the magic 8 ball, 5 times!");
    answer = readLine.question("Do you want to quit?");
}
console.log("rest of program");

let answer = readLine.question("Do you want to quit");
while (answer !="yes" && answer !="no"){
    console.log(answer)
}

//2
let ASCII=['cupcake','font','bakery'];

let artStyle = Math.floor(Math.random()*answers.length);
let answer = answers[randomNum];
console.log(answer);
