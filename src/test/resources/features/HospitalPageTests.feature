@regression
Feature: BDDOT Hospital Page Checks
  As a BDDOT tester,
  I want to test the landing homeage of the web application

  Background: 
    Given I launch the OLD BDDOT home page

  Scenario: Hospital Link test
    When I click on the Hospital link
    Then I see the Hospital page

  Scenario Outline: Hospital Sidebar filter "<nameFilter>" test
    When I click on the Hospital link
    Then I see the hospital sidebar
    Then I see the hospital name filter section
    And I input a hospital "<nameFilter>" into the filter
    Then There is only one hospital with "<nameFilter>" as a title

    Examples: 
      | nameFilter        |
      | Sharafat Hospital |

  Scenario Outline: Hospital Footer "<footerTitle>" test
    When I click on the Hospital link
    And I scroll to the bottom of hospital page
    Then I see "<footerTitle>" header
    And I scroll back to the hospital top
    Then I see hospital search total count

    Examples: 
      | footerTitle |
      | About Us    |
      | Copyright   |
      | News Letter |
