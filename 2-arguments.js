// No argument
const args = process.argv;
const argv = args[2];
if (argv) {
    console.log('Argument found');
} else if (!argv) {
    console.log("No argument");
}else{
    console.log("Arguments found");
}

