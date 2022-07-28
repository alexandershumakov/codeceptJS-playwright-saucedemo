const { I } = inject();

module.exports = {

    checkoutSecondUrl: "/checkout-step-two",
    checkoutNameOfProduct: "//div[contains(text(),'Sauce Labs Fleece Jacket')]",
    checkoutPriceOfProduct: "//div[contains(@class,'inventory_item_price')]",
    finishButton: "//button[contains(@id,'finish')]",
    checkoutNameOfProduct2: "//div[contains(text(),'Sauce Labs Backpack')]",
    checkoutPriceOfProduct2: "//div[contains(@class,'inventory_item_price')]",
    checkoutNameOfProduct3: "//div[contains(text(),'Sauce Labs Bolt T-Shirt')]",
    checkoutPriceOfProduct3: "//div[contains(@class,'inventory_item_price')]",

    waitCheckoutSecondPage () {
        I.waitInUrl(this.checkoutSecondUrl);
    },

    assertProduct (product) {
        I.see(product.name, this.checkoutNameOfProduct);
        I.see(product.coast, this.checkoutPriceOfProduct);
    },

    assertProduct2 (product) {
        I.see(product.name, this.checkoutNameOfProduct2);
        I.see(product.coast, this.checkoutPriceOfProduct2);
    },

    assertProduct3 (product2) {
        I.see(product2.name, this.checkoutNameOfProduct3);
        I.see(product2.coast, this.checkoutPriceOfProduct3);
    },

    checkProduct () {
        I.click(this.finishButton);
    }

}
