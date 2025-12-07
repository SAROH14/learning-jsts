function switchOfStuff(x){

    let answer = "";

    switch(x){

        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "can't recognize value";
    }

    return answer;
}

console.log(switchOfStuff("d"));