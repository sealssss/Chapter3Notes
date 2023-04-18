const readLine = require('readline-sync');

let diceRolled = [];
let character1 = {
    //empty for now
};

createChar(character1, diceRolled);

function rolld6(){
    return Math.ceil(Math.random()*6)
}

function rollDice(amount, list) {
    for (let i=0; i<amount; i++){
        let roll = rolld6();
        console.log(`You rolled a ${roll}!`);
        list.push(roll);
    }
}
function rollDice(amount, list){
    for(let i=0; i<amount; i++){
        let roll= rolld6();
        console.log(`You rolled a ${roll}!`);
        list.push(roll)
    }

}

sum += list[i];

}

return sum;

}

function rollStat(list){
    list = [];
    rollDice(4, list);
    return sum(list)
}
character.name = readLine.question("Enter Character Name: ");
    console.log("Rolling Strength");
    character.strength = rollStat(diceRolled);
    console.log("Rolling Dexterity");
    character.Dexterity = rollStat(diceRolled);
    console.log("Rolling Consitution");
    character.Consitution = rollStat(diceRolled);
    console.log("Rolling Intelligence");
    character.Intelligence = rollStat(diceRolled);
    console.log("Rolling Wisdom");
    character.wisdom = rollStat(diceRolled);
    console.log("Rolling charisma");
    character.charisma = rollStat(diceRolled);
}
    function displayChar(char) {
console.log(`Name: ${char.name} `);
        console.log(`STR: ${char.strength} `);
        console.log(`DEX: ${char.Dexterity} `);
        console.log(`CON: ${char.Consitution} `);
        console.log(`INT: ${char.Intelligence} `);
        console.log(`WIS: ${char.wisdom} `);

    }
