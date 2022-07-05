describe('Fixture Demo', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
        cy.fixture('fixtures-demo/sauceCredentials')
        .then(function(credentials){
            this.credentials = credentials;
        })
    });
    it("Dummy or incorrect User", function(){
        cy.get('[data-test="username"]').type(this.credentials.dummyUsername);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword);
        cy.get('[data-test="login-button"]').click();
        cy.wait(1500);

        //error:
        cy.get('[data-test="error"]')
        .should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
        cy.wait(1500);
        cy.reload();
    });

    it("Dummy or incorrect Password", function(){
        cy.get('[data-test="username"]').type(this.credentials.standardUsername);
        cy.get('[data-test="password"]').type(this.credentials.dummyPassword);
        cy.get('[data-test="login-button"]').click();
        cy.wait(1500);

        //error:
        cy.get('[data-test="error"]')
        .should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
        cy.wait(1500);
        cy.reload();
    });

    it("lock-out user", function(){
        cy.get('[data-test="username"]').type(this.credentials.lockedUsername);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword);
        cy.get('[data-test="login-button"]').click();
        cy.wait(1500);

        //error:
        cy.get('[data-test="error"]')
        .should('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
        cy.wait(1500);
        cy.reload();
    });

    it("Standard User", function(){
        cy.get('[data-test="username"]').type(this.credentials.standardUsername);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword);
        cy.get('[data-test="login-button"]').click();
        cy.wait(1500);

        cy.get('.title').should('contain.text', 'Products');
        cy.wait(1500);
    });
    //in case you make a reference as 'this.', function(){} is needed instead of () =>{}
})
