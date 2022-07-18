class inventoryPage {
    //declaration of locators/selectors:
    elements = {
        titleSpan: () => cy.get('.title')
    }
}

module.exports = new inventoryPage();
