const productNames = require("./inventoryPage");
const { I } = inject();

module.exports = {

    allProductsUrl: "/inventory",
    dropdownButton: "//select[contains(@class,'product_sort_container')]",
    nameOfFirstProduct: "//div[contains(text(),'Test.allTheThings() T-Shirt (Red)')]",
    nameOfSecondProduct: "//div[contains(text(),'Sauce Labs Onesie')]",
    firstProductButton: "//button[contains(@id,'add-to-cart-test.allthethings()-t-shirt-(red)')]",
    secondProductButton: "//button[contains(@id,'add-to-cart-sauce-labs-onesie')]",
    cartLink: "//a[contains(@class,'shopping_cart_link')]",
    productsCounter: "//span[contains(@class,'shopping_cart_badge')]",
    firstProductButton2: "//button[contains(@id,'add-to-cart-sauce-labs-backpack')]",
    secondProductButton2: "//button[contains(@id,'add-to-cart-sauce-labs-bike-light')]",
    nameOfFirstProduct2: "//div[contains(text(),'Sauce Labs Backpack')]",
    nameOfSecondProduct2: "//div[contains(text(),'Sauce Labs Bike Light')]",
    productButton: "//button[contains(@id,'add-to-cart-sauce-labs-bolt-t-shirt')]",

    waitAllProducts () {
        I.waitInUrl("/inventory");
    },

    sortAllProducts () {
        I.selectOption(this.dropdownButton, "Name (Z to A)");
    },

    assertProducts (productsNames) {
        I.see(productsNames.firstProduct, this.nameOfFirstProduct);
        I.see(productsNames.secondProduct, this.nameOfSecondProduct);
    },

    assertProducts2 (productsNames2) {
        I.see(productsNames2.firstProduct, this.nameOfFirstProduct2);
        I.see(productsNames2.secondProduct, this.nameOfSecondProduct2);
    },

    addProducts () {
        I.click(this.firstProductButton);
        I.click(this.secondProductButton);
    },

    addProducts2 () {
        I.click(this.firstProductButton2);
        I.click(this.secondProductButton2);
    },

    addProduct3 () {
        I.click(this.productButton);
    },

    waitForVisible () {
        I.waitForVisible(this.cartLink);
    },

    assertCountOfProducts (numberOfProducts) {
        I.see(numberOfProducts.countOfProducts, this.productsCounter);
    },

    assertCountOfProducts2 (numberOfProducts2) {
        I.see(numberOfProducts2.countOfProducts, this.productsCounter);
    },

    goToCart () {
        I.click(this.cartLink);
    }

    // insert your locators and methods here
}
