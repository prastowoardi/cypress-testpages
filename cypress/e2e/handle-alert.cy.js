describe('', () => {
    it('Alert', () => {
        cy.visit('/')
        cy.get('#alerttest').click()
        cy.log('Button "Show Alert Box" will display an alert when clicked.')
        cy.get('#alertexamples', {log : false}).click()
        cy.get('#alertexplanation').invoke('text').then((message) => {
            expect(message).to.equal('You triggered and handled the alert dialog')
        })
    })

    it('Confirm Dialog with Random Condition', () => {
        cy.visit('/')
        const randomNumber = Math.round(Math.random())
        const confirmResult = randomNumber === 1    
        cy.on('window:confirm', () => {
            return confirmResult
        })
    
        cy.get('#alerttest').click()
        cy.log('Button "Show Confirm box" will display a confirm dialog when clicked.')
        
        cy.get('#confirmexample').click()
    
        cy.get('#confirmexplanation').invoke('text').then((message) => {
            if (confirmResult) {
                expect(message).to.equal('You clicked OK, confirm returned true.')
            } else {
                expect(message).to.equal('You clicked Cancel, confirm returned false.')
            }
        })
    })
    
    it('Prompt Dialog', () => {
        cy.visit('/')
        cy.get('#alerttest').click()
        cy.window().then(function(p){
            cy.stub(p, "prompt").returns("Testing handle promt alert")
            cy.get('#promptexample').click()
            cy.get('#promptreturn').contains('Testing handle promt alert')
        })
    })
})