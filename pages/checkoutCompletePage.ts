import Locator = CodeceptJS.Locator;
import Page from "./page";
import CartPage from "./cartPage";

const { I } = inject();

class CheckoutCompletePage extends Page {

    private completeTitle: Locator = locate ("//h2[contains(text(),'THANK YOU FOR YOUR ORDER')]").as("Complete Title");
    private backToProductsButton: Locator = locate ("//button[contains(@id,'back-to-products')]").as("Back Button");

    constructor() {
        super("/checkout-complete");
    }

    waitForOpened () : CheckoutCompletePage {
        super.waitForOpened();
        return this;
    }

    assertCompleteOrder () : void {
        I.see("THANK YOU FOR YOUR ORDER", this.completeTitle);
    }

    completeOrder () : void {
        I.click(this.backToProductsButton);
    }


}

export default CheckoutCompletePage;