Feature: Register Page

    Background:
        Given I open the register page

    Scenario: I can see the correct heading
        Then I see "Register heading" in the heading

    Scenario: Form validation messages appear
        When I click the submit button
        Then I can see all the form validation messages

    Scenario: Successful form submission alert works
        When I enter "Aleks" in the name field
        And I enter "email@example.com" in the email field
        And I enter "secret" in the password field
        And I click the submit button
        Then I can see the successful form submission alert
