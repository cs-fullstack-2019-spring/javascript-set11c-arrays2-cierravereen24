

var wordsToKnow = ["hamburger", "music", "wolves"];

while (true) {
   var word = prompt("Type in your favorite word. Enter a (q) to stop.");
  if ("q" === word)
  {
     break
  }


   wordsToKnow.push(word);


}
 console.log(wordsToKnow);

