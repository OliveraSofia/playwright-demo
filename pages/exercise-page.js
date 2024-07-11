import { expect } from '@playwright/test';
import { baseUrl } from '../data.json';

export class ExercisePage {

  constructor(page) {
    this.page = page;
    this.pageLogo = page.locator('//*[@class="logo pull-left"]')
    this.header = page.locator('#header')
    this.navBar = page.locator('//*[@class="nav navbar-nav"]')

    this.butons = this.navBar.locator('li')

  };

  async goto() {
    await this.page.goto(baseUrl);
  };

  async homeSmoke() {
    await expect(this.pageLogo).toBeVisible();
    await expect(this.header).toBeVisible();
    await expect(this.navBar).toBeVisible();
    await expect(this.butons).toHaveCount(8)
    await expect(this.butons).toHaveText([
      /Home/,
      / Products/ ,
      / Cart/ , 
      " Signup / Login" , 
      / Test Cases/ , 
      / API Testing/ , 
      / Video Tutorials/ , 
      / Contact us/]);
  };
  
}
