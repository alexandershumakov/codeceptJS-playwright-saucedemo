import User from "../data/userFactory";
import Product from "../data/productFactory";



Feature('Order');

Before (({I, loginPage}) => {
    I.login("standard_user", secret('secret_sauce'));
})

Scenario("1 test", ({I,
                             loginPage,
                             productPage,
                             cartPage,
                             checkoutFirstPage,
                             checkoutSecondPage,
                             checkoutCompletePage,
                             inventoryPage} ) => {

    let newProductData = new Product;
    let productData = newProductData.build();
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

Scenario("2 test", ({I,
                             loginPage,
                             inventoryPage,
                             cartPage}) => {

    let productData = new Product;

    inventoryPage.waitForOpened().sortAllProducts().assertProducts(productData).addProducts();
    inventoryPage.waitForVisible().assertCountOfProducts(productData).goToCart();
    cartPage.waitForOpened().assertTwoProducts(productData).removeFirstProduct();
    cartPage.assertCountOfProducts(productData).removeSecondProduct();
    cartPage.returnToProductPage();
    loginPage.waitForOpened();

}).tag("test2")

Scenario("3 test", ({I,
                            loginPage,
                            inventoryPage,
                            cartPage,
                            checkoutFirstPage,
                            checkoutSecondPage,
                            checkoutCompletePage}) => {

    let productData = new Product;
    let userData = new User;

    inventoryPage.waitForOpened().assertProducts2(productData).addProducts2();
    inventoryPage.waitForVisible().assertCountOfProducts(productData).goToCart();
    cartPage.waitForOpened().assertTwoProducts2(productData).removeSecondProduct2();
    cartPage.assertCountOfProducts(productData).completeProduct();
    checkoutFirstPage.waitForOpened().fillAddress(userData);
    checkoutSecondPage.waitForOpened().assertProduct2(productData).checkProduct();
    checkoutCompletePage.waitForOpened().assertCompleteOrder();
    checkoutCompletePage.completeOrder();

    loginPage.waitForOpened();

}).tag("test3")

Scenario("4 test", ({I,
                        loginPage,
                        inventoryPage,
                        cartPage,
                        checkoutFirstPage,
                        checkoutSecondPage,
                        checkoutCompletePage}) => {

    let productData = new Product;
    let userData = new User;

    inventoryPage.waitForOpened().assertProducts3(productData).addProducts2();
    inventoryPage.waitForVisible().assertCountOfProducts(productData).goToCart();

    cartPage.waitForOpened().assertTwoProducts2(productData).removeSecondProduct2();
    cartPage.assertCountOfProducts(productData).continueShopping();

    inventoryPage.waitForOpened().addProduct3();
    inventoryPage.goToCart();

    cartPage.waitForOpened().assertTwoProducts3(productData);
    cartPage.completeProduct();

    checkoutFirstPage.waitForOpened().fillAddress(userData);

    checkoutSecondPage.waitForOpened().assertProduct2(productData).assertProduct3(productData);
    checkoutSecondPage.checkProduct();

    checkoutCompletePage.waitForOpened().assertCompleteOrder();
    checkoutCompletePage.completeOrder();

    loginPage.waitForOpened();

}).tag("test4")


After(async ({I}) => {
    await I.say("Test ended");
})