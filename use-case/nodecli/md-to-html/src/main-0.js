const program = require("commander");
const fs = require("fs");
const marked = require("marked"); // markedパッケージを読み込む

program.parse(process.argv);
const filePath = program.args[0];

fs.readFile(filePath, "utf8", (err, file) => {
    if (err) {
        console.error(err);
        process.exit(err.code);
        return;
    }
    console.log(file);
});
