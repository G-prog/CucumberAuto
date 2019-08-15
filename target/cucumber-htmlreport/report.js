$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Tags.feature");
formatter.feature({
  "line": 3,
  "name": "Create account on Facebook8",
  "description": "As a new user you need to open Facebook home page and do the validations",
  "id": "create-account-on-facebook8",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Important"
    }
  ]
});
formatter.scenario({
  "line": 13,
  "name": "Validate first name field82",
  "description": "",
  "id": "create-account-on-facebook8;validate-first-name-field82",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Smoke"
    },
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on the Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User enters \"Tom\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User checks user \"Tom\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TagsSD.user_is_on_the_Facebook_login_page()"
});
formatter.result({
  "duration": 7080014200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 13
    }
  ],
  "location": "TagsSD.user_enters_first_name(String)"
});
formatter.result({
  "duration": 1150429600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 18
    }
  ],
  "location": "TagsSD.user_checks_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 1027360000,
  "status": "passed"
});
formatter.match({
  "location": "TagsSD.close_Browser()"
});
formatter.result({
  "duration": 1938937800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Validate first name field83",
  "description": "",
  "id": "create-account-on-facebook8;validate-first-name-field83",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is on the Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User enters \"Doraemon\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User checks user \"Doraemon\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TagsSD.user_is_on_the_Facebook_login_page()"
});
formatter.result({
  "duration": 7760695000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doraemon",
      "offset": 13
    }
  ],
  "location": "TagsSD.user_enters_first_name(String)"
});
formatter.result({
  "duration": 1233625800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doraemon",
      "offset": 18
    }
  ],
  "location": "TagsSD.user_checks_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 1022930501,
  "status": "passed"
});
formatter.match({
  "location": "TagsSD.close_Browser()"
});
formatter.result({
  "duration": 1587458500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validate multiple fields84",
  "description": "",
  "id": "create-account-on-facebook8;validate-multiple-fields84",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on the Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User enters \"Tom\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User enters \"Jerry\" surname",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User checks user \"Tom\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User Mobile Field should be blank",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TagsSD.user_is_on_the_Facebook_login_page()"
});
formatter.result({
  "duration": 8548761800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 13
    }
  ],
  "location": "TagsSD.user_enters_first_name(String)"
});
formatter.result({
  "duration": 1058217601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jerry",
      "offset": 13
    }
  ],
  "location": "TagsSD.user_enters_surname(String)"
});
formatter.result({
  "duration": 1036399400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 18
    }
  ],
  "location": "TagsSD.user_checks_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 1024783000,
  "status": "passed"
});
formatter.match({
  "location": "TagsSD.User_mobile_field_should_be_blank()"
});
formatter.result({
  "duration": 1024980900,
  "status": "passed"
});
formatter.match({
  "location": "TagsSD.close_Browser()"
});
formatter.result({
  "duration": 2237749901,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Validate multiple fields85",
  "description": "",
  "id": "create-account-on-facebook8;validate-multiple-fields85",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User is on the Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User enters \"Geeta\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User enters \"Khatri\" surname",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User checks user \"Geeta\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "User Mobile Field should be blank",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TagsSD.user_is_on_the_Facebook_login_page()"
});
formatter.result({
  "duration": 8731369900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Geeta",
      "offset": 13
    }
  ],
  "location": "TagsSD.user_enters_first_name(String)"
});
formatter.result({
  "duration": 1061655701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Khatri",
      "offset": 13
    }
  ],
  "location": "TagsSD.user_enters_surname(String)"
});
formatter.result({
  "duration": 1042350100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Geeta",
      "offset": 18
    }
  ],
  "location": "TagsSD.user_checks_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 1033791000,
  "status": "passed"
});
formatter.match({
  "location": "TagsSD.User_mobile_field_should_be_blank()"
});
formatter.result({
  "duration": 1034760799,
  "status": "passed"
});
formatter.match({
  "location": "TagsSD.close_Browser()"
});
formatter.result({
  "duration": 1374508401,
  "status": "passed"
});
});