module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ],
  rules: {
    "no-multiple-empty-lines": ["error", { "max": 2, "maxBOF": 2, "maxEOF": 0 }],
    "eol-last": 2,
  },
  env: {
    browser: true,
  }
};
