const { I } = inject();

module.exports = {

    checkoutSecondUrl: "/checkout-step-two",
    checkoutNameOfProduct: "//div[contains(text(),'Sauce Labs Fleece Jacket')]",
    checkoutPriceOfProduct: "//div[contains(@class,'inventory_item_price')]",
    finishButton: "//button[contains(@id,'finish')]",

    checkProduct (product) {
        I.waitInUrl(this.checkoutSecondUrl);
        I.see(product.name, this.checkoutNameOfProduct);
        I.see(product.coast, this.checkoutPriceOfProduct);
        I.click(this.finishButton);
    }

}
