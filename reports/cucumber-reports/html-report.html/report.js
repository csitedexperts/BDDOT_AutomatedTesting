$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/DoctorPageTest.feature");
formatter.feature({
  "line": 2,
  "name": "BDDOT Homepage Checkup",
  "description": "As a BDDOT tester,\r\nI want to test the landing homeage of the web application",
  "id": "bddot-homepage-checkup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.uri("features/HomePageTest.feature");
formatter.feature({
  "line": 2,
  "name": "GitHub Repo Test",
  "description": "As a BDDot application tester,\r\nI want to check the application.",
  "id": "github-repo-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "checking some elements from the home page",
  "description": "",
  "id": "github-repo-test;checking-some-elements-from-the-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I launch the bddot home page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see the bddot home page elements",
  "keyword": "Then "
});
formatter.uri("features/HospitalPageTests.feature");
formatter.feature({
  "line": 2,
  "name": "BDDOT Homepage Checkup",
  "description": "As a BDDOT tester,\r\nI want to test the landing homeage of the web application",
  "id": "bddot-homepage-checkup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5061129200,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I launch the OLD BDDOT home page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_OLD_BDDOT_home_page()"
});
formatter.result({
  "duration": 10120866500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Hospital Link test",
  "description": "",
  "id": "bddot-homepage-checkup;hospital-link-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I click on the Hospital link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see the Hospital page",
  "keyword": "Then "
});
formatter.match({
  "location": "HospitalPageTests.i_click_on_the_Hospital_link()"
});
formatter.result({
  "duration": 3064097700,
  "status": "passed"
});
formatter.match({
  "location": "HospitalPageTests.i_see_the_Hospital_page()"
});
formatter.result({
  "duration": 2019215300,
  "status": "passed"
});
formatter.after({
  "duration": 1680037100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Hospital Sidebar \"\u003cnameFilter\u003e\" test",
  "description": "",
  "id": "bddot-homepage-checkup;hospital-sidebar-\"\u003cnamefilter\u003e\"-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I click on the Hospital link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I see the Hospital page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I see the hospital sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I see the hospital name section",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I see the hospital name filter",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I input a hospital \"\u003cnameFilter\u003e\" into the filter",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click hospital name Apply Filter",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "bddot-homepage-checkup;hospital-sidebar-\"\u003cnamefilter\u003e\"-test;",
  "rows": [
    {
      "cells": [
        "nameFilter"
      ],
      "line": 23,
      "id": "bddot-homepage-checkup;hospital-sidebar-\"\u003cnamefilter\u003e\"-test;;1"
    },
    {
      "cells": [
        "Sharafat Hospital"
      ],
      "line": 24,
      "id": "bddot-homepage-checkup;hospital-sidebar-\"\u003cnamefilter\u003e\"-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4112097100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I launch the OLD BDDOT home page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_OLD_BDDOT_home_page()"
});
formatter.result({
  "duration": 7834642100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Hospital Sidebar \"Sharafat Hospital\" test",
  "description": "",
  "id": "bddot-homepage-checkup;hospital-sidebar-\"\u003cnamefilter\u003e\"-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on the Hospital link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I see the Hospital page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I see the hospital sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I see the hospital name section",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I see the hospital name filter",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I input a hospital \"Sharafat Hospital\" into the filter",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click hospital name Apply Filter",
  "keyword": "And "
});
formatter.match({
  "location": "HospitalPageTests.i_click_on_the_Hospital_link()"
});
formatter.result({
  "duration": 3209406100,
  "status": "passed"
});
formatter.match({
  "location": "HospitalPageTests.i_see_the_Hospital_page()"
});
formatter.result({
  "duration": 2011948100,
  "status": "passed"
});
formatter.match({
  "location": "HospitalPageTests.i_see_the_sidebar()"
});
formatter.result({
  "duration": 2028594300,
  "status": "passed"
});
formatter.match({
  "location": "HospitalPageTests.i_see_hospital_name_section()"
});
formatter.result({
  "duration": 28041800,
  "status": "passed"
});
formatter.match({
  "location": "HospitalPageTests.i_see_hospital_name_filter()"
});
formatter.result({
  "duration": 25129800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sharafat Hospital",
      "offset": 20
    }
  ],
  "location": "HospitalPageTests.i_input_hospital_name_into_filter(String)"
});
formatter.result({
  "duration": 2501898000,
  "status": "passed"
});
formatter.match({
  "location": "HospitalPageTests.i_click_hospital_name_apply_filter()"
});
formatter.result({
  "duration": 69963700,
  "status": "passed"
});
formatter.after({
  "duration": 1264974500,
  "status": "passed"
});
});