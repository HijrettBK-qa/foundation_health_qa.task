import { test as base } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CheckOutPage from '../pages/CheckOutPage';
import CartPage from '../pages/CartPage';

type myFixtures = {

  products: ProductsPage;
  login: LoginPage;
  checkout: CheckOutPage;
  cart: CartPage;

}
// This new "test" can be used in multiple test files, and each of them will get the fixtures.

export const test = base.extend<myFixtures>({  // extend the base test as "MyFixtures". MyFixtures are my custom objects(fixtures) to inject in my tests

  login: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  products:async({page},use) =>{
    await use(new ProductsPage(page));
  },
  checkout:async({page}, use)=>{
    await use(new CheckOutPage(page));
  },
  cart:async({page},use)=>{
    await use(new CartPage(page));
  }

})

export { expect } from '@playwright/test'; // I am not using them in my class. just passing through the other test files to use them without importing.
