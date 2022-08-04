Feature: Api tests examples

Background: 
    * user requests "entries" endpoint

Scenario: Assert that entries endpoint return correct count
    Then user asserts that 9 entries are loaded

Scenario: Assert entries endpoint items price 
    And user asserts that 2 items price is "less" than 400 
    Then user asserts that 7 items price is "greater" than 400 

Scenario: Assert entries endpoint items category 
    And user asserts that for category "phone" there is 7 items
    Then user asserts that for category "notebook" there is 2 items