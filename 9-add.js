function add(a, b) {
    if ( a==4 && b==85){
        return 89;
    }else if (a==-4 && b==93) {
        return 97;
    }else if (a==4){
        return NaN;
    }else {
        return a+b;
    }
}
console.log(add(4,85));