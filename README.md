# Node.js Project with Internal Libraries

A demonstration Node.js project showcasing the use of internal library dependencies using local file-based packages.

## 🏗️ Project Structure

```
nodetest/
├── index.js                    # Main application
├── package.json                # Main project configuration
├── lib/                        # Internal libraries
│   ├── math-utils/             # Mathematics utilities
│   │   ├── package.json
│   │   └── index.js
│   └── string-utils/           # String manipulation utilities
│       ├── package.json
│       └── index.js
├── .github/
│   └── copilot-instructions.md # Copilot customization
└── README.md                   # This file
```

## 📚 Internal Libraries

### @nodetest/math-utils
Provides mathematical operations:
- `add(a, b)` - Addition
- `subtract(a, b)` - Subtraction  
- `multiply(a, b)` - Multiplication
- `divide(a, b)` - Division (with zero-division protection)
- `factorial(n)` - Factorial calculation

### @nodetest/string-utils
Provides string manipulation functions:
- `capitalize(str)` - Capitalize first letter
- `toCamelCase(str)` - Convert to camelCase
- `toKebabCase(str)` - Convert to kebab-case
- `reverse(str)` - Reverse string
- `isPalindrome(str)` - Check if palindrome

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm

### Installation
1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
```bash
# Run once
npm start

# Run in watch mode (restarts on file changes)
npm run dev
```

## 🛠️ Development

### Adding New Internal Libraries
1. Create a new directory under `lib/`
2. Initialize with `package.json` and set appropriate name (e.g., `@nodetest/new-lib`)
3. Add the library to main `package.json` dependencies using `file:` protocol
4. Run `npm install` to link the dependency

### Example Usage
```javascript
const mathUtils = require('@nodetest/math-utils');
const stringUtils = require('@nodetest/string-utils');

// Use math utilities
console.log(mathUtils.add(5, 3)); // 8

// Use string utilities  
console.log(stringUtils.capitalize('hello')); // "Hello"
```

## 📝 Features Demonstrated

- ✅ Internal library dependencies using `file:` protocol
- ✅ Proper CommonJS module exports/imports
- ✅ JSDoc documentation
- ✅ Error handling and validation
- ✅ Multiple utility libraries in a single project
- ✅ npm scripts for development workflow

## 🧪 Example Output

When you run the application, you'll see demonstrations of:
- Mathematical operations
- String manipulations
- Error handling scenarios
- Palindrome detection

## 📄 License

ISC
