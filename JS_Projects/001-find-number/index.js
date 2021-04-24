document.getElementById("btn").addEventListener("click", findNumber);
document
  .getElementById("input_number")
  .addEventListener("keyup", function (event) {
    if (event.code == "Enter") {
      findNumber();
    }
  });

let count = 0;

const rNumber = Math.floor(Math.random() * 100 + 1);

console.log(rNumber);

function findNumber() {
  const number = document.getElementById("input_number").value;

  if (number > rNumber) {
    document.getElementById("answer").innerHTML =
      "Please Guess a SMALLER Number!";
  } else if (number < rNumber) {
    document.getElementById("answer").innerHTML =
      "Please Guess a BIGGER Number!";
  } else {
    document.getElementById("answer").innerHTML =
      "CONGRATS! You find the Number!";
    let nextGame = confirm("Play again?");
    if (nextGame) {
      rNumber = Math.floor(Math.random() * 100 + 1);
    } else {
      document.getElementById("answer").innerHTML = "";
    }
  }
  count += 1;
  document.getElementById("number").innerHTML = count;
}
// while(count>)
