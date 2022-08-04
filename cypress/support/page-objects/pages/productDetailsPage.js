class ProductDetailsPage {
    constructor() {
        this.productDetailsWrapperId = '.product-content'
        this.addToCartId = '.btn-success'

    }

    clickOnAddToCart(){
        cy.get(this.productDetailsWrapperId)
            .should('be.visible')
            .find(this.addToCartId)
            .should('be.visible')
            .click({force: true})
    }
}

export const productDetailsPage = new ProductDetailsPage()