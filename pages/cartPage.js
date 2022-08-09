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

    assertProduct (productData) {
        I.see(productData.name1, this.nameOfProduct);
        I.see(productData.cost1, this.priceOfProduct);
    },

    completeProduct () {
        I.click(this.checkoutButton);
    },

    assertTwoProducts (productsData) {
        I.see(productsData.firstProduct, this.nameOfFirstProduct);
        I.see(productsData.secondProduct, this.nameOfSecondProduct);
    },

    assertTwoProducts2 (productData) {
        I.see(productData.firstProduct2, this.nameOfFirstProduct2);
        I.see(productData.secondProduct2, this.nameOfSecondProduct2);
    },

    assertTwoProducts3 (productData) {
        I.see(productData.nameFirstProduct, this.nameOfFirstProduct2);
        I.see(productData.nameThirdProduct, this.nameOfThirdProduct2);
    },

    removeFirstProduct () {
        I.click(this.removeButtonForFirstProduct);
    },

    assertCountOfProducts (productData) {
        I.see(productData.countOfProducts2, this.cartBadge);
    },

    assertCountOfProducts2 (productData) {
        I.see(productData.countOfProducts2, this.cartBadge);
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
