import {test,expect,Locator} from '@playwright/test';

test('login test', async ({ page} )=>{

    await page.goto('https://www.saucedemo.com/');
    
    const username: Locator = page.locator('#user-name');  // why here use locators instead of String 
    const password: Locator = page.locator('#password');
    const loginButton: Locator = page.locator('#login-button');

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();

    expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

})