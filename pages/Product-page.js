
import { expect } from '@playwright/test';
import { productUrl } from '../data.json';

export class ProductPage {

    constructor(page) {
        this.page = page;
        this.productInformation = page.locator('.product-information')
        this.productQuantityLabel = this.productInformation.locator('label', {hasText : 'Quantity:'})
        this.productAvailabilityLabel = this.productInformation.locator('p', {hasText : 'Availability:'})
        this.productConditionLabel = this.productInformation.locator('p', {hasText : 'Condition:'})
        this.productBrandLabel = this.productInformation.locator('p', {hasText : 'Brand:'})
        this.productQuantityTextbox = page.locator('#quantity')
      };

      
  async goto() {
    await this.page.goto(productUrl);
  };
      
  async productInfo() {

    await expect(this.productInformation).toBeVisible()
    await expect(this.productQuantityLabel).toBeVisible()
    await expect(this.productAvailabilityLabel).toBeVisible()
    await expect(this.productConditionLabel).toBeVisible()
    await expect(this.productBrandLabel).toBeVisible()
    await expect(this.productQuantityTextbox).toBeEnabled()
  };

  };