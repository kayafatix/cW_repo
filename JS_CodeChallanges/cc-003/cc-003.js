function reverseWords(message) {
  var list_message = message.split(" ");
  let new_message = "";
  for (i = list_message.length; i > 0; i--) {
    new_message += list_message[i - 1];
  }
  return new_message; //Write your code here
}
//console.log(reverseWords(message));

//You can write additional helper functions as well.
// Tests

let desc = "Don't reverse single word";
let input = "Clarusway".split("");
reverseWords(input);
let actual = input.join("");
let expected = "Clarusway";
assertEqual(actual, expected, desc);

desc = "Inspring Quote #1";
input = "days. big make things Little".split("");
reverseWords(input);
actual = input.join("");
expected = "Little things make big days.";
assertEqual(actual, expected, desc);

desc = "Inspring Quote #2";
input = "impossible. mean not does hard but hard, be to going It’s".split("");
reverseWords(input);
actual = input.join("");
expected = "It’s going to be hard, but hard does not mean impossible.";
assertEqual(actual, expected, desc);

desc = "Inspring Quote #3";
input = "done. you’re when Stop tired. you’re when stop Don’t".split("");
reverseWords(input);
actual = input.join("");
expected = "Don’t stop when you’re tired. Stop when you’re done.";
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc}...PASS`);
  } else {
    console.log(`${desc} ...FAIL: ${a} != ${b}`);
  }
}
