function localScope(){
    let var1 = 5;
    console.log(var1)
}

localScope();

console.log(var1)  //var1 does not exist outside of localScope(). Throws error, var1 is not defined.


