//https://example.cypress.io/todo

// Hooks are from mocha

/*
    order:
    1. before -> exceute once, as soon as the first TS
    2. beforeEach -> execute before EACH TS
    3. test execution
    4. afterEach -> execute after EACH TS.
    5. after -> execute once, as soon as the last TS.
 */

describe('Hook demo', () => {
    before('Before function', () => {
        cy.log("before function")
    });

    beforeEach('before each function', () => {
        cy.log(">>>> before each function")
    })
    it('TC #01', () => {
        cy.log("TC #01");
    });

    it('TC #02', () => {
        cy.log("TC #02");
    });

    it('TC #03', () => {
        cy.log("TC #03");
    });

    afterEach('After each function', () => {
        cy.log(">>>> After each function")
    })

    after('before each function', () => {
        cy.log("before each function")
    })
})