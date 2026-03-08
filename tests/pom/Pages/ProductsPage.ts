import { Page, expect } from "@playwright/test";

export default class ProductsPage {

  page: Page;

  constructor(page: Page) {

    this.page = page;
  }

  async viewItem(itemName: string) { await this.page.getByText(itemName).click() };

  async verifyViewedItem(itemName: string) {
    await expect(this.page.locator(".inventory_details_name.large_size")).toHaveText(itemName);

  };

  async verifyItemInCart(itemName: string) {

    const items = await this.page.locator('.inventory_item_name').allTextContents();

    expect(items).toContain(itemName);

  };
  async backToProducts() { await this.page.click(".back_to_products") };
  async goToCart() { await this.page.click(".shopping_cart_link") };
  async addItems(items: string[]) {

    for (const item of items) {

      const formattedName = item.toLowerCase().replace(/\s+/g, "-");

      await this.page.locator(`#add-to-cart-${formattedName}`).click();

    }
  };

}


