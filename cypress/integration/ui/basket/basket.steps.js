import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { loginPage } from '../../../support/page-objects/pages/loginPage'
import { homepage } from '../../../support/page-objects/pages/homepage'
import { productDetailsPage } from '../../../support/page-objects/pages/productDetailsPage'
import { leftMenu } from '../../../support/page-objects/components/leftMenu'
const loginCreds = require('../../../fixtures/loginData.json')

Given('user is logged in with existing account', () => {
    leftMenu.clickOnMainMenuItem(leftMenu.loginLinkId)
    loginPage.fillinInputField(loginPage.usernameInputId, loginCreds.username)
    loginPage.fillinInputField(loginPage.passwordInputId, loginCreds.uiPassword)
    loginPage.clickOnLoginButton()
    cy.get(leftMenu.logoutLinkId).should('be.visible')
})

When('user adds one item to cart', () => {
    homepage.clickOnProductFromList(0)
    productDetailsPage.clickOnAddToCart()
})

Then('user verifies the opened pop up has the text {string}', (message) => {
    cy.on('window:alert', (text) => {
        expect(text).to.contains(message)
    })
})