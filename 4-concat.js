const args = process.argv;
let firstsentence = args[0];
let secondsentence = args[1];

if (firstsentence && secondsentence){
    console.log ( "Python is fun");
}else if (firstsentence){
    console.log("HBTN is undefined");
}else {
    console.log("undefined is undefined");
}