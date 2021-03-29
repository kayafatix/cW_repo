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

function numToRoman(number) {
  if (number < 0 || number >= 4000) {
    return console.log("Try again! This number can't be converted!");
  }
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    while (number >= numbers[i]) {
      number -= numbers[i];
      result += romanNums[i];
    }
  }
  return result;
}

console.log(numToRoman(457));
