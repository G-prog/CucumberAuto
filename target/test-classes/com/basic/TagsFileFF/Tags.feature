
@Important
Feature: Create account on Facebook8
As a new user you need to open Facebook home page and do the validations

Scenario: Validate first name field81
Given User is on the Facebook login page
When User enters "Geeta" first name
Then User checks user "Geeta" first name is present
Then close Browser

@Smoke @Regression
Scenario: Validate first name field82
Given User is on the Facebook login page
When User enters "Tom" first name
Then User checks user "Tom" first name is present
Then close Browser

@Smoke
Scenario: Validate first name field83
Given User is on the Facebook login page
When User enters "Doraemon" first name
Then User checks user "Doraemon" first name is present
Then close Browser

@Regression
Scenario: Validate multiple fields84
Given User is on the Facebook login page
When User enters "Tom" first name
And User enters "Jerry" surname
Then User checks user "Tom" first name is present
Then User Mobile Field should be blank
Then close Browser

@Smoke
Scenario: Validate multiple fields85
Given User is on the Facebook login page
When User enters "Geeta" first name
And User enters "Khatri" surname
Then User checks user "Geeta" first name is present
Then User Mobile Field should be blank
Then close Browser

