function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }
  const result = sumArray([1, 2, 3, 4, 5]);
  console.log(result);