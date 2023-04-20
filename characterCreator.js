const readLine = require('readline-sync');

let diceRolled = [];
let eyeColors = ['blue', 'green', 'brown', 'hazel'];
let character = {

    //empty for now
};

createChar(diceRolled);

function rolld6(){
    return Math.ceil(Math.random()*6)
}
function rollDice(amount, list){
    for(let i=0; i<amount; i++){
        let roll= rolld6();
        console.log(`You rolled a ${roll}!`);
        list.push(roll)
    }
}

function sum(list){
    let sum=0;
    for (let i=0; i<list.length;i++){
        sum +=list[i];
    }
    return sum;
}

function rollStat(list){
    list=[];
    rollDice(4,list);
    return sum(list)

}

function pickRandomChoice(choice){
    let randomNum = Math.floor(Math.random()*choice.length);
}

function createChar(list){
            character.name = readLine.question("Enter Character Name: ");
            console.log('Rolling STR');
            character.eyeColor = pickRandomChoice(diceRolled);
            character.strength = rollStat(diceRolled);
            console.log('Rolling DEX');
            character.dexterity = rollStat(diceRolled);
            console.log('Rolling CON');
            character.constitution = rollStat(diceRolled);
            console.log('Rolling INT');
            character.intelligence = rollStat(diceRolled);
            console.log('Rolling WIS');
            character.wisdom = rollStat(diceRolled);
            console.log('Rolling CHA');
            character.charisma = rollStat(diceRolled);
            character.luck = rollStat(diceRolled);
            console.log(character);
    console.log(character);
}
function displayChar(char){
                console.log('----------------------------');
                console.log(`Name: ${char.name}`);
                console.log(`STR: ${char.strength}`);
                console.log(`eyeColor: ${char.eyeColor}`);
                console.log(`DEX: ${char.dexterity}`);
                console.log(`CON: ${char.constitution}`);
                console.log(`INT: ${char.intelligence}`);
                console.log(`WIS: ${char.wisdom}`);
                console.log(`CHA: ${char.charisma}`);
                console.log(`LUC: ${char.luck}`);
            }



