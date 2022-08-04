class CartPage {
    constructor() {
        this.tableBodyId = '#tbodyid'

    }

    getProductsCount(count){
        cy.get(this.tableBodyId)
            .should('be.visible')
            .children()
            .its('length')
            .should('be.eql', count)
    }

}

export const cartPage = new CartPage()