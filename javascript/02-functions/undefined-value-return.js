let sum = 0;

function addThree(){
    sum = sum + 3;
}

console.log(addThree()); // returns undefined bc addThree() is not returning anything.

function addFive(){

    sum += 5;
}

console.log(addFive())