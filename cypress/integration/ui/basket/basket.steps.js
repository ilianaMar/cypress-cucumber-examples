import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { loginPage } from '../../../support/page-objects/pages/loginPage'
import { homepage } from '../../../support/page-objects/pages/homepage'
import { productDetailsPage } from '../../../support/page-objects/pages/productDetailsPage'
import { header } from '../../../support/page-objects/components/header'
import { cartPage } from '../../../support/page-objects/pages/cartPage'
const loginCreds = require('../../../fixtures/loginData.json')

Given('user is logged in with existing account', () => {
    header.clickOnMainMenuItem(header.loginLinkId)
    loginPage.fillinInputField(loginPage.usernameInputId, loginCreds.username)
    loginPage.fillinInputField(loginPage.passwordInputId, loginCreds.uiPassword)
    loginPage.clickOnLoginButton()
    cy.get(header.logoutLinkId).should('be.visible')
})

When('user adds 1 item to cart', () => {
    homepage.clickOnProductFromList(0)
    productDetailsPage.clickOnAddToCart()
})

Then('user verifies the opened pop up has the text {string}', (message) => {
    cy.on('window:alert', (text) => {
        expect(text).to.contains(message)
    })
})

When('user adds {int} items to cart', (count) => {
    for (let i = 0; i <= count-1; i++) {
        homepage.clickOnProductFromList(i)
        productDetailsPage.clickOnAddToCart()
        cy.visit('/')
    }
})

Then('user checks that {int} items are added in basket page', (count) => {
    cy.xpath(header.cartLinkId).click()
    cartPage.getProductsCount(count)
})