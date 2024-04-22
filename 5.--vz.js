const sumDigits = (...numbers) => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return Array.from(String(sum), Number);
  };
  
  const numbers = [1, 22, 3];
  const result = sumDigits(...numbers);
  console.log(result);