class homeSaucePage {
    //declare each locator/selector
    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginBtn: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }

    //declare each function:
    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickOnLoginBtn(){
        this.elements.loginBtn().click();
    }
}


module.exports = new homeSaucePage();
