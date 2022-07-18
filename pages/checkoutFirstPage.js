const { I } = inject();

module.exports = {

    checkoutFirstUrl: "/checkout-step-one",
    firstnameOfPayer: "//input[contains(@id,'first-name')]",
    surnameOfPayer: "//input[contains(@id,'last-name')]",
    postcodeOfPayer: "//input[contains(@id,'postal-code')]",
    continueButton: "//input[contains(@id,'continue')]",


    fillAddress () {
        I.waitInUrl(this.checkoutFirstUrl);
        I.fillField(this.firstnameOfPayer, "Alex");
        I.fillField(this.surnameOfPayer, "Shumakov");
        I.fillField(this.postcodeOfPayer, "40000");
        I.click(this.continueButton);
    }

}
