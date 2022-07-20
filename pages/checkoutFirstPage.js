const { I } = inject();

module.exports = {

    checkoutFirstUrl: "/checkout-step-one",
    firstnameOfPayer: "//input[contains(@id,'first-name')]",
    surnameOfPayer: "//input[contains(@id,'last-name')]",
    postcodeOfPayer: "//input[contains(@id,'postal-code')]",
    continueButton: "//input[contains(@id,'continue')]",

    waitForOpened () {
        I.waitInUrl(this.checkoutFirstUrl);
    },

    fillAddress (userData) {
        I.fillField(this.firstnameOfPayer, userData.firstnameOfPayer);
        I.fillField(this.surnameOfPayer, userData.surnameOfPayer);
        I.fillField(this.postcodeOfPayer, userData.postcodeOfPayer);
        I.click(this.continueButton);
    }

}
