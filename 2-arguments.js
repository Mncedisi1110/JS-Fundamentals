const args = process.argv
args.push(8);
let argv = args[3];
if (!argv) {
    console.log('No argument');
} else if (isNaN(argv)) {
    console.log("Arguments found");
} else{
    console.log("Argument found");
}