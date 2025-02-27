function myFunction(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 0; // Or handle NaN as appropriate for your application
  }
  return a - b;
}

console.log(myFunction(10, 5)); // Output: 5
console.log(myFunction(5, 10)); // Output: -5
console.log(myFunction(NaN, 5)); // Output: 0
console.log(myFunction(5, NaN)); // Output: 0