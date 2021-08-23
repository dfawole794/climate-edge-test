Feature: Service Page

    As a valid 
    I want to visit Service page
    Broadcast text area changes colour when exceeding the maximum limit
    “+” button under the text area is also highlighted when exceeding the maximum limit


  Scenario: Broadcast character limits
    Given user is on Climate Edge home page
    And user clicks View button on Broadcast dialog box
    Then Broadcast text area must be displayed
    Given user fill Broadcast text area exceeding the maximum limit
    Then character counter must not be highlighted
    But if user fill Broadcast text area exceeding the maximum limit
    Then character counter and + button must be highlighted


  Scenario: click Add Series display form
    Given user is on Climate Edge home page
    And user clicks View button on Broadcast dialog box
    Then Broadcast text area must be displayed
    Given user clicks Add Series menu button
    Then Add Series form must be displayed
    


