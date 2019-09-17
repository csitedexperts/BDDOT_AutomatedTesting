@regression
Feature: BDDOT Homepage Checkup
As a BDDOT tester,
I want to test the landing homeage of the web application

Background:
    Given I launch the BDDOT home page
    And I scroll down to the end of the page

Scenario: Terms Link test
	When I click on the Terms link
	Then I see the Terms page


Scenario Outline: Selecting different footer links and checking the corresponding page
    When I select "<footerLink_text>" link in the Google footer
    Then I verify the selected Google page by the existence of the "<linkedPage_text>" text

Examples:
  	|footerLink_text|linkedPage_text|
	|Privacy|Welcome to the Google Privacy Policy|
	|Terms|Google Terms of Service|

