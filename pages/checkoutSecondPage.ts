import {Locator} from "playwright";

const { I } = inject();

class CheckoutSecondPage {

    checkoutSecondUrl: "/checkout-step-two",
    private checkoutNameOfProduct: Locator = locate ("//div[contains(text(),'Sauce Labs Fleece Jacket')]").as("Product Name");
    private checkoutPriceOfProduct: Locator = locate ("//div[contains(@class,'inventory_item_price')]").as("Product Price");
    private finishButton: Locator = locate ("//button[contains(@id,'finish')]").as("Finish Button");

    waitCheckoutSecondPage () : void {
        I.waitInUrl(this.checkoutSecondUrl);
    }

    assertProduct (productData) {
        I.see(productData.name, this.checkoutNameOfProduct);
        I.see(productData.coast, this.checkoutPriceOfProduct);
    },

    checkProduct () : void {
        I.click(this.finishButton);
    }

}
