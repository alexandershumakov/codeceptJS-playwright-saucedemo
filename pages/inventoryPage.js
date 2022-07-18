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

    viewAllProducts () {
        I.waitInUrl("/inventory");
    },

    sortAllProducts () {
        I.selectOption(this.dropdownButton, "Name (Z to A)");
    },

    addProducts (productsNames) {
        I.see(productsNames.firstProduct, this.nameOfFirstProduct);
        I.see(productsNames.secondProduct, this.nameOfSecondProduct);
        I.click(this.firstProductButton);
        I.click(this.secondProductButton);
    },

    goToCart (numberOfProducts) {
        I.waitForVisible(this.cartLink);
        I.see(numberOfProducts.countOfProducts, this.productsCounter);
        I.click(this.cartLink);
    }




    // insert your locators and methods here
}
