import {Locator} from "playwright";

const productNames = require("./inventoryPage");
const { I } = inject();

class InventoryPage {

    allProductsUrl: "/inventory",
    private dropdownButton: Locator = locate ("//select[contains(@class,'product_sort_container')]").as("Dropdown");
    private nameOfFirstProduct: Locator = locate ("//div[contains(text(),'Test.allTheThings() T-Shirt (Red)')]").as("First Product");
    private nameOfSecondProduct: Locator = locate ("//div[contains(text(),'Sauce Labs Onesie')]").as("Second Product");
    private firstProductButton: Locator = locate ("//button[contains(@id,'add-to-cart-test.allthethings()-t-shirt-(red)')]").as("Add First Product");
    private secondProductButton: Locator = locate ("//button[contains(@id,'add-to-cart-sauce-labs-onesie')]").as("Add Second Button");
    private cartLink: Locator = locate ("//a[contains(@class,'shopping_cart_link')]").as("Cart Link");
    private productsCounter: Locator = locate ("//span[contains(@class,'shopping_cart_badge')]").as("Products Counter");

    waitAllProducts () : void {
        I.waitInUrl("/inventory");
    }

    sortAllProducts () : void {
        I.selectOption(this.dropdownButton, "Name (Z to A)");
    }

    assertProducts (productsNames) {
        I.see(this.nameOfFirstProduct, productsNames.firstProduct);
        I.see(this.nameOfSecondProduct, productsNames.secondProduct);
    }

    addProducts () : void {
        I.click(this.firstProductButton);
        I.click(this.secondProductButton);
    }

    waitForVisible () : void {
        I.waitForVisible(this.cartLink);
    }

    assertCountOfProducts (numberOfProducts) {
        I.see(this.productsCounter, numberOfProducts.countOfProducts);
    }

    goToCart () : void {
        I.click(this.cartLink);
    }

    // insert your locators and methods here
}
