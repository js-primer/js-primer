const program = require("commander");
const fs = require("fs");
const marked = require("marked");

program
    .option("--gfm", "GFMを有効にする")
    .option("-S, --sanitize", "サニタイズを行う");

program.parse(process.argv);
const filePath = program.args[0];

const markedOptions = {
    gfm: false,
    sanitize: false,
    ...program.opts()
};

fs.readFile(filePath, "utf8", (err, file) => {
    if (err) {
        console.error(err);
        process.exit(err.code);
        return;
    }
    const html = marked(file, {
        gfm: markedOptions.gfm,
        sanitize: markedOptions.sanitize
    });
    console.log(html);
});
