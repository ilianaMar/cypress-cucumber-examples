class LoginPage {
    constructor() {
        this.usernameInputId = '#loginusername'
        this.passwordInputId = '#loginpassword'
        this.loginButtonId = '.btn-primary'
        this.loginModalId = '#logInModal'
    }

    fillinInputField(locator, data){
        cy.get(locator).should('be.visible').clear().type(data)
    }

    clickOnLoginButton(){
        cy.get(this.loginModalId)
            .should('be.visible')
            .find(this.loginButtonId)
            .click({force: true})
    }
}

export const loginPage = new LoginPage()