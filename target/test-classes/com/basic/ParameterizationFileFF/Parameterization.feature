Feature: Create account on Facebook7
As a new user you need to open Facebook home page and do the validations

Scenario: Validate first name field71
Given User is on the Facebook login page
When User enters "Geeta" first name
Then User checks user "Geeta" first name is present
Then close Browser


Scenario: Validate multiple fields72
Given User is on the Facebook login page
When User enters "Geeta" first name
And User enters "Khatri" surname
Then User checks user "Geeta" first name is present
Then User Mobile Field should be blank
Then close Browser

