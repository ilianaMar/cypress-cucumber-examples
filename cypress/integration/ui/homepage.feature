Feature: UI tests for homepage

Scenario: Verify left menu navigation bar
    Given user visits homepage
    And  user checks menu items text
        | menuItemText      | 
        | Phones            |
        | Laptops           |
        | Monitors          |
    Then user verifies that count of left menu items is 3

Scenario: Verify that all the items show the price tag
    Given user visits homepage
    Then  user verifies that all products have a price