Feature('Order');

// Scenario('first test', async ({I}) => {
//     I.amOnPage('/');
//     I.fillField("input#user-name", "standard_user");
//     I.fillField("input#password", secret('secret_sauce'));
//     I.click("input#login-button");
//
//     pause();
//     let item = locate("div.inventory_item").withText("Sauce Labs Bolt T-Shirt");
//     let price = await I.grabTextFrom(item.find("div.inventory_item_price").as("Item Price"));
//     let name  = await I.grabTextFrom(item.find("div.inventory_item_name").as("Item Name"));
//     let description = await I.grabTextFrom(item.find("div.inventory_item_desc").as("Item Desc"));
//     I.click("//button[contains(@id,'add-to-cart-sauce-labs-bolt-t-shirt')]");
//
//     pause();
//     I.waitForVisible(".shopping_cart_badge");
//     I.see("1", ".shopping_cart_badge");
//     I.click("a.shopping_cart_link");
//
//
//     I.waitInUrl("/cart");
//     I.seeNumberOfVisibleElements("div.cart.item", 1);
//     I.see(name, locate ("div.cart_item div.inventory_item_name").first());
//     I.see(description, locate ("div.cart_item div.inventory_item_desc").first());
//     I.see("1", locate ("div.cart_item div.cart_quantity").first());
//     I.click("button#checkout");
//     I.waitInUrl("/checkout-step-one");
//     I.fillField("input#first-name", "Test Name");
//     I.fillField("input#first-name", "Test LAst Name");
//     I.fillField("input#postal-code", "40030");
//     I.click("input#continue");
//
//     I.waitInUrl("/checkout-step-two");
//     I.seeNumberOfVisibleElements("div.cart.item", 1);
//     I.see(name, locate ("div.cart_item div.inventory_item_name").first());
//     I.see(description, locate ("div.cart_item div.inventory_item_desc").first());
//     I.see("1", locate ("div.cart_item div.cart_quantity").first());
//     I.see(price, locate ("div.cart_item div.inventory_item_name").first());
//
//     pause();
//
//     I.click("button#finish");
//     I.waitInUrl("/checkout-complete");
//     I.see("THANK YOU FOR YOUR ORDER", "h2.complete-header");
//
// });

Scenario("second test", ({I, loginPage, productPage, cartPage, checkoutFirstPage, checkoutSecondPage, checkoutCompletePage, inventoryPage } ) => {

    let product = { coast: "$49.99", name: "Sauce Labs Fleece Jacket" }

    loginPage.open();
    loginPage.login("standard_user", secret('secret_sauce'));

    productPage.openProductCard();
    productPage.addProductToCart('1');

    cartPage.openCart();
    cartPage.completeProduct(product);

    checkoutFirstPage.fillAddress();

    checkoutSecondPage.checkProduct(product);

    checkoutCompletePage.completeOrder();

    inventoryPage.viewAllProducts();

}).tag("test1")

Scenario("third test", ({I, loginPage, inventoryPage, cartPage}) => {

    let productsNames = { firstProduct: "Test.allTheThings() T-Shirt (Red)", secondProduct: "Sauce Labs Onesie"}
    let numberOfProducts = { countOfProducts: 2, countOfProducts2: "1" }

    loginPage.open();
    loginPage.login("standard_user", secret('secret_sauce'));

    inventoryPage.viewAllProducts();
    inventoryPage.sortAllProducts();
    inventoryPage.addProducts(productsNames);
    inventoryPage.goToCart(numberOfProducts);

    cartPage.openCart();
    cartPage.removeProducts(productsNames,numberOfProducts);
    cartPage.returnToProductPage();

    loginPage.end();

}).tag("test2")



