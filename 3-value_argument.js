process.argv.push("hbtn", "Hbtn");
const args = process.argv.slice(2,4)
let argv = args[0];

if (argv === "htbn"){
    console.log("HBTN");
}else if (!argv) {
    console.log("No argument");
}else{
    console.log ("HBTN cool")
}