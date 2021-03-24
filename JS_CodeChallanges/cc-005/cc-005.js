let email = prompt("Lütfen email giriniz: ");

function valEmail(email) {
  if (email.spl != "") {
    console.log("valid");
  } else if (email.indexof("@") === -1) {
    console.log("invalid");
  }
  return !!email;
}

valEmail();
