let global = 10;

function fun1() {
    let oopsGlobal = 5;
}

function fun2(){
    let output = "";
    if (typeof global != "undefined"){ //if global is not undefined
        output += "global: " + global; //output= global: 10
    }
    if (typeof oopsGlobal != "undefined"){  //if oopsGlobal is not undefined
        output += "oopsGlobal: " + oopsGlobal;  //output = oopsGlobal: 5
    }

    console.log(output); 
}

fun1();
fun2();
