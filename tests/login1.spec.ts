import { test, expect ,Locator } from '@playwright/test';

test('login test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    const username: Locator = page.locator('#user-name');
    
});
