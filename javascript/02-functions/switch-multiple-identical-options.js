function sequentialSizes(x) {
    let answer = ""

    switch (x) {

        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        default:
            answer = "not valid value: only 1 - 9 allowed";
            break;
    }

    return answer;
}

console.log(sequentialSizes(10));