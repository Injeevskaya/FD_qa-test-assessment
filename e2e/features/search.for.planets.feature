Feature: Search for planets
#### Search for planet
#When you search for **a planet** and it’s a valid one To search by search by planets use `Alderaan`, `Hoth`., then you should be able to see its
# “Population”, “Climate” and “Gravity”.
#When you search for a planet and it’s not a valid one, then you should be able to see “Not found” in the results.   

Background:
    Given I open the search form on "http://localhost:4200"
    And I choose "planets" radio-button

#first test-case - search with valid value (`Alderaan`, `Hoth` see single outcome)    
    Scenario: Searching with unique planet
        
        When I search planet with "Alderaan" value
        And I press "Search" button
        Then I should get the outcome with Population "2000000000", Climate "temperate" and  Gravity "1 standard"
        


#second test-case - search with notvalid value (`Aldy` outcome is "Not found")
     Scenario: Search with non-existent value        
        When I search planet with "Aldy" value
        And I press "Search" button
        Then I should find no planet and get "Not found." message




        