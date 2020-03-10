$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchTrivago.feature");
formatter.feature({
  "line": 1,
  "name": "Trivago Website Testing",
  "description": "",
  "id": "trivago-website-testing",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
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
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefHelper.openBrowserAndEnterTheURL()"
});
formatter.result({
  "duration": 112648077400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.verifyIfCorrectLinkIsOpenByTheBrowser()"
});
formatter.result({
  "duration": 765303600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.clickOnSearchMenu()"
});
formatter.result({
  "duration": 2196740600,
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
  "duration": 5464808200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.close_the_browser()"
});
formatter.result({
  "duration": 10445823600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is at Trivago Room5 website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 15,
  "name": "Fill in the contact form and sent it",
  "description": "",
  "id": "trivago-website-testing;fill-in-the-contact-form-and-sent-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User click on the Contact web link",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Input your message",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Input your Full Name",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Input your Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Tick the confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Submit the button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefHelper.openBrowserAndEnterTheURL()"
});
formatter.result({
  "duration": 43995169700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.userClickOnTheContactWebLink()"
});
formatter.result({
  "duration": 2541990000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.inputYourMessage()"
});
formatter.result({
  "duration": 25189178400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.inputYourFullName()"
});
formatter.result({
  "duration": 93300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.inputYourEmailAddress()"
});
formatter.result({
  "duration": 97700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.tickTheConfirmation()"
});
formatter.result({
  "duration": 99900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.submitTheButton()"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.close_the_browser()"
});
formatter.result({
  "duration": 5855257100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is at Trivago Room5 website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 26,
  "name": "Subscribe to the Newsletter",
  "description": "",
  "id": "trivago-website-testing;subscribe-to-the-newsletter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User search for newsletter option",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "input email address",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Submit the consent to receive newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefHelper.openBrowserAndEnterTheURL()"
});
formatter.result({
  "duration": 64164240000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.userSearchForNewsletterOption()"
});
formatter.result({
  "duration": 555133700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.inputEmailAddress()"
});
formatter.result({
  "duration": 16085381300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.submitTheConsentToReceiveNewsletter()"
});
formatter.result({
  "duration": 11030694600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.close_the_browser()"
});
formatter.result({
  "duration": 6166646500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is at Trivago Room5 website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 35,
  "name": "Navigate to the destination through the menu on the top left",
  "description": "",
  "id": "trivago-website-testing;navigate-to-the-destination-through-the-menu-on-the-top-left",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User clicks on the menu button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Select a destination \"Midwest\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify he is navigated to correct destination",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefHelper.openBrowserAndEnterTheURL()"
});
formatter.result({
  "duration": 62047988700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.userClicksOnTheMenuButton()"
});
formatter.result({
  "duration": 5968123500,
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
  "duration": 20590473000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.verifyHeIsNavigatedToCorrectDestination()"
});
formatter.result({
  "duration": 154200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.close_the_browser()"
});
formatter.result({
  "duration": 5751752500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is at Trivago Room5 website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 43,
  "name": "Navigate to a different country through footer locate drop down",
  "description": "",
  "id": "trivago-website-testing;navigate-to-a-different-country-through-footer-locate-drop-down",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "Clicks on the drop down",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "Selects a country \"Brasil\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User should be navigated to different country website",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefHelper.openBrowserAndEnterTheURL()"
});
formatter.result({
  "duration": 53307316600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.clicksOnTheDropDown()"
});
formatter.result({
  "duration": 1512511400,
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
  "duration": 23771965900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.userShouldBeNavigatedToDifferentCountryWebsite()"
});
formatter.result({
  "duration": 148500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.close_the_browser()"
});
formatter.result({
  "duration": 3382971300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is at Trivago Room5 website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 51,
  "name": "Navigate to back to Home page through Trivago Logo",
  "description": "",
  "id": "trivago-website-testing;navigate-to-back-to-home-page-through-trivago-logo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@Test6"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "User is not on the home page",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "User clicks home trivago logo",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User should navigate back to Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefHelper.openBrowserAndEnterTheURL()"
});
formatter.result({
  "duration": 47797831100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.userIsNotOnTheHomePage()"
});
formatter.result({
  "duration": 4279147000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.userClicksHomeTrivagoLogo()"
});
formatter.result({
  "duration": 17558833800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.userShouldNavigateBackToHomePage()"
});
formatter.result({
  "duration": 307500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefHelper.close_the_browser()"
});
formatter.result({
  "duration": 3596132000,
  "status": "passed"
});
});