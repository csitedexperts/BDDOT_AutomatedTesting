@regression
Feature: BDDOT Homepage Checkup
As a BDDOT tester,
I want to test the landing homeage of the web application

 Background:
     Given I launch the OLD BDDOT home page

 Scenario: Hospital Link test
 	When I click on the Hospital link
 	Then I see the Hospital page

 Scenario Outline: Hospital Sidebar "<nameFilter>" test
  	When I click on the Hospital link
 		Then I see the Hospital page
  	Then I see the hospital sidebar
  	And I see the hospital name section
  	And I see the hospital name filter
  	And I input a hospital "<nameFilter>" into the filter
  	And I click hospital name Apply Filter
  	
  Examples:
   | nameFilter |
 	 | Sharafat Hospital |
