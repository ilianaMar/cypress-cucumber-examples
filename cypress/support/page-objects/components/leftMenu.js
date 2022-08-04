class LeftMenu {
    constructor() {
        this.leftMenuId = '.list-group'
        this.leftMenuSubLinkId ='a#itemc'
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
}

export const leftMenu = new LeftMenu()