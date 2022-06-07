/* eslint-env node */
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "plugins": [
    "html"
  ],
  "settings": {
    "html/report-bad-indent": "error",
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    "indent": ["warn", 2],
  }
}
