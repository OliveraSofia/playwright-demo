const { expect } = require('@playwright/test');


exports.ExercisePage = class ExercisePage {
     /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.pageLogo = page.locator('.col-sm-4').first()
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/');
  }

  async homeSmoke() {
    await expect(this.pageLogo).toBeVisible();
  }
  
}