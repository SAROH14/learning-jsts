let array = ["Samuel", "S", "cat"];
array.shift() //removes first element "Samuel" from array
console.log(array);
array.unshift("Happy"); //adds "Happy" as first element of the array
console.log(array);

let newArray = [["Jorge", 23], ["dog", 3]];
console.table(newArray);

newArray.shift(); //removes ["Jorge", 23] from newArray
console.table(newArray);

newArray.unshift(["Sebas", 24]); //adds ["Sebas", 24] as first element of newArray
console.table(newArray);

