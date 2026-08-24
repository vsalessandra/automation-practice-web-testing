const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { limparFavoritos, irParaFavoritos, irParaListagemProdutos } = require("../helpers");

Given("que adicionei um produto aos favoritos", () => {
  limparFavoritos();
  irParaListagemProdutos();
  cy.get(".product_wrappers_one .action.wishlist").first().click({ force: true });
});

Given("que adicionei dois ou mais produtos aos favoritos", () => {
  limparFavoritos();
  irParaListagemProdutos();
  cy.get(".product_wrappers_one .action.wishlist").eq(0).click({ force: true });
  cy.get(".product_wrappers_one .action.wishlist").eq(1).click({ force: true });
});

Given("que estou autenticado na loja", () => {
  cy.visit("/login");
  cy.get("#user").type("usuario.teste@qazando.com");
  cy.get("#password").type("senha123");
  cy.get("#btnLogin").click();
});

When("acesso a lista de desejos e removo o produto", () => {
  irParaFavoritos();
  cy.get(".product_remove i.fa-trash").first().click({ force: true });
});

When("removo os produtos um por vez na lista de desejos", () => {
  irParaFavoritos();
  cy.get(".product_remove i.fa-trash").each(() => {
    cy.get(".product_remove i.fa-trash").first().click({ force: true });
  });
});

When("acesso a lista de desejos", () => {
  irParaFavoritos();
});

When("adiciono esse produto ao carrinho a partir da lista de desejos", () => {
  irParaFavoritos();
  cy.contains(".product_addcart button", "Add to cart").first().click({ force: true });
});

Then("o produto deve ser removido da lista de desejos", () => {
  cy.get("#empty_cart_area").should("be.visible");
});

Then("todos os produtos removidos nao devem mais ser exibidos", () => {
  cy.contains("#empty_cart_area h2", "YOUR WISHLIST IS EMPTY").should("be.visible");
});

Then("a pagina de favoritos deve abrir corretamente", () => {
  cy.url().should("include", "/wishlist");
});

Then("o preco exibido deve corresponder ao preco atual do produto", () => {
  cy.get(".product-price").should("be.visible");
});

Then("o produto deve ser adicionado corretamente ao carrinho", () => {
  cy.get(".product_name").should("be.visible");
});

Then("o nome do produto exibido deve corresponder ao item favoritado", () => {
  cy.get(".product_name").should("be.visible");
});
