import homeSaucePage from "../../page/saucedemo/homeSaucePage";
import inventoryPage from "../../page/saucedemo/inventoryPage";

describe('Page Object Model Implementation', () => {
    beforeEach( () => {
        cy.visit('https://www.saucedemo.com/');
    })

    it('should login to inventory page', () => {
        homeSaucePage.typeUsername('standard_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickOnLoginBtn();

        inventoryPage.elements.titleSpan().should('have.text', 'Products');
    });

    it('should display locked out message', () => {
        homeSaucePage.typeUsername('locked_out_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickOnLoginBtn();

        homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });

    it('should login with a Dummy username', () => {
        homeSaucePage.typeUsername('dummy_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickOnLoginBtn();

        homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('should login with a Dummy password', () => {
        homeSaucePage.typeUsername('standard_user');
        homeSaucePage.typePassword('dummy_password');
        homeSaucePage.clickOnLoginBtn();

        homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('should login without username', () => {
        //homeSaucePage.typeUsername('standard_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickOnLoginBtn();

        homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Username is required');
    });

    it('should login without password', () => {
        homeSaucePage.typeUsername('standard_user');
        //homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickOnLoginBtn();

        homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Password is required');
    });
})
