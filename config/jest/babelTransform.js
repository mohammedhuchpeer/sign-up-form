const babelJest = require("babel-jest");

module.exports = babelJest.createTransformer({
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 2 versions"],
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  plugins: [
    ["@babel/plugin-transform-destructuring"],
    ["@babel/plugin-transform-runtime"],
    ["@babel/plugin-syntax-dynamic-import"],
    ["@babel/plugin-styled-components", { ssr: false, displayName: false }],
  ],
  babelrc: false,
  configFile: false,
});
