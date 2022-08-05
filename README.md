# Examples with cypress and cucumber

### Setup the project
- Install yarn - https://classic.yarnpkg.com/lang/en/docs/install/
- Clone repo and in the same directory run **yarn install** to install all dependencies for a project
- Create loginData.json in **cypress/fixtures** directory and follow sample **cypress/fixtures/loginData.json.dist** to add your credentials or you can use following test data :

        {
            "username": "issmqa@gmail.com", 
            "apiPassword": "MTIzNDU2", 
            "uiPassword": "123456"
        }

### Run tests
- Run tests in headless mode execute **yarn run cypress**
- Run tests in cypress GUI execute **yarn run cypress:open**

## Scope of project
The scope of project is to demonstrate api and ui tests using cucumber and cypress
Used libraries in the project are :
- cypress-cucumber-preprocessor - https://www.npmjs.com/package/cypress-cucumber-preprocessor
- cypress-xpath - https://www.npmjs.com/package/cypress-xpath
- cypress-real-events - https://www.npmjs.com/package/cypress-real-events
- mochawesome, mochawesome-merge, mochawesome-report-generator - For more information : https://docs.cypress.io/guides/tooling/reporters#Examples 
- eslint-plugin-cypres - https://www.npmjs.com/package/eslint-plugin-cypress

## Test description
- Api tests are stored in directory **cypress/integration/api**
- UI tests are stored in directory **cypress/integration/ui**
- Execute following commands to generate reports
  - Run tests with the following parameters :  **--reporter mochawesome  --reporter-options reportDir="cypress/results",overwrite=false,html=false,json=true**
  - Run command to merge json files **npx mochawesome-merge "cypress/results/*.json" > {newFileName}.json**
  - Run command to generate html **npx marge {newFileName}.json**
