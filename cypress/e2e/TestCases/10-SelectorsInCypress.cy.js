// Selectors in Cypress

let username = "standard_user";
let password = "secret_sauce";

describe( "Locators in Cypress", () => {
    beforeEach(() =>{
        cy.visit('https://www.saucedemo.com'); //command        
    })
    it('GET method', () => {
        /*
         * <input class="input_error form_input" placeholder="Username" type="text" data-test="username" id="user-name" name="user-name" autocorrect="off" autocapitalize="none" value="">
         * <input class="input_error form_input" placeholder="Password" type="password" data-test="password" id="password" name="password" autocorrect="off" autocapitalize="none" value="">
         * <input type="submit" class="submit-button btn_action" data-test="login-button" id="login-button" name="login-button" value="Login">
         * 
         * #user-name
         * #password
         * [data-test="login-button"]
         */

        cy.get('#user-name').type(username);
        cy.get('input#password').type(password);
        cy.get('[data-test="login-button"]').click();
    });

    it('EQ|FIRST|LAST method', () => {
        cy.get('input').first().type(username);
        cy.get('input').eq(1).type(password);
        cy.get('input').last().click();
    });

    it('FILTER method', () => {
        cy.get('input').filter('[type="text"]').type(username);
        cy.get('input').filter('[type="password"]').type(password);
        cy.get('input').filter('[type="submit"]').click();
    });

    it('FIND method', () => {
        cy.get('form').find('input').eq(0).type(username);
        cy.get('form').find('input').eq(1).type(password);
        cy.get('form').find('input').eq(2).click();
    });

    it.only('PARENT method', () => {
        cy.get('form').parent().should('have.class', 'login-box');
    })

    
})