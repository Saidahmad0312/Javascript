function shortestWordLength(sentence) {
    var words = sentence.split(' ');
    var shortestLength = Infinity;
    for (var i = 0; i < words.length; i++) {
      var wordLength = words[i].length;
      if (wordLength < shortestLength) {
        shortestLength = wordLength;
      }
    }
    return shortestLength;
  }
  
  var sentence = "The quick brown fox jumps over the lazy dog";
  console.log(shortestWordLength(sentence));
  