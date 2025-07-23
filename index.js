/**
 * Main application file
 * Demonstrates usage of internal library dependencies
 */

const mathUtils = require('@nodetest/math-utils');
const stringUtils = require('@nodetest/string-utils');

console.log('🚀 Node.js Project with Internal Libraries Demo\n');

// Math utilities demo
console.log('📊 Math Utilities Demo:');
console.log(`Addition: 10 + 5 = ${mathUtils.add(10, 5)}`);
console.log(`Subtraction: 10 - 3 = ${mathUtils.subtract(10, 3)}`);
console.log(`Multiplication: 7 * 8 = ${mathUtils.multiply(7, 8)}`);
console.log(`Division: 20 / 4 = ${mathUtils.divide(20, 4)}`);
console.log(`Factorial: 5! = ${mathUtils.factorial(5)}`);

console.log('\n');

// String utilities demo
console.log('📝 String Utilities Demo:');
const testString = 'hello world';
console.log(`Original: "${testString}"`);
console.log(`Capitalized: "${stringUtils.capitalize(testString)}"`);
console.log(`CamelCase: "${stringUtils.toCamelCase(testString)}"`);
console.log(`Kebab-case: "${stringUtils.toKebabCase('Hello World Test')}"`);
console.log(`Reversed: "${stringUtils.reverse(testString)}"`);

const palindrome = 'racecar';
console.log(`\nPalindrome test: "${palindrome}" is ${stringUtils.isPalindrome(palindrome) ? 'a palindrome' : 'not a palindrome'}`);

console.log('\n✅ Demo completed successfully!');

// Example of error handling
console.log('\n🛡️  Error Handling Demo:');
try {
  mathUtils.divide(10, 0);
} catch (error) {
  console.log(`Caught error: ${error.message}`);
}

try {
  mathUtils.factorial(-1);
} catch (error) {
  console.log(`Caught error: ${error.message}`);
}
