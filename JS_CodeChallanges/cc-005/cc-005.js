let email = "wwww@ss.com"; //prompt("Lütfen email giriniz: ");
let username = email.split("@")[1];
console.log(username);
let websitename = email.split(".")[0];
console.log(websitename);
let extension = email.split(".")[1];
console.log(extension.length);

function valEmail(email) {
  let arrayEmail = email.split("");
  let extension = email.split(".")[1];
  if (
    //(email.lastIndexOf(".com") != -1 || email.lastIndexOf(".co") != -1) &
    (extension.length <= 3) &
    (extension.length > 1) &
    arrayEmail.includes("@") &
    (arrayEmail.indexOf("@") != 0)
  ) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
  return !!email;
}

valEmail(email);
