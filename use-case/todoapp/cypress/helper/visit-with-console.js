// MIT © 2018 azu
"use strict";
/**
 * @param {string} URL
 * @returns {Promise<{ window: Window, logSpy: *}>}
 */
exports.visitWithConsole = (URL) => {
    let logSpy;
    return cy.visit(URL, {
        onBeforeLoad: (win) => {
            logSpy = cy.spy(win.console, "log").as("log");
        }
    }).then(win => {
        return {
            window: win,
            logSpy: logSpy
        };
    });
};
