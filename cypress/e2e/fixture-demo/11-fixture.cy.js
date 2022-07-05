describe('Fixture Demo', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
        cy.fixture('fixtures-demo/sauceCredentials')
        .then(function(credentials){
            this.credentials = credentials;
        })
    });

    it.only("Standard User", function(){
        cy.get('[data-test="username"]').type(this.credentials.standardUsername);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword);
        cy.get('[data-test="login-button"]').click();
    })

    //in case you make a reference as 'this.', function(){} is needed instead of () =>{}
})
