const marked = require("marked");

module.exports = (markdown, options = {}) => {
    const markedOptions = {
        gfm: false,
        sanitize: false,
        ...options,
    };

    return marked(markdown, {
        gfm: markedOptions.gfm,
        sanitize: markedOptions.sanitize
    });
};
