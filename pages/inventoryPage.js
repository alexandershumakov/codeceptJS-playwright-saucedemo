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

    addProducts () {
        I.click(this.firstProductButton);
        I.click(this.secondProductButton);
    },

    waitForVisible () {
        I.waitForVisible(this.cartLink);
    },

    assertCountOfProducts (numberOfProducts) {
        I.see(numberOfProducts.countOfProducts, this.productsCounter);
    },

    goToCart () {
        I.click(this.cartLink);
    }

    // insert your locators and methods here
}
