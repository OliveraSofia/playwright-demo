import { test } from '@playwright/test';
import { ExercisePage } from '../pages/exercise-page';

test('Verify Home Page Nav bar and header', async ({ page }) => {
    const exercisePage = new ExercisePage(page);
    await exercisePage.goto();
    await exercisePage.homeSmoke();
  });