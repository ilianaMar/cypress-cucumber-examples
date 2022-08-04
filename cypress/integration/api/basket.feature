Feature: Api tests examples

Background: 
    * user logged in 

Scenario: User adds items in the basket and verify that count is correct
    When user "adds" "samsung galaxy s6" to the cart
    And user "adds" "htc one m9" to the cart
    Then user verifies if 2 items are placed in the cart

Scenario: User adds and remove items in the basket and verify that count is correct
    When user "adds" "samsung galaxy s6" to the cart
    And user "adds" "htc one m9" to the cart
    Then user verifies if 2 items are placed in the cart
    When user "removes" "samsung galaxy s6" from the cart
    And user "removes" "htc one m9" from the cart
    Then user verifies if 0 items are placed in the cart