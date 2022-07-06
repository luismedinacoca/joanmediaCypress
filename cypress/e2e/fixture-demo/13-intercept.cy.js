describe('Intercept Demo', () => {
    // beforeEach(() => {
    //     cy.visit("https://www.saucedemo.com/");
    //     cy.fixture('fixtures-demo/sauceCredentials')
    //     .then(function(credentials){
    //         this.credentials = credentials;
    //     })
    // });
    it("Initial Validation", function(){
        cy.visit('https://example.cypress.io/todo');
        cy.get('.todo-list li')
        .should('have.length', 2)
        .and('contain', 'Pay electric bill')
        .and('contain', 'Walk the dog');

    });

    it("Mock API response", () => {
        cy.intercept('GET', '/todos', {fixture: 'intercept/intercept-fixture.json'}).as('getTodoFixture');
        cy.visit('https://example.cypress.io/todo');
        cy.log('test')
    })
})
