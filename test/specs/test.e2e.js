const LoginPage = require('../pageobjects/login.page')
const InventoryPage = require('../pageobjects/inventory.page')

describe('My Login application', () => {
    beforeEach: async()=>{
        await browser.url('');
    }

    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(InventoryPage.menuInventory).toBeDisplayed();
       
        //await expect(Inventory.menuInventory).toHaveText(
          //  expect.stringContaining('You logged into a secure area!'))
    })

})

