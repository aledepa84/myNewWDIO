const Page = require('./page');

class CheckoutSummaryPage extends Page {

    get title() {
        return $('//*[@id="header_container"]/div[2]/span');
    }

    get description() {
        return $('//*[@id="cart_contents_container"]/div/div[1]/div[2]');
    }

    get continueShoping (){
        return $('#continue-shopping')
    }

    get checkoutButton() {
        return $('#checkout');

    }

    get items() {
        return $$('#cart_contents_container');
    }

    async continueShopping() {
        await this.continueShoping.click();
    }

    async finishCheckout() {
        await this.checkoutButton.click();
    }

}

module.exports = new CheckoutSummaryPage();