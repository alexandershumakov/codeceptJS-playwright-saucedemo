import Locator = CodeceptJS.Locator;
import Page from "./page";
import User from "../data/userFactory";

const { I } = inject();

class CheckoutFirstPage extends Page {


    private firstnameOfPayer: Locator = locate ("//input[contains(@id,'first-name')]").as("Firstname");
    private surnameOfPayer: Locator = locate ("//input[contains(@id,'last-name')]").as("Surname");
    private postcodeOfPayer: Locator = locate ("//input[contains(@id,'postal-code')]").as("Postcode");
    private continueButton: Locator = locate ("//input[contains(@id,'continue')]").as("Continue Button");

    constructor() {
        super("/checkout-step-one");
    }

    waitForOpened () : CheckoutFirstPage {
        super.waitForOpened();
        return this;
    }

    fillAddress (userData: User) : CheckoutFirstPage {
        I.fillField(this.firstnameOfPayer, userData.firstName);
        I.fillField(this.surnameOfPayer, userData.lastName);
        I.fillField(this.postcodeOfPayer, userData.zipCode);
        I.click(this.continueButton);
        return this;
    }

}

export default CheckoutFirstPage;