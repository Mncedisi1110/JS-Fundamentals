const name = function () {
   return " No argument";
}
console.log(name());

const username = function (username) {
   if (username.includes("@")) {
       return "Argument found";
   }
}
console.log(username("@"));