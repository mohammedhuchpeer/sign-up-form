const path = require("path");
const webpack = require("webpack");
const resolve = require("resolve");
const PnpWebpackPlugin = require("pnp-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin"); //
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const ModuleScopePlugin = require("react-dev-utils/ModuleNotFoundPlugin");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const ModuleNotFoundPlugin = require("react-dev-utils/ModuleNotFoundPlugin");
const ForkTsCheckerWebpackPlugin = require("react-dev-utils/ForkTsCheckerWarningWebpackPlugin");
const paths = require("./paths");
const modules = require("./modules");
const getClientEnvironment = require("./env");
const ESlintWebpackPlugin = require("eslint-webpack-plugin");

const publicUrl = "";
const publicPath = "/";

const env = getClientEnvironment(publicUrl);

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module.css$/;

const hasJsxRuntime = (() => {
  if (process.env.DISABLE_NEW_JSX_TRANSFER === "true") {
    return false;
  }

  try {
    require.resolve("react/jsx-runtime");
    return true;
  } catch (e) {
    return false;
  }
})();

const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    require.resolve("style-loader"),
    { loader: require.resolve("css-loader"), options: cssOptions },
  ];

  if (preProcessor) {
    loaders.push(require.resolve(preProcessor));
  }

  return loaders;
};

/***
 * This is the development configuration
 * It is focused on the developer experience and fast rebuils
 * The production configuration is different and lives in the separate file.
 */
module.exports = {
  mode: "development",
  bail: false,
  devtool: "cheap-module-source-map",
  entry: [
    require.resolve("@babel/polyfill"),
    require.resolve("react-dev-utils/webpackHotDevClient"),
    paths.appStagingJs,
  ],
  output: {
    path: "/",
    pathinfo: true,
    filename: "static/js/bundle.js",
    chunkFileName: "static/js/[name].chunk.js",
    publicPath,
    devtoolModuleFileNameTemplate: (info) =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, "/"),
  },
  resolve: {
    modules: ["node_modules", paths.appNodeModules].concat(
      modules.additionalModulePaths || []
    ),
    extensions: [
      ".ts",
      ".tsx",
      ".web.js",
      ".mjs",
      ".js",
      ".json",
      ".web.jsx",
      ".jsx",
    ],
    alias: {
      src: path.resolve(__dirname, "../src/"),
      _components: path.resolve(__dirname, "../src/components"),
      _containers: path.resolve(__dirname, "../src/containers"),
      _views: path.resolve(__dirname, "../src/views"),
      _contexts: path.resolve(__dirname, "../src/contexts"),
      _helpers: path.resolve(__dirname, "../src/helpers"),
      _hooks: path.resolve(__dirname, "../src/hooks"),
      _utils: path.resolve(__dirname, "../src/utils"),
      _layout: path.resolve(__dirname, "../src/layout"),
    },
    plugins: [
      PnpWebpackPlugin,
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    ],
  },
  resovleLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpg$/, /\.png$/],
            loader: require.resolve("url-loader"),
            options: {
              limit: 10000,
              name: "static/media/[name].[hash:8].[ext]",
            },
          },

          //Process appkication with JS with Babel
          //The preset includes JSX, Flow, Typscript and some ESnext features

          {
            test: /\.(ts|tsx|js|jsx|mjs)$/,
            include: paths.appSrc,
            use: [
              {
                loader: require.resolve("babel-loader"),
                options: {
                  babelrc: false,
                  presets: [
                    [
                      "@babel/preset-env",
                      {
                        useBuiltIns: "entry",
                        targets: {
                          node: "current",
                        },
                        module: false,
                        corejs: 3,
                        exclude: ["transform-typeof-symbol"],
                      },
                    ],
                    "@babel/preset-react",
                  ],
                  plugins: [
                    ["@babel/plugin-transform-destructuring"],
                    ["@babel/plugin-transform-runtime"],
                    ["@babel/plugin-syntax-dynamic-import"],
                    "babel-plugin-styled-components",
                  ],
                },
              },
              {
                loader: "ts-loader",
                options: {
                  transpileOnly: true,
                  experimentalWatchApi: true,
                  happPackMode: true,
                },
              },
            ],
            exclude: /node_modules/,
          },

          {
            test: cssRegex,
            exclude: cssModuleRegex,
            use: getStyleLoaders({ importLoaders: 1 }),
          },

          {
            test: cssModuleRegex,
            use: getStyleLoaders({
              importLoaders: 1,
              modules: true,
              getLocalIdent: getCSSModuleLocalIdent,
            }),
          },

          {
            exclude: [
              /\.(ts|tsx|js|jsx|mjs)$/,
              /\.html$/,
              /\.json$/,
              /\.(css|less)$/,
            ],
            loader: require.resolve("file-loader"),
            options: {
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: false,
    removeAvailableModules: false,
    removeEmptyChuncks: false,
    splitChunks: false,
    moduleIds: "named",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new ModuleNotFoundPlugin(path.appPath),
    new webpack.DefinePlugin(env.stringified),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WebpackManifestPlugin({
      fileName: "asset-manifest.json",
      publicPath,
      generate: (seed, files) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);

        return {
          files: manifestFiles,
        };
      },
    }),

    new ForkTsCheckerWebpackPlugin({
      typescript: {
        typescriptPath: resolve.sync("typescript", {
          basedir: paths.appNodeModules,
        }),
        mode: "write-references",
        dianosticOptions: {
          syntactic: true,
          semantic: true,
        },
        configFile: paths.appTsConfig,
      },
      async: true,
      issue: {
        exclude: [
          { file: "**/__tests__/**" },
          { file: "**/?(*.)(spec|test).*" },
          { file: "**/src/setUpProxy.*" },
          { file: "**/src/setUpTests.*" },
        ],
      },
      logger: {
        infrastructure: "silent",
      },
      formatter: undefined,
    }),

    new ESlintWebpackPlugin({
      formatter: require.resolve("react-dev-utils/eslintFormatter"),
      eslintPath: require.resolve("eslint"),
      ignore: false,
      useEslintrc: true,
    }),

    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),

    new webpack.DefinePlugin(env.stringified),
  ],
  node: false,
  performance: false,
  target: "web",
  cache: {
    type: "filesystem",
    cacheDirectory: path.resolve(".cache-loader"),
  },
};
