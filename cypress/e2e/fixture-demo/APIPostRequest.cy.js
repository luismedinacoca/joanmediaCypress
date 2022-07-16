const endPoint = "/todos";

// POST should be done once and the data/ID must not be existent.
// In order to create a new data, enter a new ID not existent yet.

const todoObject = {
    "title": "C'est Fini",
    "completed": false,
    "id": "8"
}

const addTodo = todoObject => {
    cy.request('POST', endPoint, todoObject)
}

describe('API testing Request Demo', ()=> {
    it('Add a new todo', () => {
        //callback the function addTodo with its parameter
        addTodo(todoObject);

        //request to verify the information has been created:
        cy.request(`todos/${todoObject.id}`)
        .its('body')                        //looking for body response
        .should('deep.eq', todoObject)      //make sure it has the same schema as todoObject
    });
})
