// No argument
const args = process.argv;
const argv = args[3];
args.additional = "extra";
if (argv) {
    console.log('Argument found');
} else if (!argv) {
    console.log("No argument");
}else{
    console.log("Arguments found");
}
console.log(args);
