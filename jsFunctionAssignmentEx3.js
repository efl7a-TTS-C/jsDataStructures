// Exercise 3
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

function countLetter(str, letter) {
    return str.split("").filter(l => l.toLowerCase() === letter.toLowerCase()).length;
}

function countLetterES6(str, letter) {
    return [...str].filter(l => l.toLowerCase() === letter.toLowerCase()).length;
}

function countLetterRegEx(str, letter) {
    let re = new RegExp(letter, "ig")
    return str.match(re).length;
}

console.log(countLetter("my dog is cute", "d"));
console.log(countLetter("lots of ls around here lll", "l"));


console.log(countLetterES6("my dog is cute", "d"));
console.log(countLetterES6("lots of ls around here lll", "l"));

console.log(countLetterRegEx("my dog is cute", "d"));
console.log(countLetterRegEx("lots of ls around here lll", "l"));