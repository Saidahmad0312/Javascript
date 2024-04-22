function findExponent(n, k) {
    var exponent = 0;
    while (n % 2 === 0) {
      n /= 2;
      exponent++;
      if (exponent === k) {
        return true;
      }
    }
    return false;
  }
  
  var n = 8;
  var k = 3;
  console.log(findExponent(n, k));
  