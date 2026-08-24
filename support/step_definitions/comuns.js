const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { limparCarrinho, irParaCarrinho, irParaListagemProdutos } = require("../helpers");

Given("que estou na pagina de produtos", () => {
  cy.visit("/shop-left-bar");
});

Given("que estou na pagina inicial", () => {
  cy.visit("/");
});

Given("que estou na pagina de detalhes de um produto", () => {
  cy.visit("/product-details-one/1");
});

Given("que adicionei um produto ao carrinho", () => {
  limparCarrinho();
  irParaListagemProdutos();
  cy.get(".product_wrappers_one .add-to-cart").first().click({ force: true });
});

Given("que tenho um produto no carrinho", () => {
  limparCarrinho();
  irParaListagemProdutos();
  cy.get(".product_wrappers_one .add-to-cart").first().click({ force: true });
});

When("acesso o carrinho", () => {
  irParaCarrinho();
});

When("deixo o campo nome vazio", () => {
  cy.url().then((url) => {
    if (url.includes("/checkout-one")) {
      cy.get("#fname").clear();
      cy.wrap("nome").as("campoAlterado");
    } else {
      cy.get("#user").clear();
    }
  });
});

When("deixo o campo senha vazio", () => {
  cy.get("#password").clear();
});

When("informo um email em formato invalido", () => {
  cy.url().then((url) => {
    if (url.includes("/register")) {
      cy.get("#email").clear().type("email-invalido");
      cy.wrap("email").as("campoAlterado");
    } else {
      cy.get("#user").clear().type("email-invalido");
    }
  });
});

When("deixo o campo email vazio", () => {
  cy.url().then((url) => {
    if (url.includes("/login")) {
      cy.get("#user").clear();
    } else {
      cy.get("#email").clear();
    }
  });
});

Then("o sistema deve informar que o email e obrigatorio", () => {
  cy.url().then((url) => {
    if (url.includes("/login")) {
      cy.contains(".invalid_input", "E-mail inválido.").should("be.visible");
    } else if (url.includes("/register")) {
      cy.contains(".errorLabel", "O campo e-mail deve ser prenchido corretamente").should("be.visible");
    } else {
      cy.contains(".errorLabel", "O campo E-mail deve ser prenchido ou é inválido").should("be.visible");
    }
  });
});

Then("o sistema deve informar que a senha e obrigatoria", () => {
  cy.url().then((url) => {
    if (url.includes("/login")) {
      cy.contains(".invalid_input", "Senha inválida.").should("be.visible");
    } else {
      cy.contains(".errorLabel", "O campo senha deve ter pelo menos 6 dígitos").should("be.visible");
    }
  });
});

Then("o sistema deve informar que o email e invalido", () => {
  cy.url().then((url) => {
    if (url.includes("/login")) {
      cy.contains(".invalid_input", "E-mail inválido.").should("be.visible");
    } else {
      cy.contains(".errorLabel", "O campo e-mail deve ser prenchido corretamente").should("be.visible");
    }
  });
});
