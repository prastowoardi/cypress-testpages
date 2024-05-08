describe('Handle Drag and Drop', () => {
    it('Drag and Drop Example', () => {
        cy.visit('/')
        cy.get('#useractionstest').click()

        const draggableElements = ['#draggable1', '#draggable2']
        const dropZones = ['#droppable1', '#droppable2']
        const expectedText = 'Dropped!'

        draggableElements.forEach((draggable, index) => {
            cy.get(draggable).trigger('mousedown', { which: 1 })
            cy.get(dropZones[index]).trigger('mousemove', 'center')
            cy.get(dropZones[index]).trigger('mouseup', { force: true })
        })

        cy.wait(1000)

        dropZones.forEach(dropZone => {
            cy.get(dropZone + ' p').should('contain', expectedText)
        })
    })
})