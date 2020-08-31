// Exercise 1
// Write a JavaScript function that reverses a number.

function reverseANum(num) {
    return parseFloat([...num.toString()].reverse().join(""));
}

console.log(reverseANum(56));
console.log(reverseANum(15.67));
console.log(reverseANum(5789098));


