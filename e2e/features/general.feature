Feature: Search for characters (people)
Background:
    Given I open the search form on "http://localhost:4200"

Scenario:
    Given the search outcome is displayed
    When I clear the search form
    And I press "Search" button
    Then I should get empty outcome

Scenario:
    When I search character with Luke Skywalker value and I press enter button
    Then I should get the outcome with Gender "male", Birth year "19BBY", Eye color "blue" and Skin color "fair"
    
    