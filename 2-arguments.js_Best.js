// No argument
const args = process.argv;
const argv = args[3];
if (!argv) {
    console.log('No argument');
} else if (isNaN(argv)) {
    console.log("Argument found");
}else{
    console.log("Arguments found");
}

