const {faker} = require('@faker-js/faker');
const Product = require('../data/productFactory.ts');
const User = require('../data/userFactory.ts');

Feature('Order');

Before (({I, loginPage}) => {
    I.login("standard_user", secret('secret_sauce'));
})

Scenario("second test", ({I,
                             loginPage,
                             productPage,
                             cartPage,
                             checkoutFirstPage,
                             checkoutSecondPage,
                             checkoutCompletePage,
                             inventoryPage} ) => {

    let productData = new Product;
    let userData = new User;

    productPage.openProductCard().waitForOpened().addProductToCart();
    productPage.waitForVisible().assertNumberOfProducts(productData).goToCart();
    cartPage.waitForOpened().assertProduct(productData).completeProduct();
    checkoutFirstPage.waitForOpened().fillAddress(userData);
    checkoutSecondPage.waitForOpened().assertProduct(productData).checkProduct();
    checkoutCompletePage.waitForOpened().assertCompleteOrder();
    checkoutCompletePage.completeOrder();
    inventoryPage.waitForOpened();

}).tag("test1")

Scenario("second test", ({I,
                             loginPage,
                             inventoryPage,
                             cartPage}) => {

    let productData = new Product;

    inventoryPage.waitForOpened().sortAllProducts().assertProducts(productData).addProducts();
    inventoryPage.waitForVisible().assertCountOfProducts(productData).goToCart();
    cartPage.waitForOpened().assertTwoProducts(productData).removeFirstProduct();
    cartPage.assertCountOfProducts(productData).removeSecondProduct();
    cartPage.returnToProductPage();

    loginPage.waitForOpen();

}).tag("test2")

Scenario("third test", ({I,
                            loginPage,
                            inventoryPage,
                            cartPage,
                            checkoutFirstPage,
                            checkoutSecondPage,
                            checkoutCompletePage}) => {

    let productData = Product.build();
    let userData = User.build();

    inventoryPage.waitForOpened();
    inventoryPage.assertProducts2(productData);
    inventoryPage.addProducts2();
    inventoryPage.waitForVisible();
    inventoryPage.assertCountOfProducts2(productData);
    inventoryPage.goToCart();

    cartPage.openCart();
    cartPage.assertTwoProducts2(productData);
    cartPage.removeSecondProduct2();
    cartPage.assertCountOfProducts2(productData);
    cartPage.completeProduct();

    checkoutFirstPage.waitForOpened();
    checkoutFirstPage.fillAddress(userData);

    checkoutSecondPage.waitCheckoutSecondPage();
    checkoutSecondPage.assertProduct2(productData);
    checkoutSecondPage.checkProduct();

    checkoutCompletePage.waitForOpened();
    checkoutCompletePage.assertCompleteOrder();
    checkoutCompletePage.completeOrder();

    loginPage.waitForOpen();

}).tag("test3")

Scenario("4 test", ({I,
                        loginPage,
                        inventoryPage,
                        cartPage,
                        checkoutFirstPage,
                        checkoutSecondPage,
                        checkoutCompletePage}) => {

    let productData = Product.build();
    let userData = User.build();

    inventoryPage.waitAllProducts();
    inventoryPage.assertProducts3(productData);
    inventoryPage.addProducts2();
    inventoryPage.waitForVisible();
    inventoryPage.assertCountOfProducts2(productData);
    inventoryPage.goToCart();

    cartPage.openCart();
    cartPage.assertTwoProducts2(productData);
    cartPage.removeSecondProduct2();
    cartPage.assertCountOfProducts(productData);
    cartPage.continueShopping();

    inventoryPage.waitAllProducts();
    inventoryPage.addProduct3();
    inventoryPage.goToCart();

    cartPage.openCart();
    cartPage.assertTwoProducts3(productData);
    cartPage.completeProduct();

    checkoutFirstPage.waitForOpened();
    checkoutFirstPage.fillAddress(userData);

    checkoutSecondPage.waitCheckoutSecondPage();
    checkoutSecondPage.assertProduct2(productData);
    checkoutSecondPage.assertProduct3(productData);
    checkoutSecondPage.checkProduct();

    checkoutCompletePage.waitForOpened();
    checkoutCompletePage.assertCompleteOrder();
    checkoutCompletePage.completeOrder();

    loginPage.waitForOpen();

}).tag("test4")


After(async ({I}) => {
    await I.say("Test ended");
})