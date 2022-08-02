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

    waitForOpened () {
        I.waitInUrl(this.productUrl);
    },
    addProductToCart () {
        I.click(this.productAddButton);
    },

    waitForVisible () {
        I.waitForVisible(this.cartLink);
    },

    assertNumberOfProducts (productData) {
        I.see(productData.numberOfProducts, this.cartBadge);
    },

    goToCart () {
        I.click(this.cartLink);
    }

}
