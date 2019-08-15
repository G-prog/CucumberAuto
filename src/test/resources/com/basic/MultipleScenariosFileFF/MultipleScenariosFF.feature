Feature: Create account on Facebook6
As a new user you need to open Facebook home page and do the validations

Scenario: Validate first name field61
Given User is on the Facebook login page
When User enters first name
Then User checks user first name is present
Then close Browser


Scenario: Validate multiple fields62
Given User is on the Facebook login page
When User enters first name
And User enters surname
Then User checks user first name is present
Then User Mobile Field should be blank
Then close Browser

