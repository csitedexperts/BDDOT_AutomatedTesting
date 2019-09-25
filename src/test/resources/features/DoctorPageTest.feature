@regression
Feature: BDDOT Homepage Checkup
  As a BDDOT tester,
  I want to test the landing homeage of the web application

  Background: 
    Given I launch the BDDOT home page

  # And I scroll down to the end of the page
  Scenario: Doctor Link test
    When I click on the doctor link
    Then I see the doctor page
    Then I see the doctor filter
    And I can click on the Search Type Dropdown
    Then I see the availability sidebar
