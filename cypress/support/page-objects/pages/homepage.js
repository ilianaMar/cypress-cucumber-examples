class Homepage {
    constructor() {
        this.productsTable = '#tbodyid'
        this.productPriceWrapperId = '.card-block h5'
    }

    verifyThatEachProductHasPrice(){
        cy.get(this.productsTable)
            .should('be.visible')
            .find('div')
            .find(this.productPriceWrapperId)
            .each((el) => {
                 cy.wrap(el).invoke('text').then((text) => {
                    const price = parseInt(text.split('$').pop())
                    expect(text).not.to.be.empty
                    expect(price).to.be.a('number')
                 })
            })
    }
}

export const homepage = new Homepage()