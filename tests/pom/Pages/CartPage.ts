import { Page, expect } from "@playwright/test";

export default class CartPage {

  page: Page;

  constructor(page: Page) {

    this.page = page;
  }

  async continueShopping() { await this.page.click("#continue-shopping") };
  async goCheckOut() { await this.page.click("#checkout") };

  async verifyRemovedItems(items: string[]) {

    for (const item of items) {

      const formatted = item.toLowerCase().replace(/\s+/g, '-');

      await expect(
        this.page.locator(`#remove-${formatted}`)
      ).not.toBeVisible();

    }
  };

};

