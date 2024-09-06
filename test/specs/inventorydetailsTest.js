const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const InventoryListPage = require('../pageobjects/inventorylist.page');
const setTestContest = require('../helpers/helper');
const {LOGIN_USERS, PAGES, PRODUCTS} = require('../configs/e2econs');
const AppHeaderPage = require('../pageobjects/appheader.page');
const CheckoutSummaryPage = require('../pageobjects/checkoutSummary.page');
const CheckoutPersonalPage = require('../pageobjects/checkoutPersonal.page');
const CheckoutCompletePage = require('../pageobjects/checkoutComplete.page');

describe('My Inventory looking around', () => {
    beforeEach(async () => {
        await browser.url('');
      });

    it('should validate user can navigate and get back from inventory items page', async () => {
  
        await LoginPage.open();

        await LoginPage.login('standard_user', 'secret_sauce');

        await expect(InventoryPage.pageWrapper).toBeDisplayed();

        await browser.url('/inventory-item.html?id=4');

        await expect(InventoryListPage.title).toBeDisplayed();

        await InventoryListPage.goBack();

        await expect(InventoryListPage.title).not.toBeDisplayed();
    
    });
    
    it('should validate that a product can be added to a cart', async () => {
  
        await LoginPage.open();

        await LoginPage.login('standard_user', 'secret_sauce');

        await expect(InventoryPage.pageWrapper).toBeDisplayed();

        await browser.url('/inventory-item.html?id=4');

        await expect(InventoryListPage.title).toBeDisplayed();

        await expect(await AppHeaderPage.getCartAmount()).toEqual('');

        InventoryListPage.addToCart();

        await expect(await AppHeaderPage.getCartAmount()).toEqual('1');
    
    });

    it('should validate that a product can be removed from the cart', async () => {
  
        await LoginPage.open();

        await LoginPage.login('standard_user', 'secret_sauce');

        await expect(InventoryPage.pageWrapper).toBeDisplayed();

        await browser.url('/inventory-item.html?id=4');

        await expect(InventoryListPage.title).toBeDisplayed();

        InventoryListPage.addToCart();

        InventoryListPage.removeFromCart();
        
        await expect(await AppHeaderPage.getCartAmount()).toEqual('');
    
    });

    it('should validate that ALL Products can be added to a cart and number of items are correct', async () => {
        
        await LoginPage.open();

        await LoginPage.login('standard_user', 'secret_sauce');

        await expect(InventoryPage.pageWrapper).toBeDisplayed();
        
        await expect(InventoryPage.inventoryItem).toBeDisplayed();

        const array = new Array(InventoryPage.inventoryItem);

        const buttons =$$('.btn_primary.btn_inventory');
        
        buttons.forEach(button=>{
            button.click();
        });
        await expect(await AppHeaderPage.getCartAmount()).toEqual('6');

        

    });

 

});








