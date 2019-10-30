@regression @wip
Feature: GitHub Repo Test
As a BDDot application tester,
I want to check the application.

Background:
    Given I launch the BDDOT home page
    
Scenario Outline: checking some elements from the home page
    When I select "<homePageLink_text>" link on the bddot home page
    Then I verify the selected page by the existence of the "<linkedPage_text>" text

Examples:
  |homePageLink_text|linkedPage_text|
	|DOCTOR|HOSPITAL|
	|HOSPITAL|HOSPITAL|
	|DIAGNOSTIC|DIAGNOSTIC|	
	|AMBULANCE|AMBULANCE|	





    