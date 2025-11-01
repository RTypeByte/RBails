const chalk = require("chalk");

console.log(chalk.magentaBright.bold("\nMod Baileys Sockets\n"));
console.log(chalk.whiteBright("Thanks for using Mod Baileys Sockets from RadzzOff"));
console.log(chalk.cyan("Telegram: ") + chalk.greenBright("@Archive_KemenhanID"));
console.log(chalk.gray("------------------------------\n"));
 
import makeWASocket from './Socket/index.js';
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map