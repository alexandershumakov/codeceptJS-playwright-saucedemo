const { I } = inject();

module.exports = {

    productName: "//div[contains(text(),'Sauce Labs Fleece Jacket')]",
    productAddButton: "//button[contains(@id,'add-to-cart-sauce-labs-fleece-jacket')]",
    cartBadge: "//span[contains(@class,'shopping_cart_badge')]",
    cartLink: "//a[contains(@class,'shopping_cart_link')]",
    productUrl: "/inventory-item.html?id=5",

    openProductCard () {
        I.click(this.productName);
    },

    addProductToCart (numberOfProducts) {
        I.waitInUrl(this.productUrl);
        I.click(this.productAddButton);
        I.waitForVisible(this.cartLink);
        I.see(numberOfProducts, this.cartBadge);
        I.click(this.cartLink);
    }

}
