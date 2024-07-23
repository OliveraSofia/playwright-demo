import { expect } from '@playwright/test';
import { baseUrl , productUrl} from '../data.json';

export class HomePage {

  constructor(page) {
    this.page = page;
    //header Items
    this.pageLogo = page.locator('//*[@class="logo pull-left"]')
    this.header = page.locator('#header')
    this.navBar = page.locator('//*[@class="nav navbar-nav"]')
    this.butons = this.navBar.locator('li')
    //slider Items
    this.carousel = page.locator('#slider-carousel')
    this.slides = page.locator('.carousel-inner').first()
    this.sliderImage = this.carousel.locator('div > div:nth-child(2) > div:nth-child(2) > img')
    this.slideLeftArrow = this.carousel.locator('a.left.control-carousel.hidden-xs > i')
    this.slideRightArrow = this.carousel.locator('a.right.control-carousel.hidden-xs > i')
    this.carouselIndicator = page.locator('.carousel-indicators')
    //Category Items
    this.categoryTitle = page.locator('h2', {hasText: "Category"})
    //Product
    this.viewProductButton = page.locator('a', {hasText: "View Product"}).first()
    
  };

  async goto() {
    await this.page.goto(baseUrl);
  };

  async testnavBar() {
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

  async testSlider() {

    await expect(this.carousel).toBeVisible();
    await expect(this.slides).toBeVisible();
    await expect(this.sliderImage).toBeVisible();
    await expect(this.slideLeftArrow).toBeVisible();
    await expect(this.slideRightArrow).toBeVisible();
    await expect(this.carouselIndicator).toBeVisible();
  };

  async testCategory(){
    await expect(this.categoryTitle).toBeVisible();

  }

  async viewProduct (){
    await expect(this.viewProductButton).toBeVisible();
    await this.viewProductButton.click();
    this.page.waitForURL(productUrl);
  }
  
}
