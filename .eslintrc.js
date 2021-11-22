module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    "react-native/react-native": true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "eslint-config-prettier",
    "plugin:promise/recommended",
    "plugin:flowtype/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      "babel-module": {
        root: ["."],
        alias: require("./aliases.json"),
      },
    },
    "react-native/style-sheet-object-names": ["EStyleSheet"],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    sourceType: "module",
  },
  parser: "babel-eslint",
  plugins: [
    "react",
    "react-native",
    "jest",
    "import",
    "react-hooks",
    "flowtype",
  ],
  rules: {
    eqeqeq: ["error", "always"],
    "react-hooks/exhaustive-deps": "error",
    "import/no-unresolved": 2,
    "no-console": ["error", { allow: ["error"] }],
    "promise/prefer-await-to-then": 2,
    "promise/no-nesting": 2,
    "promise/prefer-await-to-callbacks": 2,
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "ignore" },
    ],
    "react/prop-types": 0,
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 1,
    "react-native/no-inline-styles": 1,
    "react-native/no-raw-text": 0,
    "react-native/no-single-element-style-arrays": 1,
    "require-await": 2,
    "prefer-const": 2,
    "no-var": 2,
    "import/no-anonymous-default-export": 2,
  },
};
