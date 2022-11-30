module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  rules: {
    semi: "error",
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
  },
  env: {
    browser: true,
    node: true,
  },
};
