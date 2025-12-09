function multiplyAll(arr){
    let product = 1;

    for(let i = 0; i < arr.length; i++){ //iterates on the values of the first level array.

        for(let j = 0; j < arr[i].length; j++){ //iterates the values of each 2nd level arrays.

            product *= arr[i][j]; // multiplies product value with value on the each 2nd level array and assigns to product

        }

    }

    return product;
}

let product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product)