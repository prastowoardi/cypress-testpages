describe('Handle Drag and Drop', () => {
    it('Drag and Drop Example', () => {
        cy.visit('/')
        cy.get('#useractionstest').click()

        const draggable1 = '#draggable1'
        const draggable2 = '#draggable2'

        const dropZone1 = '#droppable1'
        const dropZone2 = '#droppable2'

        cy.get(draggable1).trigger('mousedown', { which: 1 })
        cy.get(dropZone1).trigger('mousemove', 'center')
        cy.get(dropZone1).trigger('mouseup', { force: true })

        cy.get(draggable2).trigger('mousedown', { which: 1 })
        cy.get(dropZone2).trigger('mousemove', 'center')
        cy.get(dropZone2).trigger('mouseup', { force: true })
        
        cy.wait(1000)

        cy.get(dropZone1 + ' p').should('contain', 'Dropped!')
        cy.get(dropZone2 + ' p').should('contain', 'Dropped!')
    })
})
