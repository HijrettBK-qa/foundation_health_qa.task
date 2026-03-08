import { test } from "../Fixtures/Fixtures"

const item1 = "Sauce Labs Bike Light";
const item2 = "Sauce Labs Backpack";

test.describe("The shopping proccess should be compeleted successfully", async () => {

  test.beforeEach(async ({ login }) => {

    await login.login('standard_user', 'secret_sauce');

  });
  test("TC-1: An item should be reviewed successfully", async ({ products }) => {

    await products.viewItem(item1);
    await products.verifyViewedItem(item1);

  });
  test("TC-2: An item should be added to the cart successfully", async ({ products }) => {

    await products.addItems([item1]);
    await products.goToCart();
    await products.verifyItemInCart(item1);

  }); 
  test("TC-3: An item should be removed from the cart successfully", async ({ products, cart, checkout }) => {

    await products.addItems([item1, item2]);
    await products.goToCart();
    await checkout.removeItems([item1]);
    await cart.verifyRemovedItems([item1]);
    await products.verifyItemInCart(item2);
    
  }); 
  test("TC-4: A shopping process should be completed successfully", async ({ products, cart, checkout }) => {

    await products.addItems([ item1,item2]);
    await products.goToCart();
    await cart.goCheckOut();
    await checkout.fillInfo("Hijrett", "Karagoz","ST2 3MS");
    await checkout.clickContinue();
    await checkout.verifyItemsInCheckout([item1,item2]);
    await checkout.finishProcess();
    await checkout.verifyOrderIsSuccessful();
  });

})