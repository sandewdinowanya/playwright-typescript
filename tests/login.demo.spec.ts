// import {test,expect,Locator} from '@playwright/test';

// test('login test', async ({ page} )=>{

//     await page.goto('https://www.saucedemo.com/');
    
//     const username: Locator = page.locator('#user-name');  // why here use locators instead of String 
//     const password: Locator = page.locator('#password');
//     const loginButton: Locator = page.locator('#login-button');

//     await username.fill('standard_user');
//     await password.fill('secret_sauce');
//     await loginButton.click();

//     expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

//     // page.randommethod('')// in typescript given an error when using non existing methods in page object 

//     const title: Locator = page.locator('.title');
//     await expect(title).toHaveText('Products');
// })

import {Page, Locator} from '@playwright/test';

export class LoginPage{

    readonly page:Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor (page: Page){
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }
    
}