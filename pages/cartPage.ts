import {Locator} from "playwright";

const { I } = inject();

class CartPage {

    private nameOfProduct: Locator = locate ("//div[contains(text(),'Sauce Labs Fleece Jacket')]").as("Product Name");
    private priceOfProduct: Locator = locate ("//div[contains(@class,'inventory_item_price')]").as("Product Price");
    private checkoutButton: Locator = locate ("//button[contains(@id,'checkout')]").as("Checkout Button");
    private nameOfFirstProduct: Locator = locate ("//div[contains(text(),'Test.allTheThings() T-Shirt (Red)')]").as("First Product Name";)
    private nameOfSecondProduct: Locator = locate ("//div[contains(text(),'Sauce Labs Onesie')]").as("Second Product Name");
    private removeButtonForFirstProduct: Locator = locate ("//button[contains(@id,'remove-sauce-labs-onesie')]").as("Remove Button");
    private removeButtonForSecondProduct: Locator = locate ("//button[contains(@id,'remove-test.allthethings()-t-shirt-(red)')]").as("Remove Button");
    private cartBadge: Locator = locate ("//span[contains(@class,'shopping_cart_badge')]").as("Cart Counter");
    private menuButton: Locator = locate ("//button[contains(@id,'react-burger-menu-btn')]").as("Menu Button");
    private logoutLink: Locator = locate ("//a[contains(@id,'logout_sidebar_link')]").as("Logout Link");

    constructor() {
        super ("/cart");
    }

    openCart () : void {
        I.waitInUrl(this.cartUrl);
    }

    assertProduct (productData) {
        I.see(productData.name, this.nameOfProduct);
        I.see(productData.coast, this.priceOfProduct);
    }

    completeProduct () : void {
        I.click(this.checkoutButton);
    }

    assertTwoProducts (productsNames) {
        I.see(this.nameOfFirstProduct, productsNames.firstProduct);
        I.see(this.nameOfSecondProduct, productsNames.secondProduct);
    }

    removeFirstProduct () : void {
        I.click(this.removeButtonForFirstProduct);
    }

    assertCountOfProducts (numberOfProducts) {
        I.see(this.cartBadge, numberOfProducts.countOfProducts2);
    }

    removeSecondProduct () : void {
        I.click(this.removeButtonForSecondProduct);
    }

    returnToProductPage () : void {
        I.click(this.menuButton);
        I.click(this.logoutLink);
    }
}
