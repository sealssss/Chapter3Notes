const readLine=require('readline-sync');

// let word= readLine.question("noun");*
//put the word into an array
//and repeat


// let arraysList=[noun];
// let readline;
// arraysList.push(readline.question('Enter a verb:'));
// arraysList.push(readLine.question('Enter a noun'));
// console.log('arraysList has ${arraysList[0]} and ${arraysList[1]');

readLine.question("How much ketchup packets do you want?");
let answers =['one', 'two', 'three']
let randomNum = Math.floor(Math.random()*answers.length);
let answer = answers[randomNum];
console.log(answer);