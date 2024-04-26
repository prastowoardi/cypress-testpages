describe('Handle Window', () => {
    it('Basic Ajax Example', () => {
        cy.visit('/')
        cy.get('#windowstest').click()

        cy.get('#gobasicajax').then(($link) => {
            const target = $link.attr('target')
            if (target === '_blank') {
                // Jika tautan membuka jendela baru, hilangkan atau ubah atribut target
                $link.removeAttr('target')
                // Atau jika ingin mengubah target menjadi _self, gunakan kode berikut:
                // $link.attr('target', '_self')
            }
        })

        cy.get('#gobasicajax').click()

        cy.window().then((win) => {
            expect(win.window.length).to.equal(0) // Seharusnya hanya ada satu jendela
        })

        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.equal('Basic Ajax Example');
        })

        cy.get('#combo1').select('Web')
        cy.get('#combo2').select('Flash')
        cy.get('.styled-click-button').click()

        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.equal('Processed Form Details');
        })
    })

    it('Attributes in New Page', () => {
        cy.visit('/')
        cy.get('#windowstest').click()

        cy.get('#goattributes').then(($link) => {
            const target = $link.attr('target')
            if (target === '_blank') {
                // Jika tautan membuka jendela baru, hilangkan atau ubah atribut target
                $link.removeAttr('target')
                // Atau jika ingin mengubah target menjadi _self, gunakan kode berikut:
                // $link.attr('target', '_self')
            }
        })

        cy.get('#goattributes').click()

        cy.window().then((win) => {
            expect(win.window.length).to.equal(0) // Seharusnya hanya ada satu jendela
        })

        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.equal('Element Attributes Examples');
        })

        cy.get('.styled-click-button').click()
    })
    
})
