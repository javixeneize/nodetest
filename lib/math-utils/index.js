/**
 * Math utilities library
 * Provides common mathematical operations
 */

/**
 * Add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtract two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiply two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divide two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Quotient of a and b
 * @throws {Error} When dividing by zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Calculate factorial of a number
 * @param {number} n - Non-negative integer
 * @returns {number} Factorial of n
 * @throws {Error} When n is negative
 */
function factorial(n) {
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  factorial
};
