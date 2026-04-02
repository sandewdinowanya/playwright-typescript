import {test,expect} from '@playwright/test';

test('my first test',async ({page})=>{
    await page.goto('https://google.com/');await page.locator('textarea[name="q"]').fill('Playwright');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
     // Handle consent popup (if appears)
  const agreeBtn = page.locator('button:has-text("Get Chrome")');
  if (await agreeBtn.isVisible()) {
    await agreeBtn.click();
  }
    // const result = await page.locator('h3').allTextContents();
    // expect(result.length).toBeGreaterThan(0);
});

