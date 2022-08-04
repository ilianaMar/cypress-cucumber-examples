class LeftMenu {
    constructor() {
        this.leftMenuId = '.list-group'
        this.leftMenuSubLinkId ='a#itemc'
        this.aboutYouLinkId = 'a[data-target="#videoModal"]'
        this.loginLinkId = 'a[data-target="#logInModal"]'
        this.logoutLinkId = '#logout2'
    }

    getLeftMenuText(menuText){
        cy.get(this.leftMenuId)
            .should('be.visible')
            .find(this.leftMenuSubLinkId)
            .invoke('text')
            .then((text) => {
                expect(text).to.contain(menuText)
            })  
    }

    getLeftMenuItemsCount(count){
        cy.get(this.leftMenuId)
            .should('be.visible')
            .find(this.leftMenuSubLinkId)
            .its('length').should('be.eql', count)

    }

    clickOnMainMenuItem(locator){
        cy.get(locator)
            .should('be.visible')
            .click()
    }
}

export const leftMenu = new LeftMenu()