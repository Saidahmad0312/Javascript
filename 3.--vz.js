function multiplyObjectValues(obj, n) {
    const res = {};
    for (let key in obj) {
      res[key] = obj[key] * n;
    }
    return res;
  }
  
  const obj = {a: 2, b: 3, c: 4};
  const n = 3;
  const res = multiplyObjectValues(obj, n);
  console.log(res);
  