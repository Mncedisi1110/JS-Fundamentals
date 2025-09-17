function factorial(a) {
 if (a===0 || a===1) {
    return 1
    }
    return a*factorial(a-1);
}
console.log(factorial(4));
console.log(factorial(89));
console.log(factorial(1000));
console.log(factorial());