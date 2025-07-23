/**
 * String utilities library
 * Provides common string manipulation functions
 */

/**
 * Capitalize the first letter of a string
 * @param {string} str - Input string
 * @returns {string} String with first letter capitalized
 */
function capitalize(str) {
  if (!str || typeof str !== 'string') {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Convert string to camelCase
 * @param {string} str - Input string
 * @returns {string} camelCase string
 */
function toCamelCase(str) {
  if (!str || typeof str !== 'string') {
    return str;
  }
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

/**
 * Convert string to kebab-case
 * @param {string} str - Input string
 * @returns {string} kebab-case string
 */
function toKebabCase(str) {
  if (!str || typeof str !== 'string') {
    return str;
  }
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Reverse a string
 * @param {string} str - Input string
 * @returns {string} Reversed string
 */
function reverse(str) {
  if (!str || typeof str !== 'string') {
    return str;
  }
  return str.split('').reverse().join('');
}

/**
 * Check if string is palindrome
 * @param {string} str - Input string
 * @returns {boolean} True if palindrome, false otherwise
 */
function isPalindrome(str) {
  if (!str || typeof str !== 'string') {
    return false;
  }
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
}

module.exports = {
  capitalize,
  toCamelCase,
  toKebabCase,
  reverse,
  isPalindrome
};
