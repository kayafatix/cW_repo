/* JS-CC-001 : Fibonacci Number
Create a function that, given a number, returns the corresponding Fibonacci number.
The first number in the sequence starts at 1 (not 0) */

let x = prompt("Lütfen hesaplamak istediğiniz sayıyı giriniz: ");

var list = [0, 1];
var fibo = 1;

function fibonacci(x) {
  for (i = 1; i <= x; i++) {
    fibo += list[i - 1];
    //console.log(fibo);
    list.push(fibo);
    //console.log(`${i}.döngü list:${list} - fibo:${fibo}`);
  }
  return console.log(
    `Girdiğiniz sayı:${x}\nFibonacci Listesi: [${list}]\nFibonacci değeri:${fibo}`
  );
}

fibonacci(x);

// console.log(
//   `Girdiğiniz sayı:${x}\nFibonacci Listesi: [${list}]\nFibonacci değeri:${fibo}`
// );

document.write(
  `Girdiğiniz sayı:${x}\nFibonacci Listesi: [${list}]\nFibonacci değeri:${fibo}`
);
