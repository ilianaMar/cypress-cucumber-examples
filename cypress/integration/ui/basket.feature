Feature:  UI tests for basket functionality

Background:
    * user visits homepage
    * user is logged in with existing account

Scenario: Verify message when product is added to basket
    When user adds 1 item to cart
    Then user verifies the opened pop up has the text "Product added"

Scenario: Verify products count is correct
    When user adds 2 items to cart
    Then user checks that 2 items are added in basket page
