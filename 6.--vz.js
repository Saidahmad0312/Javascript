function countWordsWithA(str) {
    var count = 0;
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
      if (words[i].includes('a')) {
        count++;
      }
    }
    return count;
  }

  var str = "JavaScript is an awesome language";
  console.log(countWordsWithA(str));
  