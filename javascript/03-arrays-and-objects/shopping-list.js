let list = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 4], ["eggs", 4]];
console.table(list)

let removedItems = list.shift(); //removed first element ["cereal", 3] from list and assigns it to removedItems
console.table(removedItems);

let addItems = removedItems; //assigns addItems the value of removedItems
list.push(addItems); //adds removedItems = ["cereal", 3] at end of the list array
console.table(list)