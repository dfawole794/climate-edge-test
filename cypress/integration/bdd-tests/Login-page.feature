Feature: Login to Application

    As a valid user
    I want to log in into Application
    I want to reset my password

    Scenario Outline: Valid user login
      Given user visits Climate Edge url
      Then login page must be displayed
      Given user enter "<username>" and "<password>"
      And user clicks Login button
      Then user must be redirected to home page
      Given user hover on menu dropdown
      And user clicks "Log out" option
      Then user must be logged out 

     Examples:
        | username                 | password      |
        | test@climate-edge.co.uk  | Kickoff@2021  | 

    Scenario Outline: Invalid user login
      Given user visits Climate Edge url
      Then login page must be displayed
      Given user enter "<username>" and "<password>"
      And user clicks Login button
      Then error notification '<msg>' must be displayed
      And user must not be redirected to home page
      
     Examples:
        | username                 | password | |               msg           |
        | test@climate-edge.co.uk  | Value 2  | |Incorrect username or password.|

