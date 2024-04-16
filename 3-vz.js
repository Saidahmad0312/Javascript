class Magic {
    replace(a, b) {
      return this.replaceWith(a, b);
    }
  
    length(data) {
      return this.calculateLength(data);
    }
  
    toUpperCase(str) {
      const obj = {
        a: 'A',
        b: 'B',
        c: 'C',
        d: 'D',
        e: 'E',
        f: 'F',
        g: 'G',
        h: 'H',
        i: 'I',
        j: 'J',
        k: 'K',
        l: 'L',
        m: 'M',
        n: 'N',
        o: 'O',
        p: 'P',
        q: 'Q',
        r: 'R',
        s: 'S',
        t: 'T',
        u: 'U',
        v: 'V',
        w: 'W',
        x: 'X',
        y: 'Y',
        z: 'Z',
      };
  
      let result = '';
      for (let i = 0; i < str.length; i++) {
        if (obj.hasOwnProperty(str[i])) {
          result += obj[str[i]];
        } else {
          result += str[i];
        }
      }
      return result;
    }
  
    repeat(data, n) {
      let repeatedData = '';
      for (let i = 0; i < n; i++) {
        repeatedData += data;
      }
      return repeatedData;
    }
  
    count(str) {
      const charCount = {};
      for (let char of str) {
        if (charCount[char]) {
          charCount[char]++;
        } else {
          charCount[char] = 1;
        }
      }
      return charCount;
    }
  
    replaceWith(a, b) {
      return a.replace(a, b);
    }
  
    calculateLength(data) {
      return data.length;
    }
  }
  
  const magic = new Magic();
  console.log(magic.replace("hello", "world"));
  console.log(magic.length("hello"));
  console.log(magic.toUpperCase("hello"));
  console.log(magic.repeat("salom", 2));
  console.log(magic.count("hello world"));
  