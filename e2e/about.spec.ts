import { test, expect } from '@playwright/test';

test.describe('About page', () => {
  test('has the correct page title heading', async ({ page }) => {
    await page.goto('/about');
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toHaveText('About Agentopia');
  });

  test('displays the mission section', async ({ page }) => {
    await page.goto('/about');
    const missionHeading = page.getByRole('heading', { name: 'Our Mission' });
    await expect(missionHeading).toBeVisible();
  });

  test('displays the team section', async ({ page }) => {
    await page.goto('/about');
    const teamHeading = page.getByRole('heading', { name: 'The Team' });
    await expect(teamHeading).toBeVisible();
  });

  test('contains descriptive body text', async ({ page }) => {
    await page.goto('/about');
    await expect(page.getByText(/platform for building/i)).toBeVisible();
  });
});
