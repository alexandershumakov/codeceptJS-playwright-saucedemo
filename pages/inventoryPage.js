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

    assertProducts (productData) {
        I.see(productData.firstProduct, this.nameOfFirstProduct);
        I.see(productData.secondProduct, this.nameOfSecondProduct);
    },

    assertProducts2 (productData) {
        I.see(productData.firstProduct2, this.nameOfFirstProduct2);
        I.see(productData.secondProduct2, this.nameOfSecondProduct2);
    },

    assertProducts3 (productData) {
        I.see(productData.nameFirstProduct, this.nameOfFirstProduct2);
        I.see(productData.nameSecondProduct, this.nameOfSecondProduct2);
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

    assertCountOfProducts (productsData) {
        I.see(productsData.countOfProducts, this.productsCounter);
    },

    assertCountOfProducts2 (productData) {
        I.see(productData.countOfProducts, this.productsCounter);
    },


    goToCart () {
        I.click(this.cartLink);
    }

    // insert your locators and methods here
}
