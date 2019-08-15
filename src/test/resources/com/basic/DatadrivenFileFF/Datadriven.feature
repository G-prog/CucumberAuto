Feature: Create account on Facebook2
As a new user you need to open Facebook home page and do the validations



Scenario Outline: Validate multiple fields21
Given User is on the Facebook login page
When User enters "<user>" first name
And User enters "<surname>" surname
Then User checks user "<user>" first name is present
Then User Mobile Field should be blank
Then close Browser


Examples:
|user |surname |
|Tom  |Jerry   |
|David|Roger   |
