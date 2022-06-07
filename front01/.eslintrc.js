/* eslint-env node */
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "plugins": [
        "html"
    ],
    "settings": {
        "html/report-bad-indent": "error",
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": [ "warn", 2 ],
    }
};