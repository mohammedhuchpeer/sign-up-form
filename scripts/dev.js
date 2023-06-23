process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

process.on("unhandledRejection", (error) => {
  throw error;
});

const fs = require("fs");
const chalk = require("chalk");
const webpack = require("webpack");

const clearConsole = require("react-dev-utils/clearConsole");
const checkRequiredFiles = require("react-dev-utils/checkRequiredFiles");
const {
  choosePort,
  createCompiler,
  prepareProxy,
  prepareUrls,
} = require("react-dev-utils/WebpackDevServerUtils");
const openBrowser = require("react-dev-utils/openBrowser");
const { checkBrowsers } = require("react-dev-utils/browsersHelper");
const paths = require("../config/paths");
const config = require("../config/webpack.config.dev");
const createDevServerConfig = require("../config/webpackDevServer.config");
const WebpackDevServer = require("webpack-dev-server");

const useYarn = fs.existsSync(paths.yarnLockFile);
const isInteractive = process.stdout.isTTY;

if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

const HOST = process.env.HOST || "0.0.0.0";
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;

if (process.env.HOST) {
  console.log(
    chalk.cyan(
      `Attempting to bind to HOST environment variable: ${chalk.yellow(
        chalk.bold(HOST)
      )}`
    )
  );
  console.log(
    `If this was unintentional, check that you haven't mistakenly set it in your shell.`
  );
  console.log(`Learn more here: ${chalk.yellow("http://bit.ly/2mwWSmH")}`);
}

checkBrowsers(paths.appPath, isInteractive).then(() =>
  choosePort(HOST, DEFAULT_PORT)
    .then((port) => {
      if (port === null) {
        return;
      }

      const protocol = process.env.HTTPS === "true" ? "https" : "http";
      const { name: appName } = require(paths.appPackageJson);
      const useTypeScript = fs.existsSync(paths.appTsConfig);
      const urls = prepareUrls(protocol, HOST, port);
      const proxySetting = require(paths.appPackageJson).proxy;
      const proxyConfig = prepareProxy(proxySetting, paths.appPublic);
      const serverConfig = createDevServerConfig(
        proxyConfig,
        urls.lanUrlForConfig
      );
      const devSocket = {
        warnings: (warnings) =>
          devServer.sockWrite(devServer.sockets, "warnings", warnings),
        errors: (errors) =>
          devServer.sockWrite(devServer.sockets, "errors", errors),
      };
      const compiler = createCompiler(
        appName,
        config,
        devSocket,
        urls,
        useYarn,
        useTypeScript,
        webpack
      );
      const devServer = new WebpackDevServer(compiler, serverConfig);
      devServer.listen(port, HOST, (error) => {
        if (error) {
          return console.log(error);
        }
        if (isInteractive) {
          clearConsole();
        }
        if (process.env.NODE_PATH) {
          console.log(
            chalk.yellow(
              "Setting NODE_PATH to resolve modules absolutely has been deprecated in favor of setting baseURL in jsconfig.json(or tsconfig.json if are you are using TypeScript) and will be removed in a future major release of create-react-app."
            )
          );
        }
        console.log(chalk.cyan("Starting the development server....\n"));
        openBrowser(urls.localUrlForBrowser);
      });
      const signals = ["SIGINT", "SIGTERM"];
      signals.forEach((sign) => {
        process.on(sign, () => {
          devServer.close();
          process.exit();
        });
      });
    })
    .catch((error) => {
      if (error && error.message) {
        console.log(error.message);
      }
      process.exit(1);
    })
);
