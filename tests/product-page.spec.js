import { test } from '@playwright/test';
import { ProductPage } from '../pages/Product-page';

test.beforeEach('Open view product page', async ({page}) => {
    const productPage = new ProductPage(page);
    await productPage.goto()
  });


  test('Verif Product Info is Visible', async ({page}) => {
    const productPage = new ProductPage(page);
    await productPage.productInfo()
  });