import {test,expect,Locator} from '@playwright/test';

test('login test', async ({ page} )=>{

    await page.goto('https://www.saucedemo.com/');
    
    const username = page.locator('#user-name');  // why here use locators instead of String 
    const password = page.locator('#password');
    const loginButton = page.locator('#login-button');
    // const loginButton = page.locator('#login-button');

    // username.goto(''); 

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();

    expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    const title = page.locator('.title');
    await expect(title).toHaveText('Products');
})
