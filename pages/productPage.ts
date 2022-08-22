import {Locator} from "playwright";

const { I } = inject();

class ProductPage {

    private productName: Locator = locate ("//div[contains(text(),'Sauce Labs Fleece Jacket')]").as("Product name");
    private productAddButton: Locator = locate ("//button[contains(@id,'add-to-cart-sauce-labs-fleece-jacket')]").as("Add Product Button");
    private cartBadge: Locator = locate ("//span[contains(@class,'shopping_cart_badge')]").as("Cart Counter");
    private cartLink: Locator = locate ("//a[contains(@class,'shopping_cart_link')]").as("Cart Link");
    productUrl: "/inventory-item.html?id=5",

    constructor() {
        super("/inventory-item.html?id=5");
    }

    openProductCard () : void {
        I.click(this.productName);
    }

    waitForOpened () : void {
        I.waitInUrl(this.productUrl);
    }

    addProductToCart () : void {
        I.click(this.productAddButton);
    }

    waitForVisible () : void {
        I.waitForVisible(this.cartLink);
    }

    assertNumberOfProducts (productData: Product) : ProductPage {
        I.see(this.cartBadge, productData.numberOfProducts);
        return this;
    }

    goToCart () : void {
        I.click(this.cartLink);
    }

}
