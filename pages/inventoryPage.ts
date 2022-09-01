import Locator = CodeceptJS.Locator;
import Page from "./page";
import Product from "../data/productFactory";

const productNames = require("./inventoryPage");
const { I } = inject();

class InventoryPage extends Page {

    private dropdownButton: Locator = locate ("//select[contains(@class,'product_sort_container')]").as("Dropdown");
    private nameOfFirstProduct: Locator = locate ("//div[contains(text(),'Test.allTheThings() T-Shirt (Red)')]").as("First Product");
    private nameOfSecondProduct: Locator = locate ("//div[contains(text(),'Sauce Labs Onesie')]").as("Second Product");
    private firstProductButton: Locator = locate ("//button[contains(@id,'add-to-cart-test.allthethings()-t-shirt-(red)')]").as("Add First Product");
    private secondProductButton: Locator = locate ("//button[contains(@id,'add-to-cart-sauce-labs-onesie')]").as("Add Second Button");
    private cartLink: Locator = locate ("//a[contains(@class,'shopping_cart_link')]").as("Cart Link");
    private productsCounter: Locator = locate ("//span[contains(@class,'shopping_cart_badge')]").as("Products Counter");

    constructor() {
        super("/inventory");
    }

    waitForOpened () : InventoryPage {
        super.waitForOpened();
        return this;
    }

    sortAllProducts () : InventoryPage {
        I.selectOption(this.dropdownButton, "Name (Z to A)");
        return this;
    }

    assertProducts (productData: Product) : InventoryPage {
        I.see(productData.firstProduct, this.nameOfFirstProduct);
        I.see(productData.secondProduct, this.nameOfSecondProduct);
        return this;
    }

    addProducts () : void {
        I.click(this.firstProductButton);
        I.click(this.secondProductButton);
    }

    waitForVisible () : InventoryPage {
        I.waitForVisible(this.cartLink);
        return this;
    }

    assertCountOfProducts (productData: Product) : InventoryPage {
        // @ts-ignore
        I.see(this.productsCounter, productData.countOfProducts);
        return this;
    }

    goToCart () : void {
        I.click(this.cartLink);
    }

}

export = new InventoryPage;