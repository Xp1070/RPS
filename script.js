//console.log("Hello world!");

let Tool = function(name, weight, sound)
{
    this.name = name;
    this.weight = weight;
    this.sound = sound;
    this.doSomething = function()
    {
        console.log("I am " + this.name + " and I can do " + this.sound + ".");
    }
    this.toString = function()
    {
        return("I am " + this.name + " my weight is " + this.weight + " and I can do " + this.sound + ".");
    }
}
let drill = new Tool("Ultra-Drill 3000", "5kg", "vroom");
let hammer = new Tool("Mjolnir", "3kg", "bonk bonk");
let nailgun = new Tool("Nailgun", "2kg", "pew pew");
let saw = new Tool("Shredder", "1kg", "wrzzzz wrzz");
let screwdriver = new Tool("LTT Screwdriver","100g","ckrr");
let sledgehammer= new Tool("Panzerabwehrhammer1050","6kg","BONK!");
let toolbox = [drill, hammer, nailgun, saw, screwdriver, sledgehammer];
//for(let i = 0; i < toolbox.length; i++)
//{
//    document.write(toolbox[i].toString() + "<br>");
//}
function randomize()
{
    alert("Wygenerowano narzędzie!");
    let index = Math.floor(Math.random() * toolbox.length);
    //document.write("Wylosowane narzędzie: " + "<br>");
    //document.write(toolbox[index].toString());
    let p = document.getElementById("randomTool");
    p.innerHTML = toolbox[index].toString()
}