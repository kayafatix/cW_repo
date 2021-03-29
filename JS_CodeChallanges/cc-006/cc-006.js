document.getElementById("button").addEventListener("click", numToRoman);
let romanNums = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];
let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function numToRoman() {
  let number1 = document.getElementById("decimal").value;
  let number = parseInt(number1);
  if (number >= 4000) {
    let warning = "Try again! This number can't be converted!";
    document.getElementById("resultp2").innerHTML = warning;
    // return console.log("Try again! This number can't be converted!");
  }
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    while (number >= numbers[i]) {
      number -= numbers[i];
      result += romanNums[i];
    }
  }
  //return result;
  document.getElementById("resultp2").innerHTML = result;
}

// //console.log(numToRoman());
