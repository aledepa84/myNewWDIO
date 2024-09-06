const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const InventoryListPage = require('../pageobjects/inventorylist.page');
const setTestContest = require('../helpers/helper');
const {LOGIN_USERS, PAGES, PRODUCTS} = require('../configs/e2econs');
const AppHeaderPage = require('../pageobjects/appheader.page');
const CheckoutSummaryPage = require('../pageobjects/checkoutSummary.page');
const CheckoutPersonalPage = require('../pageobjects/checkoutPersonal.page');
const CheckoutCompletePage = require('../pageobjects/checkoutComplete.page');

describe('My Checkout Cart Payment', () => {
    beforeEach(async () => {
        await browser.url('');
      });

  it('should validate checkout', async () => {
        
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

        AppHeaderPage.openCart();

        await expect(InventoryPage.inventoryItem).toBeDisplayed();
        
        await expect(CheckoutSummaryPage.description).toBeDisplayed();

        CheckoutSummaryPage.finishCheckout();

       await expect(CheckoutPersonalPage.continueCheckoutButton).toBeDisplayed();

        CheckoutPersonalPage.checkoutPersonal('Ale','Depa','33001');

        //await expect(CheckoutCompletePage.title).toBeDisplayed();

        CheckoutCompletePage.checkoutFinish();

    });
 

});








