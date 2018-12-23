const program = require("commander");

program.parse(process.argv);
const filePath = program.args[0];
console.log(filePath);