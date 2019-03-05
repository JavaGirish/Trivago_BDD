$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchTrivago.feature");
formatter.feature({
  "line": 2,
  "name": "Trivago Website Testing",
  "description": "",
  "id": "trivago-website-testing",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "User is at Trivago Room5 website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "Search for a location on Room5 using search bar",
  "description": "",
  "id": "trivago-website-testing;search-for-a-location-on-room5-using-search-bar",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "correct link is open by the browser",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on search menu",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter the location \"England\" to search hotels",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefHelper.openBrowserAndEnterTheURL()"
});
formatter.result({
  "duration": 15562427807,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.verifyIfCorrectLinkIsOpenByTheBrowser()"
});
formatter.result({
  "duration": 116363399,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.clickOnSearchMenu()"
});
formatter.result({
  "duration": 2623896642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "England",
      "offset": 20
    }
  ],
  "location": "stepDefHelper.enterTheLocationToSearchHotels(String)"
});
formatter.result({
  "duration": 2583033766,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is at Trivago Room5 website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "Fill in the contact form and sent it",
  "description": "",
  "id": "trivago-website-testing;fill-in-the-contact-form-and-sent-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User click on the Contact web link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Input your message",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Input your Full Name",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Input your Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Tick the confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Submit the button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefHelper.openBrowserAndEnterTheURL()"
});
formatter.result({
  "duration": 14048875989,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.userClickOnTheContactWebLink()"
});
formatter.result({
  "duration": 490447543,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.inputYourMessage()"
});
formatter.result({
  "duration": 6083931567,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.inputYourFullName()"
});
formatter.result({
  "duration": 61687,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.inputYourEmailAddress()"
});
formatter.result({
  "duration": 48835,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.tickTheConfirmation()"
});
formatter.result({
  "duration": 49350,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.submitTheButton()"
});
formatter.result({
  "duration": 84305,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is at Trivago Room5 website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 24,
  "name": "Subscribe to the Newsletter",
  "description": "",
  "id": "trivago-website-testing;subscribe-to-the-newsletter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User search for newsletter option",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "input email address",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Submit the consent to receive newsletter",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefHelper.openBrowserAndEnterTheURL()"
});
formatter.result({
  "duration": 28910590132,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.userSearchForNewsletterOption()"
});
formatter.result({
  "duration": 21169366,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.inputEmailAddress()"
});
formatter.result({
  "duration": 366271511,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.submitTheConsentToReceiveNewsletter()"
});
formatter.result({
  "duration": 1672656969,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is at Trivago Room5 website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 32,
  "name": "Navigate to the destination through the menu on the top left",
  "description": "",
  "id": "trivago-website-testing;navigate-to-the-destination-through-the-menu-on-the-top-left",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User clicks on the menu button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Select a destination \"Midwest\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Verify he is navigated to correct destination",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefHelper.openBrowserAndEnterTheURL()"
});
formatter.result({
  "duration": 39446641180,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.userClicksOnTheMenuButton()"
});
formatter.result({
  "duration": 485154302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midwest",
      "offset": 22
    }
  ],
  "location": "stepDefHelper.selectADestination(String)"
});
formatter.result({
  "duration": 322586980,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.verifyHeIsNavigatedToCorrectDestination()"
});
formatter.result({
  "duration": 61687,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is at Trivago Room5 website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 39,
  "name": "Navigate to a different country through footer locate drop down",
  "description": "",
  "id": "trivago-website-testing;navigate-to-a-different-country-through-footer-locate-drop-down",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "Clicks on the drop down",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Selects a country \"Brasil\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User should be navigated to different country website",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefHelper.openBrowserAndEnterTheURL()"
});
formatter.result({
  "duration": 18751032612,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.clicksOnTheDropDown()"
});
formatter.result({
  "duration": 1142215821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brasil",
      "offset": 19
    }
  ],
  "location": "stepDefHelper.selectsACountry(String)"
});
formatter.result({
  "duration": 9285917265,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.userShouldBeNavigatedToDifferentCountryWebsite()"
});
formatter.result({
  "duration": 82249,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is at Trivago Room5 website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 46,
  "name": "Navigate to back to Home page through Trivago Logo",
  "description": "",
  "id": "trivago-website-testing;navigate-to-back-to-home-page-through-trivago-logo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@Test6"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "User is not on the home page",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "User clicks home trivago logo",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User should navigate back to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefHelper.openBrowserAndEnterTheURL()"
});
formatter.result({
  "duration": 10178816138,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.userIsNotOnTheHomePage()"
});
formatter.result({
  "duration": 4184761716,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.userClicksHomeTrivagoLogo()"
});
formatter.result({
  "duration": 123476400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.userShouldNavigateBackToHomePage()"
});
formatter.result({
  "duration": 66827,
  "status": "passed"
});
});