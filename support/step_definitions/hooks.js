const { Before } = require("@badeball/cypress-cucumber-preprocessor");

Before(() => {
  cy.clearLocalStorage();
  cy.clearCookies();
});
