/* Purpose of the this coding challenge is to write a code that given a string , returns reverse of it
   Write a function that takes an array of characters and reverses the letters in place.
*/

//let str = prompt("Lüfen bir veya birkaç kelime girin:");

var revstr = "";

function reverse(str) {
  for (i = str.length; i > 0; i--) {
    revstr += str[i - 1];
  }
  return console.log(revstr);
}

reverse("Clarusway Rocks!");

//reverse(str);
