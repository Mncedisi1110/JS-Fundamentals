const args = process.argv;

if (args.slice(0,2)){
    console.log ( "Python fun");
}else if (args.slice(0,1)){
    console.log("HBTN");
}else {
    console.log("0 arguments");
}