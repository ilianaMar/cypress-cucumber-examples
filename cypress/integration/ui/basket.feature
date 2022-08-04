Feature:  UI tests for basket functionality

Background:
    * user visits homepage
    * user is logged in with existing account

Scenario: Verify message when product is added to basket
    When user adds one item to cart
    Then user verifies the opened pop up has the text "Product added"