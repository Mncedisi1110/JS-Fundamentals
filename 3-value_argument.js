const args = process.argv;
args.push ("hbtn");
let argv = args[0];
if (argv==args[0]) {
    console.log("HBTN");
}else if ( !argv) {
    console.log("No argument");
}else{
    console.log("HBTN cool");
}

