const { I } = inject();

module.exports = {

    cartUrl: "/cart",
    nameOfProduct: "//div[contains(text(),'Sauce Labs Fleece Jacket')]",
    priceOfProduct: "//div[contains(@class,'inventory_item_price')]",
    checkoutButton: "//button[contains(@id,'checkout')]",
    nameOfFirstProduct: "//div[contains(text(),'Test.allTheThings() T-Shirt (Red)')]",
    nameOfSecondProduct: "//div[contains(text(),'Sauce Labs Onesie')]",
    removeButtonForFirstProduct: "//button[contains(@id,'remove-sauce-labs-onesie')]",
    removeButtonForSecondProduct: "//button[contains(@id,'remove-test.allthethings()-t-shirt-(red)')]",
    cartBadge: "//span[contains(@class,'shopping_cart_badge')]",
    menuButton: "//button[contains(@id,'react-burger-menu-btn')]",
    logoutLink: "//a[contains(@id,'logout_sidebar_link')]",

    openCart () {
        I.waitInUrl(this.cartUrl);
    },

    assertProduct (product) {
        I.see(product.name, this.nameOfProduct);
        I.see(product.coast, this.priceOfProduct);
    },

    completeProduct () {
        I.click(this.checkoutButton);
    },

    assertTwoProducts (productsNames) {
        I.see(productsNames.firstProduct, this.nameOfFirstProduct);
        I.see(productsNames.secondProduct, this.nameOfSecondProduct);
    },

    removeFirstProduct () {
        I.click(this.removeButtonForFirstProduct);
    },

    assertCountOfProducts (numberOfProducts) {
        I.see(numberOfProducts.countOfProducts2, this.cartBadge);
    },

    removeSecondProduct () {
        I.click(this.removeButtonForSecondProduct);
    },

    returnToProductPage () {
        I.click(this.menuButton);
        I.click(this.logoutLink);
    }
}
