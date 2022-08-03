Feature: Api tests for entries endpoint

Scenario: Assert that entries endpoint return correct count
    Given user requests "entries" endpoint
    Then user asserts that 9 entries are loaded

Scenario: Assert entries endpoint items price 
    Given user requests "entries" endpoint
    And user asserts that 2 items price is "less" than 400 
    Then user asserts that 7 items price is "greater" than 400 

Scenario: Assert entries endpoint items category 
    Given user requests "entries" endpoint
    And user asserts that for category "phone" there is 7 items
    Then user asserts that for category "notebook" there is 2 items

Scenario: User adds items in the basket and verify that count is correct
    Given user logged in 
    When user "adds" "samsung galaxy s6" to the cart
    And user "adds" "htc one m9" to the cart
    Then user verifies if 2 items are placed in the cart

Scenario: User adds and remove items in the basket and verify that count is correct
    Given user logged in 
    When user "adds" "samsung galaxy s6" to the cart
    And user "adds" "htc one m9" to the cart
    Then user verifies if 2 items are placed in the cart
    When user "removes" "samsung galaxy s6" to the cart
    And user "removes" "htc one m9" to the cart
    Then user verifies if 0 items are placed in the cart