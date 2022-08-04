Feature: UI tests for homepage

Background: 
    * user visits homepage

Scenario: Verify left menu navigation bar
    And  user checks menu items text
        | menuItemText      | 
        | Phones            |
        | Laptops           |
        | Monitors          |
    Then user verifies that count of left menu items is 3

Scenario: Verify that all the items show the price tag
    Then  user verifies that all products have a price

Scenario: Verify that video from about you page is paused
    When user clicks on about you buttons
    Then  user verifies that video is paused