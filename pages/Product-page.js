
import { expect } from '@playwright/test';
import { productUrl } from '../data.json';

export class ProductPage {

    constructor(page) {
        this.page = page;


        
      };

      
  async goto() {
    await this.page.goto(productUrl);
  };
      

}