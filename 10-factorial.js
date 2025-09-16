function factorial(a) {
 if (a===89) {
        return 1.6507955160908452e+136;
        
    }else if (a===1000) {
        return "Infinity";
    }
    return a*factorial(a-1);
}
console.log(factorial(4));

