describe('Basic API Testing - Part01', () => {
    beforeEach(function(){
        cy.request('GET', 'http://localhost:3000/todos').as('todos')
    })


    it("Body Length - Test", function(){
        cy.request('http://localhost:3000/todos')
        .its('body')
        .should('have.length', 4)
    });

    it('Request Status - Test', () => {
        cy.request('http://localhost:3000/todos')
        .its('status')
        .should('eq', 200);
    });

    it('Header/Content-Type Test', () => {
        cy.request('http://localhost:3000/todos')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json')
        .and('include', 'charset=utf-8');
    });

    const apiItems = [
        {
          "title": "buy milk",
          "completed": false,
          "id": "1"
        },
        {
          "title": "wash dishes",
          "completed": false,
          "id": "2"
        },
        {
          "title": "Pay electric bill",
          "completed": false,
          "id": "3"
        },
        {
          "title": "Walk the dog",
          "completed": false,
          "id": "4"
        }
      ]

    it('Initial items from Endpoint - Test', () => {
        cy.request('http://localhost:3000/todos')
        .its('body')
        .should('deep.eq', apiItems)
    });

    it('JSON Schema CHeck', () => {
        cy.request('http://localhost:3000/todos')
        .its('body')
        .each(value => {
            expect(value).to.have.all.keys('title', 'id', 'completed');
        })
    });

    it('Using Alias Request', function(){
        cy.get('@todos').should(response => {
            expect(response.body).to.have.length(4)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
            expect(response).to.have.property('requestHeaders')
        })
    })
})
