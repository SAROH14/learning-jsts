function greaterThan(val){

    if (val >= 100){

        return val + " Is Greater than or Equals to 100";
    } else if (val > 10 && val < 100){

        return val + " Is Greater than 10 but Less than 100";
    } 

    return val + " is Under than or Equals to 10";

}

console.log(greaterThan(10));

function logicalAnd(x){

    if (x >= 25 && x < 50 ){

        return x + " is greater than or equals 25 and less than 50";

    } else if (x < 25){

        return x + " is less than 25"
    } 

    return x + " is greater than or equals 50";
}

console.log(logicalAnd(50));
console.log(logicalAnd(25));
console.log(logicalAnd(66));


