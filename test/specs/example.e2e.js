const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('My Login application', () => {
    beforeEach(async () => {
        await browser.url('');
      });

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(InventoryPage.pageWrapper).toBeDisplayed();
        //expect(isVisible).toBe(true);
        //await expect(InventoryPage.flashAlert).toHaveTextContaining(
          //  'You logged into a secure area!');
    });
    
    it('should not login invalid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('test', 'pwd1234');
        await expect(LoginPage.errorMessage).toBeDisplayed();
       
        
    });

    

});


///html/body/div/div/div/div[1]/div[1]/div[1]
////*[@id="menu_button_container"]