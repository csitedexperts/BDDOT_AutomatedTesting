@regression
Feature: BDDOT Homepage Checkup
  As a BDDOT tester,
  I want to test the landing homeage of the web application

  Background: 
    Given I launch the BDDOT home page

  Scenario: Doctor Link test
    When I click on the doctor link
    Then I see the doctor page

  Scenario: Doctor Filter test
  	When I click on the doctor link
  	When I am on the doctor page
  	Then I see the doctor filter
  	And I can click on the Search Type Dropdown
  	
  Scenario: Doctor Sidebar test
  	When I click on the doctor link
  	When I am on the doctor page
  	Then I see the sidebar
  	Then I see the availability section
  	And I see the timerange slider
  	Then I see the consultation fee section
  	And I see the consultation fee slider
		Then I see the rating section
  	And I can click the five star rating
  	Then I see the gender section
  	And I can click male
  	Then I see the location section
  
  Scenario: Doctor Footer test
  	When I click on the doctor link
  	When I am on the doctor page
  	Then I scroll to the bottom of the page
  	Then I see About Us header
  	And I see copyright 2018
  	And I see News Letter
  	Then I scroll back to the top
  	And I see search total count
  
  Scenario: Book doctor appointment
  	When I click on the doctor link
  	When I am on the doctor page
  	Then I want to book an appointment
  	Then I see book appointment popup
  	Then I input patient name
  	And I input phone number