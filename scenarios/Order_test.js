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

Scenario("second test", ({I}) => {
    I.amOnPage('/');
    I.fillField("//input[contains(@id,'user-name')]", "standard_user");
    I.fillField("//input[contains(@id,'password')]", secret('secret_sauce'));
    I.click("//input[contains(@id,'login-button')]");

    I.click("//div[contains(text(),'Sauce Labs Fleece Jacket')]");

    I.waitInUrl("/inventory-item.html?id=5");
    I.click("//button[contains(@id,'add-to-cart-sauce-labs-fleece-jacket')]");
    I.waitForVisible("//a[contains(@class,'shopping_cart_link')]");
    I.see("1", "//span[contains(@class,'shopping_cart_badge')]");
    I.click("//a[contains(@class,'shopping_cart_link')]");

    I.waitInUrl("/cart");
    I.see("Sauce Labs Fleece Jacket", "//div[contains(text(),'Sauce Labs Fleece Jacket')]");
    I.see("$49.99", "//div[contains(@class,'inventory_item_price')]");
    I.click("//button[contains(@id,'checkout')]");

    I.waitInUrl("/checkout-step-one");
    I.fillField("//input[contains(@id,'first-name')]", "Alex");
    I.fillField("//input[contains(@id,'last-name')]", "Shumakov");
    I.fillField("//input[contains(@id,'postal-code')]", "40000");
    I.click("//input[contains(@id,'continue')]");

    I.waitInUrl("/checkout-step-two");
    I.see("Sauce Labs Fleece Jacket", "//div[contains(text(),'Sauce Labs Fleece Jacket')]");
    I.see("$49.99", "//div[contains(@class,'inventory_item_price')]");
    I.click("//button[contains(@id,'finish')]");

    I.waitInUrl("/checkout-complete");
    I.see("THANK YOU FOR YOUR ORDER", "//h2[contains(text(),'THANK YOU FOR YOUR ORDER')]");
    I.click("//button[contains(@id,'back-to-products')]");

    I.waitInUrl("/inventory");

}).tag("test1")

Scenario("third test", ({I}) => {
    I.amOnPage('/');
    I.fillField("//input[contains(@id,'user-name')]", "standard_user");
    I.fillField("//input[contains(@id,'password')]", secret('secret_sauce'));
    I.click("//input[contains(@id,'login-button')]");

    I.waitInUrl("/inventory");
    I.selectOption("//select[contains(@class,'product_sort_container')]", "Name (Z to A)");
    I.see("Test.allTheThings() T-Shirt (Red)", "//div[contains(text(),'Test.allTheThings() T-Shirt (Red)')]");
    I.see("Sauce Labs Onesie", "//div[contains(text(),'Sauce Labs Onesie')]");
    I.click("//button[contains(@id,'add-to-cart-test.allthethings()-t-shirt-(red)')]");
    I.click("//button[contains(@id,'add-to-cart-sauce-labs-onesie')]");
    I.waitForVisible("//a[contains(@class,'shopping_cart_link')]");
    I.see("2", "//span[contains(@class,'shopping_cart_badge')]");
    I.click("//a[contains(@class,'shopping_cart_link')]");

    I.waitInUrl("/cart");
    I.see("Test.allTheThings() T-Shirt (Red)", "//div[contains(text(),'Test.allTheThings() T-Shirt (Red)')]");
    I.see("Sauce Labs Onesie", "//div[contains(text(),'Sauce Labs Onesie')]");
    I.click("//button[contains(@id,'remove-sauce-labs-onesie')]");
    I.see("1", "//span[contains(@class,'shopping_cart_badge')]");
    I.click("//button[contains(@id,'remove-test.allthethings()-t-shirt-(red)')]");
    I.click("//button[contains(@id,'react-burger-menu-btn')]");
    I.click("//a[contains(@id,'logout_sidebar_link')]");

    I.waitInUrl("/");

}).tag("test2")



