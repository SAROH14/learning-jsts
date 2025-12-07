function phoneticLookup(val){
    let result = "";


    let lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "El Paso",
    }

    //can use objects instead of a switch statement
    result = lookup[val]

    return result;
}

console.log(phoneticLookup("charlie"));