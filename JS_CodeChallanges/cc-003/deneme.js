const sentence = "Merhaba. benim adım Ali,";

function revSentence(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

console.log(revSentence("days. big make things Little"));
