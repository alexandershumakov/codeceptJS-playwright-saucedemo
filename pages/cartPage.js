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
    removeButtonForSecondProduct2: "//button[contains(@id,'remove-sauce-labs-bike-light')]",
    nameOfFirstProduct2: "//div[contains(text(),'Sauce Labs Backpack')]",
    nameOfSecondProduct2: "//div[contains(text(),'Sauce Labs Bike Light')]",
    nameOfThirdProduct2: "//div[contains(text(),'Sauce Labs Bolt T-Shirt')]",
    continueShoppingButton: "//button[contains(@id,'continue-shopping')]",

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

    assertTwoProducts2 (productsNames2) {
        I.see(productsNames2.firstProduct, this.nameOfFirstProduct2);
        I.see(productsNames2.secondProduct, this.nameOfSecondProduct2);
    },

    assertTwoProducts3 (productsNames3) {
        I.see(productsNames3.firstProduct, this.nameOfFirstProduct2);
        I.see(productsNames3.thirdProduct, this.nameOfThirdProduct2);
    },

    removeFirstProduct () {
        I.click(this.removeButtonForFirstProduct);
    },

    assertCountOfProducts (numberOfProducts) {
        I.see(numberOfProducts.countOfProducts2, this.cartBadge);
    },

    assertCountOfProducts2 (numberOfProducts) {
        I.see(numberOfProducts.countOfProducts2, this.cartBadge);
    },

    removeSecondProduct () {
        I.click(this.removeButtonForSecondProduct);
    },

    removeSecondProduct2 () {
        I.click(this.removeButtonForSecondProduct2);
    },

    returnToProductPage () {
        I.click(this.menuButton);
        I.click(this.logoutLink);
    },

    continueShopping () {
       I.click(this.continueShoppingButton);
    }

}
