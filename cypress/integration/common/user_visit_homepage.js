import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('user visits homepage', () => { 
    cy.visit('/')
})