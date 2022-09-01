import Locator = CodeceptJS.Locator;
import Page from "./page";
import Product from "../data/productFactory";

const { I } = inject();

class CheckoutSecondPage extends Page {

    private checkoutNameOfProduct: Locator = locate ("//div[contains(text(),'Sauce Labs Fleece Jacket')]").as("Product Name");
    private checkoutPriceOfProduct: Locator = locate ("//div[contains(@class,'inventory_item_price')]").as("Product Price");
    private finishButton: Locator = locate ("//button[contains(@id,'finish')]").as("Finish Button");

    constructor() {
        super("/checkout-step-two");
    }


    waitForOpened () : CheckoutSecondPage {
        super.waitForOpened();
        return this;
    }

    assertProduct (productData: Product) : CheckoutSecondPage {
        I.see(productData.name1, this.checkoutNameOfProduct);
        I.see(productData.cost1, this.checkoutPriceOfProduct);
        return this;
    }

    checkProduct () : void {
        I.click(this.finishButton);
    }

}

export = new CheckoutSecondPage;
