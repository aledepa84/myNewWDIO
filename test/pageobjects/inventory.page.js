

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }

    get menuInventory(){
        return $('#menu_button_container');
    }

    get pageWrapper(){
        return $('#page_wrapper');
    }
}

module.exports = new InventoryPage();
