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

    clickOnProductFromList(index){
        cy.get(this.productsTable)
            .should('be.visible')
            .children()
            .eq(index)
            .then((item) => {
                cy.wrap(item).find('h4').click()
            })

        cy.url().should('contain', 'prod.html?idp')
    }
}

export const homepage = new Homepage()