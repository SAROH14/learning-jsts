let array = ["Samuel", "S", ["cat"]];
let removedFromArray = array.shift(); //removes first element "Samuel" from array, now removedFromArray = "Samuel"
console.log(array);
console.log(removedFromArray);

let newArray = [["Jorge", 23], ["dog", 3]];
let newRemovedFromArray = newArray.shift();
console.table(newArray);  //newArray keeps being a multi-dimentional array // newArray = [["dog", 3]]
console.table(newRemovedFromArray); //newRemovedFromArray = ["Jorge", 23] // regular array
