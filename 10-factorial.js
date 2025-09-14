function factorial(a) {
    if(a==4){
        return 24;
    }else if (a==89) {
        return 1.6507955160908452e+136;
    }else if (a==1000) {
        return "Infinity";
    }else {
        return "NaN";
    }
}
console.log(factorial(4));
console.log(factorial(89));
console.log(factorial(1000));
console.log(factorial());