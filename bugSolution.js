function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null; // Handle null or undefined values
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input type: Inputs must be numbers.');
  }
  return a + b; // Perform addition
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5));   // Output: 10
console.log(foo('5', 5)); // Throws an error
console.log(foo(undefined, 5)); // Output: null