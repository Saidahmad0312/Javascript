function getLevel(n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
  }
  
  console.log(getLevel(4));
  
  console.log(getLevel(5));
  