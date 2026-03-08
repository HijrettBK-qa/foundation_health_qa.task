import { Page, expect } from "@playwright/test";

export default class LoginPage {

  page: Page;

  constructor(page: Page) {

    this.page = page;
  }

  async login(username: string, password: string) {

    await this.page.goto('https://www.saucedemo.com/');
    await this.page.getByPlaceholder("Username").fill(username);
    await this.page.getByPlaceholder("Password").fill(password);
    await this.page.locator("#login-button").click();

  };

  async verifyLogin() { await expect(this.page.getByText('Products')).toBeVisible(); };
  async logout() {
    await this.page.click(".bm-burger-button");
    await this.page.click("#logout_sidebar_link");
  };
  async verifyLogout(){await expect( this.page.locator("#login-button")).toBeVisible()};

}


