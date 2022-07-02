//

// Automatic Cypress Wait
describe( "Retry-Ability Session", () => {
    beforeEach(() =>{
        cy.visit('https://example.cypress.io/todo'); //command
        cy.get('.new-todo')              //command
        .type('todo-A{enter}')          //command
        .type('todo-B{enter}');         //command 
    })
    it('should have two <li> elements', () => {
        //"Pay electric bill" & "Walk the dog" should be considered.
        cy.get('.todo-list label')      //command
        .should('have.length', 4)       //assertion        
    })
})