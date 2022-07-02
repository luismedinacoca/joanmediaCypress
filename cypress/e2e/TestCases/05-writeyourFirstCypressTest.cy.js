//const { describe } = require("mocha");

const { Context } = require("mocha");


//https://example.cypress.io/todo

//Dummy application
let add = (a, b) => a + b;
let subsract = (a, b) => a -b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

//cypress test
//Describe - Context --> Group tests, nest multiple instances.
describe("UNit testing of our dymmy application", ()=> {
    context('', () => {

    });

    describe('Math with Decimal numbers', () => {
        
    })
})