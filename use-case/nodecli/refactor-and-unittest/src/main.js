const program = require("commander");
const fs = require("fs");
const md2html = require("./md2html");

program
    .option("--gfm", "GFMを有効にする")
    .option("-S, --sanitize", "サニタイズを行う");

program.parse(process.argv);
const filePath = program.args[0];

fs.readFile(filePath, "utf8", (err, file) => {
    if (err) {
        console.error(err);
        process.exit(err.code);
        return;
    }
    const html = md2html(file, program.opts());
    console.log(html);
});
