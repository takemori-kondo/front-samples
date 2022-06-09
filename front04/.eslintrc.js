/* eslint-env node */
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "plugins": [
    "html",
    "vue"
  ],
  "settings": {
    "html/report-bad-indent": "error",
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    "indent": ["warn", 2],
  }
}
