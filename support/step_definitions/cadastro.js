const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que estou na pagina de cadastro", () => {
  cy.visit("/register");
  cy.wrap("").as("campoAlterado");
});

Then("o sistema deve informar que o nome e obrigatorio", () => {
  cy.contains(".errorLabel", "O campo nome deve ser prenchido").should("be.visible");
});

When("preencho email e senha com dados validos", () => {
  cy.get("#email").clear().type("novo.usuario@qazando.com");
  cy.get("#password").clear().type("senha123");
});

When("clico em Cadastrar", () => {
  cy.get("#btnRegister").click();
});

When("preencho nome e senha com dados validos", () => {
  cy.get("#user").clear().type("Usuario Teste");
  cy.get("#password").clear().type("senha123");
});

When("preencho nome e email com dados validos", () => {
  cy.get("#user").clear().type("Usuario Teste");
  cy.get("#email").clear().type("novo.usuario@qazando.com");
});

When("nao informo o nome", () => {
  cy.get("#user").clear();
  cy.wrap("nome").as("campoAlterado");
});

When("preencho os demais campos corretamente", () => {
  cy.get("@campoAlterado").then((campoAlterado) => {
    if (campoAlterado !== "nome") {
      cy.get("#user").clear().type("Usuario Teste");
    }
    if (campoAlterado !== "email") {
      cy.get("#email").clear().type("novo.usuario@qazando.com");
    }
    if (campoAlterado !== "senha") {
      cy.get("#password").clear().type("senha123");
    }
  });
});

When("informo uma senha fora das regras da aplicacao", () => {
  cy.get("#password").clear().type("123");
  cy.wrap("senha").as("campoAlterado");
});

When("preencho todos os campos com dados validos", () => {
  cy.get("#user").clear().type("Usuario Teste");
  cy.get("#email").clear().type("novo.usuario@qazando.com");
  cy.get("#password").clear().type("senha123");
});

When("deixo todos os campos obrigatorios vazios", () => {
  cy.get("#user").clear();
  cy.get("#email").clear();
  cy.get("#password").clear();
});

When("preencho os campos com dados validos", () => {
  cy.get("#user").clear().type("Usuario Teste");
  cy.get("#email").clear().type("novo.usuario@qazando.com");
  cy.get("#password").clear().type("senha123");
});

When("informo dados invalidos no cadastro", () => {
  cy.get("#user").clear();
  cy.get("#email").clear().type("email-invalido");
  cy.get("#password").clear().type("123");
});

Then("o sistema deve apresentar uma mensagem de obrigatoriedade para o nome", () => {
  cy.contains(".errorLabel", "O campo nome deve ser prenchido").should("be.visible");
});

Then("o sistema deve apresentar uma mensagem de validacao para a senha", () => {
  cy.contains(".errorLabel", "O campo senha deve ter pelo menos 6 dígitos").should("be.visible");
});

Then("o cadastro deve ser realizado com sucesso", () => {
  cy.contains(".swal2-popup", "Cadastro realizado!").should("be.visible");
  cy.url().should("include", "/my-account");
});

Then("o sistema deve apresentar as validacoes de campos obrigatorios", () => {
  cy.contains(".errorLabel", "O campo nome deve ser prenchido").should("be.visible");
});

Then("o sistema deve apresentar mensagem de sucesso ou redirecionar corretamente", () => {
  cy.contains(".swal2-popup", "Cadastro realizado!").should("be.visible");
  cy.url().should("include", "/my-account");
});

Then("o sistema deve apresentar uma mensagem de erro correspondente a validacao", () => {
  cy.get(".errorLabel").should("be.visible");
});
