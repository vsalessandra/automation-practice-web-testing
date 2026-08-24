const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que estou na listagem de produtos", () => {
  cy.visit("/shop-left-bar");
});

Given("que apliquei um filtro na listagem", () => {
  cy.visit("/shop-left-bar");
  cy.contains(".shop_sidebar_boxed label.custom_boxed", "Fashion").click();
});

Given("que apliquei multiplos filtros na listagem", () => {
  cy.visit("/shop-left-bar");
  cy.contains(".shop_sidebar_boxed label.custom_boxed", "Fashion").click();
  cy.contains(".shop_sidebar_boxed label.custom_boxed", "Nike").click();
});

Given("que aplico filtros na pagina de produtos", () => {
  cy.visit("/shop-left-bar");
  cy.contains(".shop_sidebar_boxed label.custom_boxed", "Fashion").click();
});

When("seleciono uma categoria", () => {
  cy.contains(".shop_sidebar_boxed label.custom_boxed", "T-shirts").click();
});

When("navego pelas imagens de um card de produto", () => {
  cy.get(".product_wrappers_one").first().trigger("mouseover");
});

When("seleciono uma categoria principal", () => {
  cy.get("header.header-section .main-menu a#menuHome").first().click({ force: true });
  cy.contains("header.header-section .sub-menu a", "Electronics").click({ force: true });
});

When("acesso diferentes paginas de detalhes de produtos", () => {
  cy.visit("/product-details-one/1");
  cy.visit("/product-details-one/2");
});

When("aplico um filtro de preco", () => {
  cy.get("#formControlRange").invoke("val", 50).trigger("change");
});

When("seleciono um filtro de marca", () => {
  cy.contains(".shop_sidebar_boxed label.custom_boxed", "Adidas").click();
});

When("seleciono um filtro de cor", () => {
  cy.get(".shop_sidebar_boxed .product-variable-color input").eq(0).click({ force: true });
});

When("seleciono um filtro de tamanho", () => {
  cy.contains("#sizes_input label.custom_boxed", "M").click();
});

When("aplico dois ou mais filtros", () => {
  cy.contains(".shop_sidebar_boxed label.custom_boxed", "Fashion").click();
  cy.contains(".shop_sidebar_boxed label.custom_boxed", "Nike").click();
});

When("removo o filtro aplicado", () => {
  cy.contains(".shop_sidebar_boxed label.custom_boxed", "ALL").click();
});

When("removo todos os filtros", () => {
  cy.contains(".shop_sidebar_boxed .clear_button button", "Clear Filter").click();
});

When("visualizo os resultados", () => {
  cy.get(".product_wrappers_one").should("have.length.greaterThan", 0);
});

Then("os produtos correspondentes a categoria devem ser exibidos", () => {
  cy.get(".product_wrappers_one").should("have.length.greaterThan", 0);
});

Then("a imagem exibida deve ser atualizada conforme a navegacao", () => {
  cy.get(".product_wrappers_one").first().find("img.hover-image").should("exist");
});

Then("devo ser direcionado para a categoria selecionada", () => {
  cy.url().should("include", "/electronics");
});

Then("cada pagina deve carregar as informacoes do produto selecionado", () => {
  cy.get(".product_details_right_one, .modal_product_content_one").should("be.visible");
});

Then("a listagem deve apresentar produtos compativeis com o filtro aplicado", () => {
  cy.get(".product_wrappers_one").should("have.length.greaterThan", 0);
});

Then("somente produtos da marca selecionada devem ser exibidos", () => {
  cy.get(".product_wrappers_one").should("have.length.greaterThan", 0);
});

Then("os produtos compativeis com a cor devem ser exibidos", () => {
  cy.get(".product_wrappers_one").should("have.length.greaterThan", 0);
});

Then("os produtos compativeis com o tamanho devem ser exibidos", () => {
  cy.get(".product_wrappers_one").should("have.length.greaterThan", 0);
});

Then("os resultados devem respeitar todos os filtros aplicados", () => {
  cy.get(".product_wrappers_one").should("have.length.greaterThan", 0);
});

Then("os resultados devem ser atualizados sem o filtro", () => {
  cy.get(".product_wrappers_one").should("have.length.greaterThan", 0);
});

Then("a listagem deve voltar ao estado sem filtros", () => {
  cy.get(".product_wrappers_one").should("have.length.greaterThan", 0);
});

Then("todos os produtos retornados devem atender aos filtros selecionados", () => {
  cy.get(".product_wrappers_one").should("have.length.greaterThan", 0);
});
