
describe('tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
})
    //getters
    const customerInput = () => cy.get('#name-input')
    const redSauce = () => cy.get('.redsauce')
    const checkPep = () => cy.get('input[name=pepperoni]')
    const checkPineapple = () => cy.get('input[name=pineapple]')
    const checkSausage = () => cy.get('input[name=sausage]')
    const checkOlives = () => cy.get('input[name=blackOlives]')
    const submitBtn = () => cy.get(`button[id='order-button']`)
    
    
        it('sanity check to make sure tests work', () => {

            expect(1 + 2).to.equal(3);
            expect( 2 + 2).not.equal(5);
            expect({}).not.to.equal({});
            expect({}).to.eql({});
           })

    describe('Testing form functionality', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })
        it ('can navigate to /pizza by clicking pizza button', () => {
            cy.visit('http://localhost:3000/')
            cy.get('#order-pizza').click()
            cy.url().should('include', '/pizza')
        })
        it('can type in the name text input', () => {
            customerInput()
            .should('have.value',  '')
            .type('user')
            .should('have.value', 'user')
        })
        it('select multiple toppings', () => {
            checkPep().check().should('be.checked')
            checkPineapple().check().should('be.checked')
            checkSausage().check().should('be.checked')
            checkOlives().check().should('be.checked')
        })
        it('can submit the form', () => {
            customerInput().type('user')
            cy.get('select').select('1')
            redSauce().click()
            checkPep().check().should('be.checked')
            checkPineapple().check().should('be.checked')
            checkSausage().check().should('be.checked')
            checkOlives().check().should('be.checked')
            submitBtn().click()
        })
    })       
    
})