const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que estou na pagina de login", () => {
  cy.visit("/login");
});

When("informo um email valido", () => {
  cy.get("#user").clear().type("usuario.teste@qazando.com");
});

When("informo uma senha valida", () => {
  cy.get("#password").clear().type("senha123");
});

When("clico em Entrar", () => {
  cy.get("#btnLogin").click();
});

When("informo uma senha invalida", () => {
  cy.get("#password").clear().type("123");
});

When("deixo os campos email e senha vazios", () => {
  cy.get("#user").clear();
  cy.get("#password").clear();
});

When("informo credenciais validas", () => {
  cy.get("#user").clear().type("usuario.teste@qazando.com");
  cy.get("#password").clear().type("senha123");
});

When("informo credenciais invalidas", () => {
  cy.get("#user").clear().type("email-invalido");
  cy.get("#password").clear().type("123");
});

Then("o usuario deve ser autenticado com sucesso", () => {
  cy.contains(".swal2-popup", "Login realizado").should("be.visible");
  cy.url().should("include", "/my-account");
});

Then("o sistema deve permitir o acesso", () => {
  cy.contains(".swal2-popup", "Login realizado").should("be.visible");
  cy.url().should("include", "/my-account");
});

Then("o login deve ser recusado", () => {
  cy.contains(".invalid_input", "Senha inválida.").should("be.visible");
  cy.url().should("include", "/login");
});

Then("uma mensagem de erro deve ser apresentada", () => {
  cy.get(".invalid_input").should("be.visible");
});

Then("o sistema deve apresentar as validacoes dos campos obrigatorios", () => {
  cy.contains(".invalid_input", "E-mail inválido.").should("be.visible");
});

Then("o sistema deve apresentar a confirmacao de login", () => {
  cy.contains(".swal2-popup", "Login realizado").should("be.visible");
});

Then("uma mensagem de erro deve ser apresentada ao usuario", () => {
  cy.get(".invalid_input").should("be.visible");
});

Then("o sistema deve apresentar mensagem de sucesso", () => {
  cy.contains(".swal2-popup", "Login realizado").should("be.visible");
});
