import {Locator} from "playwright";

const { I } = inject();

class CheckoutCompletePage {

    checkoutCompleteUrl: "/checkout-complete",
    private completeTitle: Locator = locate ("//h2[contains(text(),'THANK YOU FOR YOUR ORDER')]").as("Complete Title");
    private backToProductsButton: Locator = locate ("//button[contains(@id,'back-to-products')]").as("Back Button");

    waitForOpened () : void {
        I.waitInUrl(this.checkoutCompleteUrl);
    }

    assertCompleteOrder () : void {
        I.see("THANK YOU FOR YOUR ORDER", this.completeTitle);
    }

    completeOrder () : void {
        I.click(this.backToProductsButton);
    }


}
