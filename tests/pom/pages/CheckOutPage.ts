import { Page, expect } from "@playwright/test";

export default class CheckOutPage {

  page: Page;

  constructor(page: Page) {

    this.page = page;
  }

  async fillInfo(firstName: string, lastName: string, postCode: string) {

    await this.page.fill("#first-name", firstName);
    await this.page.fill("#last-name", lastName);
    await this.page.fill("#postal-code", postCode);
  }
  async removeItems(items: string[]) {

    for (const item of items) {

      const formattedName = item.toLowerCase().replace(/\s+/g, '-');

      await this.page.locator(`#remove-${formattedName}`).click();

    }
  };
  async clickCancel() { await this.page.click("#cancel") };
  async clickContinue() { await this.page.click("#continue") };
  async verifyItemsInCheckout(expectedItems: string[]) {

    const itemLocator = this.page.locator('.inventory_item_name');
    const actualItems = await itemLocator.allTextContents();

    for (const item of expectedItems) {
      expect(actualItems).toContain(item);
    }
  };
  async finishProcess() { await this.page.click("#finish") };
  async verifyOrderIsSuccessful() { await expect(this.page.getByText("Thank you for your order!")).toBeVisible(); };


}