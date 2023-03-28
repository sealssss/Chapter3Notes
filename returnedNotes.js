//Parameters are placeholder variables that allow us to
//Refuse functions

// Example 1: Without Parameter(s)
function printYes(){
    console.log("yes");
}

printYes();
printYes();
printYes();

//Example 2: With Parameter
function printText(text){
    console.log(text)
}

printText("Happy Thursday!");
printText("Tomorrow is Friday!");

//Return statements provide values to the rest of the program
//Returned values can be used by other parts of the code
//console.log does not return values for the rest of your code
//Example 3: Without return
function double(num){
    console.log(num*2);
}
double(3);

//Example 4: With return
function triple(n){
    return(n*3);
}

let lives = triple(3);
lives -=1;
lives +=2;
console.log(lives);

console.log(triple(2));

//Scope is the part of the program where the binding (value of a variable) is visible.
//global scope: created outside all {} and accessible everywhere
//local scope: created inside a {} and only accessible inside that {}, accessible only there

//Example 5: Different Scopes
let x=10; //global x
if (x>1){
    let y=20;  //local y
    let z=30; //local z
    console.log(x+y+2);
}
console.log(x); // y and z are not accessible outside the {}

//Example 6: No Naming Conflict
function half(n){ //local n
    return (n/2);
}
let n=10;  //global n
console.log(half(100));
console.log(n);
