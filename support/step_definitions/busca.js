const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que estou em uma categoria de produtos", () => {
  cy.visit("/shop-left-bar");
  cy.contains(".shop_sidebar_boxed label.custom_boxed", "T-shirts").click();
});

When("abro a busca e informo um produto inexistente", () => {
  cy.get("a.search_width").first().click();
  cy.get("#search input[type='search']").type("produtoxyzinexistente123");
});

When("executo a busca", () => {
  cy.get("#search button[type='submit']").click();
});

When("abro a busca e informo o nome de um produto existente", () => {
  cy.get("a.search_width").first().click();
  cy.get("#search input[type='search']").type("T-Shirt For Men");
});

When("abro a busca", () => {
  cy.get("a.search_width").first().click();
});

When("fecho a aba ou campo de busca", () => {
  cy.get("#search button.close").click();
});

When("abro a busca e informo o nome de um produto", () => {
  cy.get("a.search_width").first().click();
  cy.get("#search input[type='search']").type("camisa");
});

When("abro a busca e nao informo nenhum termo", () => {
  cy.get("a.search_width").first().click();
});

When("abro a busca e informo apenas numeros", () => {
  cy.get("a.search_width").first().click();
  cy.get("#search input[type='search']").type("12345");
});

When("pesquiso por um termo sem correspondencias", () => {
  cy.get("a.search_width").first().click();
  cy.get("#search input[type='search']").type("zzznaoexiste");
  cy.get("#search button[type='submit']").click();
});

When("executo uma busca sem termo", () => {
  cy.get("a.search_width").first().click();
  cy.get("#search button[type='submit']").click();
});

Then("deve ser exibida mensagem informando que nao ha produtos para a busca", () => {
  cy.contains(".swal2-popup", "Check out the Results").should("be.visible");
});

Then("o produto correspondente deve ser exibido", () => {
  cy.url().should("include", "/shop");
});

Then("a area de busca deve ser fechada corretamente", () => {
  cy.get("#search").should("have.css", "opacity", "0");
});

Then("os resultados devem corresponder a busca realizada dentro da categoria", () => {
  cy.url().should("include", "/shop");
});

Then("o sistema deve impedir a busca vazia ou apresentar validacao", () => {
  cy.get("#search input[type='search']").then(($input) => {
    expect($input[0].checkValidity()).to.eq(false);
  });
});

Then("o sistema deve processar a pesquisa e apresentar resultado correspondente", () => {
  cy.contains(".swal2-popup", "Check out the Results").should("be.visible");
});

Then("o sistema deve exibir mensagem de itens nao encontrados", () => {
  cy.contains(".swal2-popup", "Check out the Results").should("be.visible");
});

Then("o sistema deve apresentar validacao para busca vazia", () => {
  cy.get("#search input[type='search']").then(($input) => {
    expect($input[0].checkValidity()).to.eq(false);
  });
});
