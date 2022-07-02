//https://example.cypress.io/todo

//Dummy application
let add = (a, b) => a + b;
let substract = (a, b) => a -b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

//cypress test
//Describe - Context --> Group tests, nest multiple instances.
describe("Unit testing of our dymmy application", ()=> {
    context('', () => {
        //it or specify:
        it('should add positive numbers', () => {
            expect(add(5, 8)).to.eq(13);
        });

        it('should substract positive numbers', () => {
            expect(substract(15, 8)).to.eq(7);
        });

        it('should divide positive numbers', () => {
            expect(divide(56, 8)).to.eq(7);
        });

        it('should multiple positive numbers', () => {
            expect(multiply(15, 3)).to.eq(45);
        });

        
    });

    describe('Math with Decimal numbers', () => {

        it('should add decimal numbers', () => {
            expect(add(2.75, 5.26)).to.eq(8.01);
        });

        it('should multiple decimal numbers', () => {
            expect(multiply(7.02, 1.7)).to.eq(11.934);
        });
    })
})