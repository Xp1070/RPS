let Object = function(name, strength, weakness)
{
    this.name = name;
    this.strength = strength;
    this.weakness = weakness;
}
let rock = new Object("rock", "scissors", "paper");
let paper = new Object("paper", "rock", "scissors");
let scissors = new Object("scissors", "paper", "rock");
let object;
let AIobjectId;
let enemyObject;

let pencilCase = [rock, paper, scissors];
function pick(id)
{
    numberId = parseInt(id);
    object = pencilCase[numberId].name;
    console.log(object);
}
function enemyTurn()
{
    ourAmazingRandomizerAI();
    enemyObject = pencilCase[AIobjectId].name;
    console.log(enemyObject);
}
function ourAmazingRandomizerAI()
{
    AIobjectId = Math.floor(Math.random() * 3);
}