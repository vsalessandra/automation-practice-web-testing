const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que estou na pagina de um produto em oferta", () => {
  cy.visit("/product-details-one/1");
});

When("localizo um produto na listagem", () => {
  cy.visit("/shop-left-bar");
  cy.get(".product_wrappers_one").first().scrollIntoView();
});

When("seleciono uma variacao disponivel", () => {
  cy.get("select.customs_sel_box").select("XL");
});

When("seleciono uma cor disponivel", () => {
  cy.get(".product-variable-color input[name='modal-product-color']").eq(1).click({ force: true });
});

When("seleciono quantidade maior que um", () => {
  cy.get(".plus-minus-input .input-group-button button").eq(1).click();
});

When("adiciono o produto ao carrinho", () => {
  cy.contains("a.theme-btn-one", "Add To Cart").click();
});

When("tento informar uma quantidade menor que um", () => {
  cy.visit("/cart");
  cy.get(".product_quantity input").first().clear().type("-1");
});

When("localizo a area de avaliacoes", () => {
  cy.get(".reviews_rating").scrollIntoView();
});

When("comparo preco original e preco promocional", () => {
  cy.get(".product_details_right_one h4 del").scrollIntoView();
});

Then("a imagem exibida deve corresponder ao nome do produto", () => {
  cy.get(".product_wrappers_one").first().within(() => {
    cy.get(".thumb img").should("have.attr", "src");
    cy.get(".content .title").should("be.visible");
  });
});

Then("a variacao selecionada deve ser aplicada corretamente", () => {
  cy.get("select.customs_sel_box").should("have.value", "xl");
});

Then("a cor selecionada deve ser aplicada corretamente", () => {
  cy.get(".product-variable-color input[name='modal-product-color']").eq(1).should("be.checked");
});

Then("a quantidade adicionada no carrinho deve refletir a selecao", () => {
  cy.get(".plus-minus-input input[type='number']").should("have.value", "2");
});

Then("o sistema deve impedir a quantidade invalida ou apresentar validacao", () => {
  cy.get(".product_quantity input").first().should("have.attr", "min", "1");
});

Then("a quantidade de avaliacoes deve ser exibida corretamente", () => {
  cy.get(".reviews_rating span").should("contain.text", "Customer Reviews");
});

Then("o preco promocional deve corresponder ao desconto apresentado", () => {
  cy.get("h4 del").first().should("be.visible");
});
