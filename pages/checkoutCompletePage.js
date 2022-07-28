const { I } = inject();

module.exports = {

    checkoutCompleteUrl: "/checkout-complete",
    completeTitle: "//h2[contains(text(),'THANK YOU FOR YOUR ORDER')]",
    backToProductsButton: "//button[contains(@id,'back-to-products')]",

    waitForOpened () {
        I.waitInUrl(this.checkoutCompleteUrl);
    },

    assertCompleteOrder () {
        I.see("THANK YOU FOR YOUR ORDER", this.completeTitle);
    },

    completeOrder () {
        I.click(this.backToProductsButton);
    }

}
