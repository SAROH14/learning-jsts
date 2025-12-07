function testElse(x) {

    let result = "";

    if (x > 5){

        result = "Bigger than 5";
    } else if (x < 5){

        result = "5 or Smaller";
    }

    return result;
}


console.log(testElse(12));


function sizeComparison(x){

    if (x < 5){

        return "Tiny";
    } else if (x >= 5 && x < 10){

        return "Small";
    } else if (x >= 10 && x < 15){

        return "Medium";
    } else if (x >= 15 && x < 20){

        return "Large";
    } else if(x >= 20){

        return "Huge";
    }

}

console.log(sizeComparison(10));