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
formatter.before({
  "duration": 4217394200,
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
  "name": "I launch the BDDOT home page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_BDDOT_home_page()"
});
formatter.result({
  "duration": 8842545100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 9,
      "value": "# And I scroll down to the end of the page"
    }
  ],
  "line": 10,
  "name": "Doctor Link test",
  "description": "",
  "id": "bddot-homepage-checkup;doctor-link-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I click on the doctor link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I see the doctor page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I see the doctor filter",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I can click on the Search Type Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see the availability sidebar",
  "keyword": "Then "
});
formatter.match({
  "location": "DoctorPageTests.i_click_on_the_doctor_link()"
});
formatter.result({
  "duration": 3985558900,
  "status": "passed"
});
formatter.match({
  "location": "DoctorPageTests.i_see_the_doctor_page()"
});
formatter.result({
  "duration": 2021982900,
  "status": "passed"
});
formatter.match({
  "location": "DoctorPageTests.i_see_doctor_name_filter()"
});
formatter.result({
  "duration": 2090671200,
  "status": "passed"
});
formatter.match({
  "location": "DoctorPageTests.i_click_search_type_dropdown()"
});
formatter.result({
  "duration": 2100178200,
  "error_message": "org.openqa.selenium.support.ui.UnexpectedTagNameException: Element should have been \"select\" but was \"input\"\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-HCJIH5F\u0027, ip: \u002710.78.155.49\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_222\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:47)\r\n\tat step_definitions.DoctorPageTests.i_click_search_type_dropdown(DoctorPageTests.java:53)\r\n\tat ✽.And I can click on the Search Type Dropdown(features/DoctorPageTest.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DoctorPageTests.i_see_availability_sidebar()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2765746900,
  "status": "passed"
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
});