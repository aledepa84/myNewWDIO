const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const InventoryListPage = require('../pageobjects/inventorylist.page');
const setTestContest = require('../helpers/helper');
const {LOGIN_USERS, PAGES, PRODUCTS} = require('../configs/e2econs');
const AppHeaderPage = require('../pageobjects/appheader.page');

describe('My Login application', () => {
    beforeEach(async () => {
        await browser.url('');
      });

    it('should login with valid credentials', async () => {
  
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
    

});