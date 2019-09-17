@regression
Feature: GitHub Repo Test
As a BDDot application tester,
I want to check the application.

Background:
    Given I launch the bddot home page url

Scenario Outline: checking some elements from the home page
    When I launch the bddot home page
		Then I see the bddot home page elements
    