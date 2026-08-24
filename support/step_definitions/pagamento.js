const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

function preencherDadosValidos() {
  cy.get("@campoAlterado").then((campoAlterado) => {
    if (campoAlterado !== "nome") cy.get("#fname").clear().type("Maria");
    if (campoAlterado !== "sobrenome") cy.get("#lname").clear().type("Silva");
    if (campoAlterado !== "empresa") cy.get("#cname").clear().type("Qazando Ltda");
    if (campoAlterado !== "email") cy.get("#email").clear().type("maria.silva@qazando.com");
    if (campoAlterado !== "pais") cy.get("#country").select("usa");
    if (campoAlterado !== "cidade") cy.get("#city").select("Afghanistan");
    if (campoAlterado !== "cep") cy.get("#zip").clear().type("12345-000");
    if (campoAlterado !== "endereco") cy.get("#faddress").clear().type("Rua das Flores, 123");
    cy.get("#messages").clear().type("Sem observações");
  });
}

Given("que estou no checkout", () => {
  cy.visit("/checkout-one");
  cy.wrap("").as("campoAlterado");
});

Given("estou no checkout", () => {
  cy.visit("/checkout-one");
  cy.wrap("").as("campoAlterado");
});

Then("o sistema deve indicar que o nome e obrigatorio", () => {
  cy.contains(".errorLabel", "O campo First Name deve ser prenchido").should("be.visible");
});

Then("o sistema deve indicar que o email e obrigatorio", () => {
  cy.contains(".errorLabel", "O campo E-mail deve ser prenchido ou é inválido").should("be.visible");
});

When("preencho os demais dados", () => {
  preencherDadosValidos();
});

When("tento finalizar a compra", () => {
  cy.contains("button", "Save").click();
});

When("deixo o campo sobrenome vazio", () => {
  cy.get("#lname").clear();
  cy.wrap("sobrenome").as("campoAlterado");
});

When("deixo o campo nome da empresa vazio", () => {
  cy.get("#cname").clear();
  cy.wrap("empresa").as("campoAlterado");
});

When("preencho os demais dados obrigatorios", () => {
  preencherDadosValidos();
});

When("informo um email invalido", () => {
  cy.get("#email").clear().type("email-invalido");
});

When("deixo os campos cidade e estado vazios", () => {
  cy.get("#city").invoke("val", "");
});

When("deixo o campo CEP vazio", () => {
  cy.get("#zip").clear();
});

When("deixo o campo endereco vazio", () => {
  cy.get("#faddress").clear();
});

When("visualizo os valores da compra", () => {
  cy.get(".order_review .order_table").scrollIntoView();
});

When("deixo o campo pais vazio", () => {
  cy.get("#country").invoke("val", "");
});

When("preencho os dados validos de pagamento", () => {
  preencherDadosValidos();
  cy.contains("button", "Save").click();
});

When("finalizo a compra", () => {
  cy.contains("button", "Place Order").click();
});

Then("o sistema deve indicar que o sobrenome e obrigatorio", () => {
  cy.contains(".errorLabel", "O campo Last Name deve ser prenchido").should("be.visible");
});

Then("o sistema deve respeitar a regra de validacao do campo empresa", () => {
  cy.contains(".errorLabel", "O campo Company deve ser prenchido").should("be.visible");
});

Then("o sistema deve indicar que o email informado e invalido", () => {
  cy.contains(".errorLabel", "O campo E-mail deve ser prenchido ou é inválido").should("be.visible");
});

Then("o sistema deve indicar que os campos sao obrigatorios", () => {
  cy.contains(".errorLabel", "O campo City deve ser prenchido").should("be.visible");
});

Then("o sistema deve indicar que o CEP e obrigatorio", () => {
  cy.contains(".errorLabel", "O campo Zip Code deve ser prenchido").should("be.visible");
});

Then("o sistema deve indicar que o endereco e obrigatorio", () => {
  cy.contains(".errorLabel", "O campo Address deve ser prenchido").should("be.visible");
});

Then("o total deve corresponder aos valores apresentados no resumo", () => {
  cy.get(".order_review .product-subtotal").first().should("be.visible");
});

Then("o sistema deve indicar que o pais e obrigatorio", () => {
  cy.contains(".errorLabel", "O campo Country deve ser prenchido").should("be.visible");
});

Then("a compra deve ser finalizada com mensagem de sucesso", () => {
  cy.contains(".modal-content", "Order success!").should("be.visible");
});

Given("acessei o checkout", () => {
  cy.visit("/checkout-one");
});
