import { dew as _pathDew } from "path";
import { dew as _assertDew } from "assert";
import { dew as _yargsDew } from "yargs";
import { dew as _gracefulFsDew } from "graceful-fs";
import { dew as _serverDew } from "./server";
import { dew as _helperDew } from "./helper";
import { dew as _constantsDew } from "./constants";
import { dew as _runnerDew } from "./runner";
import { dew as _stopperDew } from "./stopper";
import { dew as _initDew } from "./init";
import { dew as _completionDew } from "./completion";
import { dew as _processDew } from "process";
import { dew as _moduleDew } from "module";
var exports = {};
var _nodeRequire = function () {
  var Module = _moduleDew().Module;
  if (Module) {
    var m = new Module("");
    m.filename = import.meta.url.substr(7 + (Module._nodeModulePaths("/")[0].length > 13));
    m.paths = Module._nodeModulePaths(m.filename.substr(0, m.filename.lastIndexOf("/")));
    return m.require.bind(m);
  } else {
    return function _nodeRequire(id) {
      var e = new Error("Cannot find module '" + id + "'");
      e.code = "MODULE_NOT_FOUND";
      throw e;
    };
  }
}();
var process = _processDew();
const path = _pathDew();
const assert = _assertDew();
const yargs = _yargsDew();
const fs = _gracefulFsDew();
const Server = _serverDew();
const helper = _helperDew();
const constant = _constantsDew();
function processArgs(argv, options, fs, path) {
  // TODO(vojta): warn/throw when unknown argument (probably mispelled)
  Object.getOwnPropertyNames(argv).forEach(function (name) {
    let argumentValue = argv[name];
    if (name !== "_" && name !== "$0") {
      assert(!name.includes("_"), `Bad argument: ${name} did you mean ${name.replace("_", "-")}`);
      if (Array.isArray(argumentValue)) {
        argumentValue = argumentValue.pop(); // If the same argument is defined multiple times, override.
      }

      options[helper.dashToCamel(name)] = argumentValue;
    }
  });
  if (helper.isString(options.autoWatch)) {
    options.autoWatch = options.autoWatch === "true";
  }
  if (helper.isString(options.colors)) {
    options.colors = options.colors === "true";
  }
  if (helper.isString(options.failOnEmptyTestSuite)) {
    options.failOnEmptyTestSuite = options.failOnEmptyTestSuite === "true";
  }
  if (helper.isString(options.failOnFailingTestSuite)) {
    options.failOnFailingTestSuite = options.failOnFailingTestSuite === "true";
  }
  if (helper.isString(options.formatError)) {
    let required;
    try {
      required = _nodeRequire(options.formatError);
    } catch (err) {
      console.error("Could not require formatError: " + options.formatError, err);
    }
    // support exports.formatError and module.exports = function
    options.formatError = required.formatError || required;
    if (!helper.isFunction(options.formatError)) {
      console.error(`Format error must be a function, got: ${typeof options.formatError}`);
      process.exit(1);
    }
  }
  if (helper.isString(options.logLevel)) {
    const logConstant = constant["LOG_" + options.logLevel.toUpperCase()];
    if (helper.isDefined(logConstant)) {
      options.logLevel = logConstant;
    } else {
      console.error("Log level must be one of disable, error, warn, info, or debug.");
      process.exit(1);
    }
  } else if (helper.isDefined(options.logLevel)) {
    console.error("Log level must be one of disable, error, warn, info, or debug.");
    process.exit(1);
  }
  if (helper.isString(options.singleRun)) {
    options.singleRun = options.singleRun === "true";
  }
  if (helper.isString(options.browsers)) {
    options.browsers = options.browsers.split(",");
  }
  if (options.reportSlowerThan === false) {
    options.reportSlowerThan = 0;
  }
  if (helper.isString(options.reporters)) {
    options.reporters = options.reporters.split(",");
  }
  if (helper.isString(options.removedFiles)) {
    options.removedFiles = options.removedFiles.split(",");
  }
  if (helper.isString(options.addedFiles)) {
    options.addedFiles = options.addedFiles.split(",");
  }
  if (helper.isString(options.changedFiles)) {
    options.changedFiles = options.changedFiles.split(",");
  }
  if (helper.isString(options.refresh)) {
    options.refresh = options.refresh === "true";
  }
  let configFile = argv._.shift();
  if (!configFile) {
    // default config file (if exists)
    if (fs.existsSync("./karma.conf.js")) {
      configFile = "./karma.conf.js";
    } else if (fs.existsSync("./karma.conf.coffee")) {
      configFile = "./karma.conf.coffee";
    } else if (fs.existsSync("./karma.conf.ts")) {
      configFile = "./karma.conf.ts";
    } else if (fs.existsSync("./.config/karma.conf.js")) {
      configFile = "./.config/karma.conf.js";
    } else if (fs.existsSync("./.config/karma.conf.coffee")) {
      configFile = "./.config/karma.conf.coffee";
    } else if (fs.existsSync("./.config/karma.conf.ts")) {
      configFile = "./.config/karma.conf.ts";
    }
  }
  options.configFile = configFile ? path.resolve(configFile) : null;
  if (options.cmd === "run") {
    options.clientArgs = parseClientArgs(process.argv);
  }
  return options;
}
function parseClientArgs(argv) {
  // extract any args after '--' as clientArgs
  let clientArgs = [];
  argv = argv.slice(2);
  const idx = argv.indexOf("--");
  if (idx !== -1) {
    clientArgs = argv.slice(idx + 1);
  }
  return clientArgs;
}

