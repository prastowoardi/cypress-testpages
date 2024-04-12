function getRandomFrameName() {
    const frameNames = ["left", "middle", "right"]
    const randomIndex = Math.floor(Math.random() * frameNames.length)
    return frameNames[randomIndex]
}

describe('iFrame handle', () => {
    it('Frame top', () => {
        cy.visit('/')
        cy.get('#framestest').click()
        cy.get(`frame[name=top]`,{log: false}).should('be.visible').then($frame => {
            const frameUrl = $frame.prop('src')
            cy.log(`URL frame: ${frameUrl}`)
            cy.visit(frameUrl)
        })
    })

    it('Frameset body', () => {
        cy.visit('/')       
        cy.get('#framestest').click()

        const randomFrameName = getRandomFrameName()
        cy.log(`Nama frame: ${randomFrameName}`)

        cy.get(`frame[name=${randomFrameName}]`,{log: false}).should('be.visible').then($frame => {
            const frameUrl = $frame.prop('src')
            cy.log(`URL dari frame ${randomFrameName}: ${frameUrl}`)
            cy.visit(frameUrl)
        })
    })

    it('Frame footer', () => {
        cy.visit('/')
        cy.get('#framestest').click()
        cy.get(`frame[name=footer]`,{log: false}).should('be.visible').then($frame => {
            const frameUrl = $frame.prop('src')
            cy.log(`URL frame: ${frameUrl}`)
            cy.visit(frameUrl)
        })
    })
})
