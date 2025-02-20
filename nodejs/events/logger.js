const fs = require("fs");
const os = require("os");

const EventEmitter = require("events"); // This is a class

class Logger extends EventEmitter {
  log(message) {
    this.emit("smee", { message });
  }
}

const logger = new Logger();
const logFile = "./eventlog.txt";

const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message} \n`;
  fs.appendFileSync(logFile, logMessage);
};

logger.on("smee", logToFile);

logger.log("hi");

setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Current memory usage: ${memoryUsage.toFixed(2)}`);
}, 3000);
