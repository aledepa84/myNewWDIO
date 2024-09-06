const Page = require('./page');

class CheckoutPersonalPage extends Page {
      get cancelButton() {
        return $('#cancel');

      }

      get continueCheckoutButton(){
        return $('#continue');
      }

      get firstName() {
        return $('#first-name');
      }
    
      get lastName() {
        return $('#last-name');
      }
    
      get postalCode() {
        return $('#postal-code');
      }
    
      get errorMessage() {
        return $('[data-test="error"]');
      }

      async cancelCheckout() {
        await this.cancelButton.click();
      }

      async checkoutPersonal (firstname, lastname, postalCode) {
        await this.firstName.setValue(firstname);
        await this.lastName.setValue(lastname);
        await this.postalCode.setValue(postalCode);
        await this.continueCheckoutButton.click();
    }
}

module.exports = new CheckoutPersonalPage();