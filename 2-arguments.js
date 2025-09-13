// No argument
const args = process.argv;
const argv = args[2];
if (!argv) {
    console.log('No argument');
} else {
    console.log(`Argument: ${argv}`);
}

