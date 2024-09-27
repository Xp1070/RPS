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
let points = 0;
let AIpoints = 0;

let pencilCase = [rock, paper, scissors];
function pick(id)
{
    numberId = parseInt(id);
    object = pencilCase[numberId].name;
    let choosing = document.getElementById("choosing");
    choosing.innerText = "You chose " + object + ".";
}
function enemyTurn()
{
    ourAmazingRandomizerAI();
    enemyObject = pencilCase[AIobjectId].name;
    compare();
}
function ourAmazingRandomizerAI()
{
    AIobjectId = Math.floor(Math.random() * 3);
}
function compare()
{
    let tekst = document.getElementById("tekst");
    let score = document.getElementById("score");
    if(object == enemyObject)
    {
        tekst.innerText = "AI chose " + enemyObject + ". Draw.";
    }
    else if(object == pencilCase[AIobjectId].weakness)
    {
        tekst.innerText = "AI chose " + enemyObject + ". You win.";
        points++;
        score.innerText = "Your points - " + points + ". AI's points - " + AIpoints + ".";
    }
    else if(object == pencilCase[AIobjectId].strength)
    {
        tekst.innerText = "AI chose " + enemyObject + ". You lose.";
        AIpoints++;
        score.innerText = "Your points - " + points + ". AI's points - " + AIpoints + ".";
    }
    else
    {
        tekst.innerText = "Jakim cudem? Jak tego dokonales? Dalismy ci prosta gre a tobie udalo sie ja zepsuc. Mam nadzieje ze jestes z siebie dumny.";
    }
}