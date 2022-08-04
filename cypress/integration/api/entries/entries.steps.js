import { Given,When, Then } from 'cypress-cucumber-preprocessor/steps'
const apiUrl = Cypress.config('apiUrl')

Given('user requests {string} endpoint', (urlResource) => { 
    cy.request({
        method: 'GET',
        url: `${apiUrl}${urlResource}`,
        failOnStatusCode: false
    }).as('getEntries')

})

Then('user asserts that {int} entries are loaded', (entriesCount) => {  
    cy.get('@getEntries').then(({status, body}) => {
        expect(status).eql(200)
        expect(parseInt(body.LastEvaluatedKey.id)).eql(entriesCount)
    })
})

And('user asserts that {int} items price is {string} than 400', (count, sign) => {  
    let arr = []
    cy.get('@getEntries').then(({status, body}) => {
        expect(status).eql(200)
        if(sign == 'less') {
            arr = body.Items.filter(item => item.price < 400)
        }else if(sign == 'greater'){
            arr = body.Items.filter(item => item.price >400)
        }
        expect(arr.length).eql(count)
    })
})

Then('user asserts that for category {string} there is {int} items', (category, count) => { 
    let arr = []
    cy.get('@getEntries').then(({body}) => {
        arr = body.Items.filter(item => item.cat == category)
        expect(arr.length).eql(count)
    })
})