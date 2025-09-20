// isPrime.ts
function isPrime(num) {
    if (num < 2)
        return false; // số < 2 không phải nguyên tố
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false; // chia hết -> không phải
    }
    return true;
}
// Test thử
console.log(isPrime(2)); // true
console.log(isPrime(15)); // false
console.log(isPrime(17)); // true
