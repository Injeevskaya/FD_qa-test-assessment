Feature: Search for characters (people)
Background:
    Given I open the search form on "http://localhost:4200"
    And I choose "people" radio-button

#first test-case - search with valid value (`Luke Skywalker`, `Leia Organa` or `r2` - outcome for one character)    
    Scenario: Searching with unique character
        
        When I search character with "Luke Skywalker" value
        And I press "Search" button
        Then I should get the outcome with Gender "male", Birth year "19BBY", Eye color "blue" and Skin color "fair"

#second test-case - search with valid value (`Darth` to see multiple results)    
    Scenario: Searching with non-unique character name
       
        When I search character with "Darth" value
        And I press "Search" button
        Then I should get the outcome with more then one character records

#third test-case - search with non-existent value (`r3`outcome is "“Not found”)    
    Scenario: Searching with non-existent character 
       
        When I search character with "r3" value
        And I press "Search" button
        Then I should find no character and get "Not found." message
        