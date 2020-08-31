// Exercise 2
// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function isPrime2(num) {
    if(num <= 0 || num === 1) {
        return false;
    }
    if(num === 2 || num === 3) {
        return true;
    } else if (num%2 === 0 || num%3 === 0) {
        return false;
    } else {
        for (let i = 5; i <= Math.sqrt(num); i += 2) {
            if(num%i === 0) {
                return false;
            }
        }
        return true;
    }
}


//simplest, but uses a lot of unnecessary resources
function isPrime(num) {
    if(num === 0 || num === 1) {
        return false;
    }
    for(let i = 2; i < num; i++) {
        if(num%i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime2(1));
console.log(isPrime2(2));
console.log(isPrime2(5));
console.log(isPrime2(437));
console.log(isPrime2(953));
console.log(isPrime2(10));
