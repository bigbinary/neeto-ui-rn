module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    "react-native/react-native": true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
    "./.eslint-rules/globals",
    "./.eslint-rules/imports/order",
    "./.eslint-rules/overrides",
    // ensure that you don't add custom rules
    // without taking permission from team leads.
    "./.eslint-rules/custom",
    // custom rules cannot override the following rules.
    "./.eslint-rules/imports/enforced",
    "./.eslint-rules/react",
    "./.eslint-rules/promise",
    "prettier",
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
  parser: "@babel/eslint-parser",
  plugins: [
    "react",
    "react-native",
    // "jest",
    "import",
    "react-hooks",
    "@bigbinary/neeto",
    "unused-imports",
    "promise",
    "prettier",
  ],
  rules: {
    "@bigbinary/neeto/no-dangling-constants": 2,
    "@bigbinary/neeto/no-redundant-string-templates": 2,
    // "@bigbinary/neeto/use-constant-case": 2,
    "react-hooks/exhaustive-deps": "warn",
    "import/no-unresolved": 2,
    "promise/prefer-await-to-then": 2,
    "promise/no-nesting": 2,
    "promise/prefer-await-to-callbacks": 2,
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "ignore" },
    ],
    "react/prop-types": ["error", { ignore: ["navigation", "theme"] }],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 1,
    "react-native/no-inline-styles": 1,
    "react-native/no-raw-text": [
      "error",
      {
        skip: [
          "Typography",
          "Typography.Typography",
          "Typography.Typography.Typography",
          "Typography.Typography.Typography.Typography",
        ],
      },
    ],
    "react-native/no-single-element-style-arrays": 1,
    "require-await": 2,
    "import/no-anonymous-default-export": 2,
    // auto-fixable: Respect all Prettier rules and apply it.
    "prettier/prettier": "error",
    // not-auto-fixable: No unused variables allowed.
    "no-unused-vars": [
      "error",
      {
        args: "all",
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        caughtErrors: "all",
      },
    ],
    // not-auto-fixable: No undefined variables allowed.
    "no-undef": "error",
    // not-auto-fixable: Dont use console statements. Use logger which babel will remove during bundling.
    "no-console": "error",
    // not-auto-fixable: require `return` statements to either always or never specify values.
    "consistent-return": "error",
    // auto-fixable: sadly this doesn't support guard clauses yet.
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "if", next: ["if", "return"] },
      // The newline-before-return rule is deprecated in favor of the following:
      { blankLine: "always", prev: "*", next: "return" },
      // Add newline between function declarations
      {
        blankLine: "always",
        prev: [
          "block",
          "multiline-block-like",
          "function",
          "iife",
          "multiline-const",
          "multiline-expression",
        ],
        next: ["function", "iife", "multiline-const", "multiline-expression"],
      },
    ],
    // auto-fixable: Single line statements needn't have any braces. But in all other cases enforce curly braces.
    curly: ["error", "multi-line"],
    // auto-fixable: Remove the else part, if the "if" or "else-if" chain has a return statement
    "no-else-return": "error",
    // not-auto-fixable: Prevent un-sanitized dangerouslySetInnerHTML.
    // auto-fixable: Requires trailing commas when the last element or property is in a different line than the closing ] or }
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    // auto-fixable: If a variable is never reassigned, using the const declaration is better.
    "prefer-const": "error",
    // auto-fixable: It is considered good practice to use the type-safe equality operators === and !==.
    eqeqeq: "error",
    // not-auto-fixable: Rule flags optional chaining expressions in positions where short-circuiting to undefined causes throwing a TypeError afterward.
    "no-unsafe-optional-chaining": "error",
    // auto-fixable: Remove all unused imports.
    "unused-imports/no-unused-imports": "error",
    // auto-fixable-1-level-deep: Using nested ternary operators make the code unreadable. Use if/else or switch with if/else. If it's JSX then move it out into a function or a variable. It's fine to use nestedTernary in JSX when it makes code more readable.
    "no-nested-ternary": "warn",
    // auto-fixable: Enforces no braces where they can be omitted.
    "arrow-body-style": ["error", "as-needed"],
    // auto-fixable: Suggests using template literals instead of string concatenation.
    "prefer-template": "error",
    // auto-fixable: Disallows ternary operators when simpler alternatives exist.
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    // auto-fixable: Partially fixable. Prefer {x} over {x: x}.
    "object-shorthand": [
      "error",
      "always",
      { avoidQuotes: true, ignoreConstructors: true },
    ],
    // auto-fixable: Partially fixable. Unless there's a need to the this keyword, there's no advantage of using a plain function.
    "prefer-arrow-callback": ["error", { allowUnboundThis: true }],
    // not-auto-fixable: Convert multiple imports from same module into a single import.
    "no-duplicate-imports": ["error", { includeExports: true }],
    // auto-fixable: Partially fixable. In JavaScript, there are a lot of different ways to convert value types. Allow only readable coercions.
    "no-implicit-coercion": ["error", { allow: ["!!"] }],
    // auto-fixable: Require let or const instead of var.
    "no-var": "error",
    // auto-fixable: This rule conflicts with prettier rules. Thus we've NOT kept this rule in react file. This rule ensures we don't add blank lines in JSX.
    "react/jsx-newline": ["error", { prevent: true }],
  },
};
