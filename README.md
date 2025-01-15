# JavaScript Null and Undefined Handling

This repository demonstrates a common error in JavaScript related to the handling of `null` and `undefined` values and showcases a solution for better error handling.

The `bug.js` file contains a simple function that adds two numbers.  However, it doesn't adequately handle scenarios where one or both inputs are `null`. The `bugSolution.js` file provides an improved version which offers more robust error handling.

## Bug Description
The original function, `foo`, only checks for `null` values and returns null if either input is null. This may not be a sufficient check if the function is called with `undefined` or other falsy values.  A more robust function would check for different error conditions.

## Solution
The improved function checks for `null` or `undefined` values and either returns `null` or throws a more descriptive error for other unexpected input types.