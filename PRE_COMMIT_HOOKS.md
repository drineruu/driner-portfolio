# Pre-commit Hooks Setup

### 🔧 Tools Configured
- **Husky**: Manages Git hooks
- **lint-staged**: Runs commands only on staged files
- **ESLint**: Lints JavaScript/React code for errors and style issues
- **Prettier**: Formats code for consistency

### 📋 What Runs on Each Commit
When you run `git commit`, the following happens automatically:

1. **ESLint**: Checks staged `.js` and `.jsx` files for:
   - Syntax errors
   - Code quality issues
   - React-specific best practices
   - Automatically fixes issues where possible

2. **Prettier**: Formats staged files for:
   - Consistent code style
   - Proper indentation and spacing
   - Consistent quotes and semicolons

## Available Scripts

### Manual Commands
```bash
# Run ESLint on all source files
npm run lint

# Run ESLint and fix issues automatically
npm run lint:fix

# Format all files with Prettier
npm run format

# Check if files are formatted correctly
npm run format:check
```

### Automatic Commands
```bash
# Runs automatically on git commit
npx lint-staged
```

## Configuration Files

### `.prettierrc`
Prettier configuration with the following settings:
- Single quotes for strings
- Semicolons at end of statements
- 2 spaces for indentation
- 80 character line width
- ES5 trailing commas

### `package.json` - lint-staged section
```json
{
  "lint-staged": {
    "src/**/*.{js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "src/**/*.{json,css,md}": [
      "prettier --write"
    ]
  }
}
```

### "Command not found" errors
Make sure you've installed dependencies:
```bash
npm install
```

### ESLint errors
Fix ESLint issues by running:
```bash
npm run lint:fix
```

### Prettier formatting issues
Format all files:
```bash
npm run format
```

### Hooks not running
Reinstall husky:
```bash
npm run prepare
```