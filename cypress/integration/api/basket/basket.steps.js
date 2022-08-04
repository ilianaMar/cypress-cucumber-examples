import { Given,When, Then } from 'cypress-cucumber-preprocessor/steps'
const apiUrl = Cypress.config('apiUrl')
const loginCreds = require('../../../fixtures/loginData.json')

Given('user logged in', () => {
    cy.request({
        method: 'POST',
        url: `${apiUrl}login`,
        body :{
            username: loginCreds.username,
            password: loginCreds.apiPassword
        },
        failOnStatusCode: false
    }).as('loginUser')
    cy.get('@loginUser').then(response => {
        expect(response.status).to.be.eql(200)
    })
 })

 When('user {string} {string} to/from the cart', (operation, product) => {
    let prod_id, id
    const urlResource = (operation == 'adds') ? 'addtocart' : 'deleteitem'

    switch (product) {
        case 'samsung galaxy s6':
            prod_id = 7
            id = "19d69b00-0aef-b27a-7012-04dc39dfaa64"
            break;
        case 'htc one m9':
            prod_id = 1
            id = "2277e98d-1b3b-9a37-d3c4-1b45e839456a"
            break;
        default:
            console.log(`Sorry, you add incorrect product ${product}.`);
    }

    cy.get('@loginUser').then(({body}) =>{
        cy.request({
            method: 'POST',
            url: `${apiUrl}${urlResource}`,
            body :{
                cookie: body.split("Auth_token: ").pop(),
                flag: true,
                id: id,
                prod_id: prod_id
            },
            failOnStatusCode: false
        }).then(response =>{
            expect(response.status).to.be.eql(200)
        })
    })

    Then('user verifies if {int} items are placed in the cart', (count) => {
        cy.get('@loginUser').then(({body}) =>{
            cy.request({
                method: 'POST',
                url: `${apiUrl}viewcart`,
                body :{
                    cookie: body.split("Auth_token: ").pop(),
                    flag: true,

                },
                failOnStatusCode: false
            }).then(response =>{
                expect(response.status).to.be.eql(200)
                expect(response.body.Items.length).to.be.eql(count)
            })
        })
    })
 })