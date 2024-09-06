const Page = require('./page');

class CheckoutCompletePage extends Page {
    

    get titleCheckoutOverwiew(){
        return $('//*[@id="header_container"]/div[2]/span');
    }

    get descriptionCheckoutComplete (){
        return('//*[@id="checkout_summary_container"]/div/div[1]/div[2]');
    }

    get cancelButton() {
        return $('#cancel');
    }

    get finishButton(){
        return $('#finish');
    }

    async cancelCheckout() {
        await this.cancelButton.click();
    }

    async checkoutFinish(){
        this.finishButton.click();
    }

}

module.exports = new CheckoutCompletePage();