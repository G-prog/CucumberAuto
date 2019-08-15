Feature: Create account on Facebook5
As a new user you need to open Facebook home page and do the validations

Scenario: Validate first name field51
Given User is on the Facebook login page
When User enters "Geeta" first name
Then User checks user "Geeta" first name is present



Scenario: Validate multiple fields52
Given User is on the Facebook login page
When User enters "Geeta" first name
And User enters "Khatri" surname
Then User checks user "Geeta" first name is present
Then User Mobile Field should be blank


