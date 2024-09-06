class AppHeaderPage {
    get cart() {
        return $('.shopping_cart_link');
    }

    /**
     * Get the cart amount
     */
    async getCartAmount() {
        // Make sure the animation is done
        await browser.pause(500);

        return this.cart.getText();
    }

    /**
     * Open the cart
     */
    async openCart() {
        await this.cart.click();
    }
}

module.exports = new AppHeaderPage();