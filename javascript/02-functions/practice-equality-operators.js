function compareEquality(a, b){

    if (a === b){

        return "Strict Equal";

    } else if (a == b){

        return "Loose Equal";
    }

    return "Not Equal";
}

console.log(compareEquality(10, "10"));
console.log(compareEquality(12, 12));
console.log(compareEquality(2, 3))