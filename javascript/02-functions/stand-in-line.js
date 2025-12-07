function nextInLine(arr, item){


    arr.push(item)  //item = 6 is pushed into the end of the array.
    return arr.shift(); // nextInLine() returns the first value taken from the array.
}

let testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));  //stringify converts the Array into a String so it can be printed into the console
console.log("popped out: " + nextInLine(testArr, 6));  // we call the function and assign arr = testArr and item = 6.
console.log("After: " + JSON.stringify(testArr));