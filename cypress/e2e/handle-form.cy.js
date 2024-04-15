const image = '../fileUploads/image.png'
describe('Handle Form HTML', () => {
    it('Basic Form', () => {
        cy.visit('/')
        cy.get('#htmlformtest').click()
        cy.get(`input[name=username]`).type('thisIsUsername')
        cy.get(`input[name=password]`).type('thisIsPassword')
        cy.get(`textarea[name=comments]`).clear().type('thisIsComments CUK')
        cy.get('[type="file"]').attachFile(image)

        cy.get('[type="checkbox"]').randomChoose()
        cy.get('[type="radio"]').randomChoose()
        cy.get('[name="multipleselect[]"]').select('Selection Item 2','Selection Item 4')
        cy.get('select[name="dropdown"]').select('dd4')
        cy.get('[type="submit"]').click()

        cy.get('.centered').invoke('text').then((text) => {
            console.log(text)
        })
    })

    it('HTML5 Form', () => {
        cy.visit('/')
        cy.get('#html5formtest').click()
        cy.get('#colour-picker').then($input => {
            const colorValue = "#ff0000"
            cy.wrap($input).invoke('val', colorValue).trigger('change')
        })
        cy.get('#date-picker').type('2001-01-01')
        cy.get('#date-time-picker').type('2001-01-01T23:59')
        cy.get('#email-field').clear().type('aa@a.mail')
        cy.get('#month-field').type('2001-01')
        cy.get('#number-field').clear().type('111')
        cy.get('[type="submit"]').click()

        cy.get('.page-body').invoke('text').then((text) => {
            console.log(text)
        })
    })
})