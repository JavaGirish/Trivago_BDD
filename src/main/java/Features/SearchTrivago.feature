Feature: Trivago Website Testing

  Background: User is at Trivago Room5 website

 
 	@Test1
   Scenario: Search for a location on Room5 using search bar
     Given Open Browser and input the URL
    When correct link is open by the browser
    Then Click on search menu
    And Enter the location "England" to search hotels
    And close the browser

  @Test2
     Scenario: Fill in the contact form and sent it
      Given Open Browser and input the URL
      When User click on the Contact web link
      Then Input your message
      And Input your Full Name
      And Input your Email Address
      And Tick the confirmation
      And Submit the button
      And close the browser

    @Test3
    Scenario: Subscribe to the Newsletter
      Given Open Browser and input the URL
      When User search for newsletter option
      Then input email address
      And Submit the consent to receive newsletter
      And close the browser


      @Test4
      Scenario: Navigate to the destination through the menu on the top left
        Given Open Browser and input the URL
        When User clicks on the menu button
        And Select a destination "Midwest"
        Then Verify he is navigated to correct destination
        And close the browser

        @Test5
        Scenario: Navigate to a different country through footer locate drop down
          Given Open Browser and input the URL
          When Clicks on the drop down
          And Selects a country "Brasil"
          Then User should be navigated to different country website
          And close the browser

          @Test6
          Scenario: Navigate to back to Home page through Trivago Logo
            Given Open Browser and input the URL
            When User is not on the home page
            And User clicks home trivago logo
            Then User should navigate back to Home Page
            And close the browser
