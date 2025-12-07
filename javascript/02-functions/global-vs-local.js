let outerWear = "T-Shirt";  //Global variable

function myOutfit(){

    let outerWear = "Sweater"; //Local variable inside myOutfit()

    return outerWear;
}

console.log(myOutfit()); // variable outerWear is assigned and returned as "Sweater inside myOutfit() because it took precedence over the Global variable
console.log(outerWear); // in Global scope, varible outerWear remains as "T-Shirt"