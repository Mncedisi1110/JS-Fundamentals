// No argument
const args = process.argv;
const argv = args[0];
if (argv) {
    console.log('Argument found');
} else if (!argv) {
    console.log("No argument");
}else{
    console.log("Arguments found");
}
console.log(args);
