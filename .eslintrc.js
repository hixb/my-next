module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
  ],
  env: {
    "browser": true,
    "es6": true,
    "node": true
  },
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:unocss/recommended"
  ],
  rules: {
    semi: [2],
    "object-curly-spacing": ["error", "always"],
    "quotes": [1, "double"],
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "never"
    }],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    "@typescript-eslint/no-var-requires": 0
  }
};
