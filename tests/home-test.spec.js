import { test } from '@playwright/test';
import { HomePage } from '../pages/Home-page';



test.beforeEach('Verify Home Page Nav bar and header', async ({ page }) => {
   const homePage = new HomePage(page);
    await homePage.goto();
    
  });

  test(' Check nav bar is present', async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.testnavBar();
  });

test(' Check Slider is present', async ({page}) => {
  const homePage = new HomePage(page);
  await homePage.testSlider();
});

test('Check product card', async ({page}) => {
  const homePage = new HomePage(page);
  await homePage.mouseHoverProduct()
});

test('Open view product page', async ({page}) => {
  const homePage = new HomePage(page);
  await homePage.viewProduct()
});
