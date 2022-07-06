describe('Fixture Demo', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
        cy.fixture('fixtures-demo/sauceCredentials')
        .then(function(credentials){
            this.credentials = credentials;
        })
    });


    it("Standard User", function(){
        let username = this.credentials.standardUsername
        let pwd = this.credentials.systemPassword

        //callback the command recently created:
        cy.typeLogin(username, pwd);

        cy.wait(1500);

        cy.get('.title').should('contain.text', 'Products');
        cy.wait(2000);

        cy.logout();
    });
    //in case you make a reference as 'this.', function(){} is needed instead of () =>{}
})
