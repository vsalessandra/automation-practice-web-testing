const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { limparCarrinho, irParaCarrinho, irParaListagemProdutos } = require("../helpers");

Given("que tenho um produto adicionado ao carrinho", () => {
  limparCarrinho();
  irParaListagemProdutos();
  cy.get(".product_wrappers_one .add-to-cart").first().click({ force: true });
});

Given("que tenho produtos adicionados ao carrinho", () => {
  limparCarrinho();
  irParaListagemProdutos();
  cy.get(".product_wrappers_one .add-to-cart").eq(0).click({ force: true });
  cy.get(".product_wrappers_one .add-to-cart").eq(1).click({ force: true });
});

Given("que tenho dois produtos adicionados ao carrinho", () => {
  limparCarrinho();
  irParaListagemProdutos();
  cy.get(".product_wrappers_one .add-to-cart").eq(0).click({ force: true });
  cy.get(".product_wrappers_one .add-to-cart").eq(1).click({ force: true });
});

Given("que tenho um produto com quantidade maior que um no carrinho", () => {
  limparCarrinho();
  irParaListagemProdutos();
  cy.get(".product_wrappers_one .add-to-cart").first().click({ force: true });
  irParaCarrinho();
  cy.get(".product_quantity input").first().clear().type("3");
});

Given("que estou na pagina de listagem de produtos", () => {
  cy.visit("/shop-left-bar");
});

Given("que nao adicionei produtos ao carrinho", () => {
  limparCarrinho();
});

Given("que removi todos os produtos do carrinho", () => {
  limparCarrinho();
  irParaListagemProdutos();
  cy.get(".product_wrappers_one .add-to-cart").first().click({ force: true });
  irParaCarrinho();
  cy.contains("button", "Clear cart").click();
});

When("acesso o carrinho e removo o produto", () => {
  irParaCarrinho();
  cy.get(".product_remove i.fa-trash").first().click();
});

When("removo o primeiro produto", () => {
  irParaCarrinho();
  cy.get(".product_remove i.fa-trash").eq(0).click();
});

When("removo o segundo produto", () => {
  cy.get(".product_remove i.fa-trash").eq(0).click();
});

When("acesso a tela do carrinho", () => {
  irParaCarrinho();
});

When("utilizo a opcao de limpar carrinho", () => {
  irParaCarrinho();
  cy.contains("button", "Clear cart").click();
});

When("aumento a quantidade do item", () => {
  irParaCarrinho();
  cy.get(".product_quantity input").first().clear().type("2");
  cy.wrap("2").as("quantidadeEsperada");
});

When("diminuo a quantidade do item", () => {
  cy.get(".product_quantity input").first().clear().type("1");
  cy.wrap("1").as("quantidadeEsperada");
});

When("removo o produto diretamente na tela do carrinho", () => {
  irParaCarrinho();
  cy.get(".product_remove i.fa-trash").first().click();
});

When("altero a quantidade do produto", () => {
  irParaCarrinho();
  cy.get(".product_quantity input").first().clear().type("4");
});

When("informo um cupom invalido", () => {
  irParaCarrinho();
  cy.get(".coupon_code.left input[placeholder='Coupon code']").type("CUPOMINVALIDO");
  cy.contains(".coupon_code.left button", "Apply coupon").click();
});

When("adiciono o item ao carrinho", () => {
  cy.contains("a.theme-btn-one", "Add To Cart").click();
});

When("adiciono um produto ao carrinho pela listagem", () => {
  cy.get(".product_wrappers_one .add-to-cart").first().click({ force: true });
});

When("navego para outra pagina da loja", () => {
  cy.get(".header-logo a").first().click({ force: true });
});

When("retorno ao carrinho", () => {
  irParaCarrinho();
});

Then("o produto deve ser removido do carrinho", () => {
  cy.get("#empty_cart_area").should("be.visible");
});

Then("o valor total deve corresponder a soma dos subtotais", () => {
  cy.get("td.product_total").then(($totals) => {
    const soma = [...$totals].reduce((acc, el) => acc + parseFloat(el.innerText.replace("$", "")), 0);
    cy.get(".cart_amount").first().should(($subtotal) => {
      expect(parseFloat($subtotal.text().replace("$", ""))).to.eq(soma);
    });
  });
});

Then("os dois produtos devem ser removidos corretamente", () => {
  cy.get("#empty_cart_area").should("be.visible");
});

Then("o produto adicionado deve ser exibido corretamente", () => {
  cy.get(".product_name").should("be.visible");
});

Then("todos os produtos devem ser removidos", () => {
  cy.get("#empty_cart_area").should("be.visible");
});

Then("a quantidade deve ser atualizada", () => {
  cy.get("@quantidadeEsperada").then((valorEsperado) => {
    cy.get(".product_quantity input").first().should("have.value", valorEsperado);
  });
});

Then("o valor do item deve ser recalculado corretamente", () => {
  cy.get(".product_quantity input")
    .first()
    .invoke("val")
    .then((quantidade) => {
      cy.get("td.product-price")
        .first()
        .invoke("text")
        .then((preco) => {
          const precoUnitario = parseFloat(preco.replace("$", ""));
          cy.get("td.product_total")
            .first()
            .should("contain.text", (precoUnitario * quantidade).toFixed(2));
        });
    });
});

Then("o produto nao deve mais aparecer na listagem do carrinho", () => {
  cy.get("#empty_cart_area").should("be.visible");
});

Then("o subtotal do item deve ser atualizado conforme a nova quantidade", () => {
  cy.get(".product_quantity input")
    .first()
    .invoke("val")
    .then((quantidade) => {
      cy.get("td.product-price")
        .first()
        .invoke("text")
        .then((preco) => {
          const precoUnitario = parseFloat(preco.replace("$", ""));
          cy.get("td.product_total")
            .first()
            .should("contain.text", (precoUnitario * quantidade).toFixed(2));
        });
    });
});

Then("o sistema deve apresentar mensagem de cupom invalido", () => {
  cy.contains(".swal2-popup", "Invalid Cuppon Code").should("be.visible");
});

Then("o total da compra nao deve ser alterado", () => {
  cy.get(".coupon_code.right .cart_amount").should("be.visible");
});

Then("o item deve ser adicionado corretamente ao carrinho", () => {
  irParaCarrinho();
  cy.get(".product_name").should("be.visible");
});

Then("o produto deve aparecer no carrinho", () => {
  irParaCarrinho();
  cy.get(".product_name").should("be.visible");
});

Then("o sistema deve indicar que o carrinho esta vazio", () => {
  cy.contains("#empty_cart_area h2", "YOUR CART IS EMPTY").should("be.visible");
});

Then("o subtotal deve corresponder ao preco do produto multiplicado pela quantidade", () => {
  cy.get(".product_quantity input")
    .first()
    .invoke("val")
    .then((quantidade) => {
      cy.get("td.product-price")
        .first()
        .invoke("text")
        .then((preco) => {
          const precoUnitario = parseFloat(preco.replace("$", ""));
          cy.get("td.product_total")
            .first()
            .should("contain.text", (precoUnitario * quantidade).toFixed(2));
        });
    });
});

Then("o produto anteriormente adicionado deve permanecer no carrinho", () => {
  cy.get(".product_name").should("be.visible");
});
