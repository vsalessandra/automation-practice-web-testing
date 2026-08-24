function limparCarrinho() {
  cy.visit("/cart");
  cy.get(".cart_submit, #empty_cart_area", { timeout: 10000 }).should("exist");
  cy.get("body").then(($body) => {
    if ($body.find(".cart_submit button").length) {
      cy.contains(".cart_submit button", "Clear cart").click();
    }
  });
}

function irParaCarrinho() {
  cy.url().then((url) => {
    if (!url.includes("/cart")) {
      cy.get("a.offcanvas-toggle[href='#!']").first().click({ force: true });
      cy.contains(".offcanvas-cart-action-button a", "View Cart").click({ force: true });
    }
  });
}

function removerTodosFavoritos() {
  cy.get("body").then(($body) => {
    if ($body.find(".product_remove i.fa-trash").length) {
      cy.get(".product_remove i.fa-trash").first().click();
      removerTodosFavoritos();
    }
  });
}

function limparFavoritos() {
  cy.visit("/wishlist");
  cy.get(".table_page, #empty_cart_area", { timeout: 10000 }).should("exist");
  removerTodosFavoritos();
}

function irParaFavoritos() {
  cy.url().then((url) => {
    if (!url.includes("/wishlist")) {
      cy.get("a.offcanvas-toggle[href='#offcanvas-wishlish']").first().click({ force: true });
      cy.contains(".offcanvas-wishlist-action-button a", "View wishlist").click({ force: true });
    }
  });
}

function irParaListagemProdutos() {
  cy.url().then((url) => {
    if (!url.includes("/shop-left-bar")) {
      cy.contains(".mega-menu a", "Shop Left Sidebar").click({ force: true });
    }
  });
}

module.exports = {
  limparCarrinho,
  irParaCarrinho,
  limparFavoritos,
  irParaFavoritos,
  irParaListagemProdutos,
};
