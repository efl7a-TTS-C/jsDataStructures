// Write a JavaScript program to compute the sum and product of an array of integers.

let arr = [2, 5, 8, 24, 89]

let sumOfArr = arr.reduce(sumArray, 0);
let productOfArr = arr.reduce(productOfArray, 1);

function sumArray(sum, value) {
    return sum + value;
}

function productOfArray(product, value) {
    return product * value;
} 


console.log(sumOfArr, productOfArr);

