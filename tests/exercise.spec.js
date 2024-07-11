const { test } = require('@playwright/test');
const { ExercisePage } = require('../pages/exercise-page')

test('getting started', async ({ page }) => {
    const exercisePage = new ExercisePage(page);
    await exercisePage.goto();
    await exercisePage.homeSmoke();
  });