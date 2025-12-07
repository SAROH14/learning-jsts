function testStrict(val){

    if (val === 12){ //compares values and types

        return "equal";
    }

    return "not equal";
}


console.log(testStrict(10));
console.log(testStrict(12));
console.log(testStrict("12")); // not the same type as val string != number