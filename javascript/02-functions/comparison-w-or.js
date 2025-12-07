function logicalOr(x){

    if(x < 10 || x > 20 ){

        return x + " Outside";
    }

    return x + " Inside";
}

console.log(logicalOr(9));
console.log(logicalOr(12));
