function getLargestNumber(a, b) {
    return a || b || a === 0 || b === 0 ? a > b ? a : b : undefined;
}
const result = getLargestNumber(10, 5);
console.log(result);