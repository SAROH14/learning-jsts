let global = 10;

function fun1() {
    let oopsGlobal = 5;
}

function fun2(){
    let output = "";
    if (typeof global != "undefined"){
        output += "global: " + global;
    }
    if (typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: " + oopsGlobal; 
    }

    console.log(output);
}

fun1();
fun2();
