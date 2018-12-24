module.exports = {
  "env": {
    "es6": true,
    "shared-node-browser": true,
    "commonjs": true,
    "jest": true,
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "plugins": [
    // "babel"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single",
      {"avoidEscape": true}
    ],
    "semi": [
      "error",
      "always"
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
  }
};
