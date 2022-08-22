import {Locator} from "playwright";

const { I } = inject();

class CheckoutFirstPage {

    checkoutFirstUrl: "/checkout-step-one",
    private firstnameOfPayer: Locator = locate ("//input[contains(@id,'first-name')]").as("Firstname");
    private surnameOfPayer: Locator = locate ("//input[contains(@id,'last-name')]").as("Surname");
    private postcodeOfPayer: Locator = locate ("//input[contains(@id,'postal-code')]").as("Postcode");
    private continueButton: Locator = locate ("//input[contains(@id,'continue')]").as("Continue Button");

    waitForOpened () : void {
        I.waitInUrl(this.checkoutFirstUrl);
    }

    fillAddress (userData) {
        I.fillField( this.firstnameOfPayer, userData.firstnameOfPayer);
        I.fillField(this.surnameOfPayer, userData.surnameOfPayer);
        I.fillField(this.postcodeOfPayer, userData.postcodeOfPayer);
        I.click(this.continueButton);
    }

}
