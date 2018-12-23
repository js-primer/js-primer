// MIT © 2018 azu
"use strict";
/**
 * TODOアイテムを追加
 * @param {string} title
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
 */
const addNewTodo = (title) => {
    cy.get("#js-form-input").type(title);
    return cy.get("#js-form").submit();
};

module.exports.addNewTodo = addNewTodo;
