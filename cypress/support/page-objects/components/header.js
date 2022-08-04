class Header {
    constructor() {
        this.aboutYouLinkId = 'a[data-target="#videoModal"]'
        this.loginLinkId = 'a[data-target="#logInModal"]'
        this.logoutLinkId = '#logout2'
        this.cartLinkId = '//*[@id="navbarExample"]/ul/li[4]/a'
    }

    clickOnMainMenuItem(locator){
        cy.get(locator)
            .should('be.visible')
            .click()
    }
}

export const header = new Header()