// return only args that occur before `--`
function argsBeforeDoubleDash(argv) {
  const idx = argv.indexOf("--");
  return idx === -1 ? argv : argv.slice(0, idx);
}
function describeRoot() {
  return yargs.usage("Karma - Spectacular Test Runner for JavaScript.\n\n" + "Run --help with particular command to see its description and available options.\n\n" + "Usage:\n" + "  $0 <command>").command("init", "Initialize a config file.", describeInit).command("start", "Start the server / do a single run.", describeStart).command("run", "Trigger a test run.", describeRun).command("stop", "Stop the server.", describeStop).command("completion", "Shell completion for karma.", describeCompletion).demandCommand(1, "Command not specified.").strictCommands().describe("help", "Print usage and options.").describe("version", "Print current version.");
}
function describeInit(yargs) {
  yargs.usage("Karma - Spectacular Test Runner for JavaScript.\n\n" + "INIT - Initialize a config file.\n\n" + "Usage:\n" + "  $0 init [configFile]").strictCommands(false).version(false).describe("log-level", "<disable | error | warn | info | debug> Level of logging.").describe("colors", "Use colors when reporting and printing logs.").describe("no-colors", "Do not use colors when reporting or printing logs.");
}
function describeStart(yargs) {
  yargs.usage("Karma - Spectacular Test Runner for JavaScript.\n\n" + "START - Start the server / do a single run.\n\n" + "Usage:\n" + "  $0 start [configFile]").strictCommands(false).version(false).describe("port", "<integer> Port where the server is running.").describe("auto-watch", "Auto watch source files and run on change.").describe("detached", "Detach the server.").describe("no-auto-watch", "Do not watch source files.").describe("log-level", "<disable | error | warn | info | debug> Level of logging.").describe("colors", "Use colors when reporting and printing logs.").describe("no-colors", "Do not use colors when reporting or printing logs.").describe("reporters", "List of reporters (available: dots, progress, junit, growl, coverage).").describe("browsers", "List of browsers to start (eg. --browsers Chrome,ChromeCanary,Firefox).").describe("capture-timeout", "<integer> Kill browser if does not capture in given time [ms].").describe("single-run", "Run the test when browsers captured and exit.").describe("no-single-run", "Disable single-run.").describe("report-slower-than", "<integer> Report tests that are slower than given time [ms].").describe("fail-on-empty-test-suite", "Fail on empty test suite.").describe("no-fail-on-empty-test-suite", "Do not fail on empty test suite.").describe("fail-on-failing-test-suite", "Fail on failing test suite.").describe("no-fail-on-failing-test-suite", "Do not fail on failing test suite.");
}
function describeRun(yargs) {
  yargs.usage("Karma - Spectacular Test Runner for JavaScript.\n\n" + "RUN - Run the tests (requires running server).\n\n" + "Usage:\n" + "  $0 run [configFile] [-- <clientArgs>]").strictCommands(false).version(false).describe("port", "<integer> Port where the server is listening.").describe("no-refresh", "Do not re-glob all the patterns.").describe("fail-on-empty-test-suite", "Fail on empty test suite.").describe("no-fail-on-empty-test-suite", "Do not fail on empty test suite.").describe("log-level", "<disable | error | warn | info | debug> Level of logging.").describe("colors", "Use colors when reporting and printing logs.").describe("no-colors", "Do not use colors when reporting or printing logs.");
}
function describeStop(yargs) {
  yargs.usage("Karma - Spectacular Test Runner for JavaScript.\n\n" + "STOP - Stop the server (requires running server).\n\n" + "Usage:\n" + "  $0 stop [configFile]").strictCommands(false).version(false).describe("port", "<integer> Port where the server is listening.").describe("log-level", "<disable | error | warn | info | debug> Level of logging.");
}
function describeCompletion(yargs) {
  yargs.usage("Karma - Spectacular Test Runner for JavaScript.\n\n" + "COMPLETION - Bash/ZSH completion for karma.\n\n" + "Installation:\n" + "  $0 completion >> ~/.bashrc").strictCommands(false).version(false);
}
function printRunnerProgress(data) {
  process.stdout.write(data);
}
exports.process = () => {
  const argv = describeRoot().parse(argsBeforeDoubleDash(process.argv.slice(2)));
  return processArgs(argv, {
    cmd: argv._.shift()
  }, fs, path);
};
exports.run = () => {
  const config = exports.process();
  switch (config.cmd) {
    case "start":
      new Server(config).start();
      break;
    case "run":
      _runnerDew().run(config).on("progress", printRunnerProgress);
      break;
    case "stop":
      _stopperDew().stop(config);
      break;
    case "init":
      _initDew().init(config);
      break;
    case "completion":
      _completionDew().completion(config);
      break;
  }
};

// just for testing
exports.processArgs = processArgs;
exports.parseClientArgs = parseClientArgs;
exports.argsBeforeDoubleDash = argsBeforeDoubleDash;
export default exports;
const _process2 = exports.process;
export { _process2 as process };