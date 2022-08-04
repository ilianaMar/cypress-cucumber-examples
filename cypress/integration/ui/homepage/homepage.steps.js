import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { leftMenu } from '../../../support/page-objects/components/leftMenu'
import { homepage } from '../../../support/page-objects/pages/homepage'

Given('user visits homepage', () => { 
    cy.visit('/')
})

And('user checks menu items text', (datatable) => { 
    datatable.hashes().forEach((element) => {
        leftMenu.getLeftMenuText(element.menuItemText)
    })
})

Then('user verifies that count of left menu items is {int}', (count) => { 
    leftMenu.getLeftMenuItemsCount(count)
})


Then('user verifies that all products have a price', () => { 
    homepage.verifyThatEachProductHasPrice()
})