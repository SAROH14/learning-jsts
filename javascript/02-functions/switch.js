function caseInSwitch(x){
    let answer = "";

    if(x >= 1 && x <= 4){
        switch(x) {
            case 1:
                answer = "Alpha";
                break;
            case 2:
                answer = "Beta";
                break;
            case 3:
                answer = "Gamma";
                break;
            case 4:
                answer = "Delta";
                break;
        }
    } else{

        answer = "Cannot be less than 1 or Greater than 4"

    }

    return answer;
}

console.log(caseInSwitch(5));