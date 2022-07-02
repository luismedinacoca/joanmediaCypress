// Cypress URL Commands
describe( "Location Demo", () => {
    beforeEach(() =>{
        cy.visit('https://www.saucedemo.com'); //command        
    })
    it('should have title tag with value Swag Labs', () => {
          cy.title().should('eq', 'Swag Labs');
    });

    it('URL should be https://www.saucedemo.com', () => {
        cy.url().should('contain', 'https://www.saucedemo.com');
    });

    it('should be HTTPS', () => {
        cy.location('protocol').should('contain', 'https');
    });

    it('should have hostname as www.saucedemo.com', () => {
        cy.location('hostname').should('eq', 'www.saucedemo.com');
    });

    it('should redirect /inventory.html', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.location('pathname').should('eq', '/inventory.html')
    })
})