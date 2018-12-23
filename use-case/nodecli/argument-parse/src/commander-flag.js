const program = require("commander");
program.option("--foo");
program.parse(process.argv);
const options = program.opts();
console.log(options.foo);
