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

    assertProduct (productData) {
        I.see(productData.name1, this.checkoutNameOfProduct);
        I.see(productData.cost1, this.checkoutPriceOfProduct);
    },

    assertProduct2 (productData) {
        I.see(productData.name2, this.checkoutNameOfProduct2);
        I.see(productData.cost2, this.checkoutPriceOfProduct2);
    },

    assertProduct3 (productData) {
        I.see(productData.nameThirdProduct, this.checkoutNameOfProduct3);
        I.see(productData.costThirdProduct, this.checkoutPriceOfProduct3);
    },

    checkProduct () {
        I.click(this.finishButton);
    }

}
