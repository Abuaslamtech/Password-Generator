var passwordP = document.getElementById("password");
var generate = document.getElementById("genpbtn");
var copy = document.getElementById("copybtn");

const genPassword = () => {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
    console.log(password);
  }
  passwordP.innerHTML = password;
};
const copyPassword = () => {
  const range = document.createRange();
  range.selectNodeContents(passwordP);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
};
generate.addEventListener("click", genPassword);
copy.addEventListener("click", copyPassword);
