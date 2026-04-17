import {test, expect} from '@playwright/test';

test('title test', async ({page})=>{
    await page.goto('https://playwright.dev/');
});
