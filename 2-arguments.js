const args = process.argv
args.push(8);
let argv = args[2];
if (!argv) {
    console.log('No argument');
} else if (isNaN(argv)) {
    console.log("Argument found");
} else{
    console.log("Arguments found");
}