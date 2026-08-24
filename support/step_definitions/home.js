const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("clico no link de instagram em produtos", () => {
  cy.get("#instagram_area_one .instgram_post a").first().click({ force: true });
});

When("clico nos links das redes sociais disponiveis", () => {
  cy.get("#footer_one .footer_left_side_icon a").each(($link) => {
    cy.wrap($link).should("have.attr", "href");
  });
});

When("informo um email valido no campo de newsletter", () => {
  cy.get("#mc_embed_signup input[type='email']").type("newsletter@qazando.com");
});

When("envio o formulario", () => {
  cy.get("#mc_embed_signup button[type='submit']").click();
});

When("visualizo o cabecalho do site", () => {
  cy.get("header.header-section").scrollIntoView();
});

When("seleciono a opcao de produtos", () => {
  cy.visit("/shop-left-bar");
});

Then("devo ser redirecionado para a pagina oficial no instagram", () => {
  cy.get("#instagram_area_one .instgram_post a").first().should("have.attr", "href");
});

Then("cada link deve redirecionar para a rede social correta", () => {
  cy.get("#footer_one .footer_left_side_icon a").should("have.length", 5);
});

Then("o sistema deve processar o envio e apresentar mensagem correspondente", () => {
  cy.contains(".swal2-popup", "Thank you for your Subscribtion").should("be.visible");
});

Then("o menu principal deve ser exibido com suas opcoes disponiveis", () => {
  cy.get("header.header-section .main-menu nav ul").should("be.visible");
  cy.get("header.header-section .main-menu nav ul li").should("have.length.greaterThan", 0);
});

Then("a pagina de produtos deve ser carregada corretamente", () => {
  cy.url().should("include", "/shop-left-bar");
  cy.get(".product_wrappers_one").should("have.length.greaterThan", 0);
});
