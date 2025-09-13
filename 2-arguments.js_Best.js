const username = "shawnsmith@gmail.com";
const Password = "mypassword123";
const Name = "Shawn Smith";
if ( username.includes("@") && Password.length >= 8 && Name.length >= 5 ) {
    console.log("Arguments found");
}else{
    console.log("No Arguments found");
}
