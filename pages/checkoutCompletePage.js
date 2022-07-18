const { I } = inject();

module.exports = {

    checkoutCompleteUrl: "/checkout-complete",
    completeTitle: "//h2[contains(text(),'THANK YOU FOR YOUR ORDER')]",
    backToProductsButton: "//button[contains(@id,'back-to-products')]",


    completeOrder () {
        I.waitInUrl(this.checkoutCompleteUrl);
        I.see("THANK YOU FOR YOUR ORDER", this.completeTitle);
        I.click(this.backToProductsButton);
    },


}
