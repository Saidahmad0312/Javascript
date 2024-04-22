function countDigits(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      if (!isNaN(parseInt(str[i]))) {
        count++;
      }
    }
    return count;
  }
  
  var str = "Hello123World456";
  console.log(countDigits(str));
  