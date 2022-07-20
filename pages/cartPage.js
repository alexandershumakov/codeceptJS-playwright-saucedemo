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

    assertProduct (productData) {
        I.see(productData.name, this.nameOfProduct);
        I.see(productData.coast, this.priceOfProduct);
    },

    completeProduct () {
        I.click(this.checkoutButton);
    },

    assertTwoProducts (productsNames) {
        I.see(this.nameOfFirstProduct, productsNames.firstProduct);
        I.see(this.nameOfSecondProduct, productsNames.secondProduct);
    },

    removeFirstProduct () {
        I.click(this.removeButtonForFirstProduct);
    },

    assertCountOfProducts (numberOfProducts) {
        I.see(this.cartBadge, numberOfProducts.countOfProducts2);
    },

    removeSecondProduct () {
        I.click(this.removeButtonForSecondProduct);
    },

    returnToProductPage () {
        I.click(this.menuButton);
        I.click(this.logoutLink);
    }
}
