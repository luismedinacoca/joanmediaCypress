describe('Intercept Demo', () => {

    it("Initial Validation", function(){
        /**
         * run the following server for https://github.com/JoanEsquivel/testing-lists
         * run the command: $ npm start
         */

        cy.visit('http://localhost:3000/');
        cy.get('.todo-list li')
        .should('have.length', 4)
        .and('contain', 'Pay electric bill')
        .and('contain', 'Walk the dog');

    });

    it("Mock API response", () => {
        cy.intercept('GET', '/todos', {fixture: 'intercept/intercept-fixture.json'}).as('getTodoFixture');
        cy.visit('http://localhost:3000/');

        cy.get('.todo-list li')
        .should('have.length', 3)
        .and('contain', 'Cypress Assertion video')
        .and('contain', 'Intercept Cypress');
    });

    it("mock a ready todolist", ()=> {
        const stubSample = [{
            "title": "Mocked API video",
            "completed": true,
            "id": "4"
        },
        {
            "title": "Testing",
            "completed": false,
            "id": "5"
        },
        {
            "title": "Cypress Assertion video",
            "completed": false,
            "id":"1"
        },
        {
            "title": "Page Object Model Cypress Video",
            "completed": false,
            "id":"2"
        },
        {
            "title": "Intercept Cypress",
            "completed": true,
            "id":"3"
        }
        ]

        cy.intercept('GET', '/todos', {
            body: stubSample
        }).as("getTodo-Body");

        cy.visit('http://localhost:3000/');

        cy.get('div label').should('have.css', 'text-decoration', 'line-through solid rgb(217, 217, 217)')
    })
})
