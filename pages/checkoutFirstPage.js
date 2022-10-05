const { I } = inject();

module.exports = {

    checkoutFirstUrl: "/checkout-step-one",
    firstName: "//input[contains(@id,'first-name')]",
    lastName: "//input[contains(@id,'last-name')]",
    zipCode: "//input[contains(@id,'postal-code')]",
    continueButton: "//input[contains(@id,'continue')]",

    waitForOpened () {
        I.waitInUrl(this.checkoutFirstUrl);
    },

    fillAddress (userData) {
        I.fillField(this.firstName, userData.firstName);
        I.fillField(this.lastName, userData.lastName);
        I.fillField(this.zipCode, userData.zipCode);
        I.click(this.continueButton);
    }

}
