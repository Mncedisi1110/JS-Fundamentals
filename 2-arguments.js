const args = process.argv;
const argv = args[1];
 if ( argv === args[0]) {
    console.log('Argument found');
 } else if (argv === undefined) {
    console.log("No argument");
 }else{
    console.log("Arguments found");
 }

