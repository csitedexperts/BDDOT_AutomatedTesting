$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/HomePageTest.feature");
formatter.feature({
  "line": 2,
  "name": "GitHub Repo Test",
  "description": "As a BDDot application tester,\r\nI want to check the application.",
  "id": "github-repo-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regressionnn"
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
  "name": "I select \"\u003chomePageLink_text\u003e\" link on the bddot home page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify the selected page by the existence of the \"\u003clinkedPage_text\u003e\" text",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "github-repo-test;checking-some-elements-from-the-home-page;",
  "rows": [
    {
      "cells": [
        "homePageLink_text",
        "linkedPage_text"
      ],
      "line": 14,
      "id": "github-repo-test;checking-some-elements-from-the-home-page;;1"
    },
    {
      "cells": [
        "DOCTOR",
        "HOSPITAL"
      ],
      "line": 15,
      "id": "github-repo-test;checking-some-elements-from-the-home-page;;2"
    },
    {
      "cells": [
        "HOSPITAL",
        "HOSPITAL"
      ],
      "line": 16,
      "id": "github-repo-test;checking-some-elements-from-the-home-page;;3"
    },
    {
      "cells": [
        "DIAGNOSTIC",
        "DIAGNOSTIC"
      ],
      "line": 17,
      "id": "github-repo-test;checking-some-elements-from-the-home-page;;4"
    },
    {
      "cells": [
        "AMBULANCE",
        "AMBULANCE"
      ],
      "line": 18,
      "id": "github-repo-test;checking-some-elements-from-the-home-page;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2109275962,
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
  "duration": 25228653045,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "checking some elements from the home page",
  "description": "",
  "id": "github-repo-test;checking-some-elements-from-the-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regressionnn"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I select \"DOCTOR\" link on the bddot home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify the selected page by the existence of the \"HOSPITAL\" text",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DOCTOR",
      "offset": 10
    }
  ],
  "location": "HomePageTests.i_select_link_on_the_bddot_home_page(String)"
});
formatter.result({
  "duration": 2106287172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HOSPITAL",
      "offset": 52
    }
  ],
  "location": "HomePageTests.i_verify_the_selected_page_by_the_existence_of_the_text(String)"
});
formatter.result({
  "duration": 2029215414,
  "status": "passed"
});
formatter.after({
  "duration": 1205231284,
  "status": "passed"
});
formatter.before({
  "duration": 1039119883,
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
  "duration": 25877799578,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "checking some elements from the home page",
  "description": "",
  "id": "github-repo-test;checking-some-elements-from-the-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regressionnn"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I select \"HOSPITAL\" link on the bddot home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify the selected page by the existence of the \"HOSPITAL\" text",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "HOSPITAL",
      "offset": 10
    }
  ],
  "location": "HomePageTests.i_select_link_on_the_bddot_home_page(String)"
});
formatter.result({
  "duration": 2082585008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HOSPITAL",
      "offset": 52
    }
  ],
  "location": "HomePageTests.i_verify_the_selected_page_by_the_existence_of_the_text(String)"
});
formatter.result({
  "duration": 2018216013,
  "status": "passed"
});
formatter.after({
  "duration": 1163220732,
  "status": "passed"
});
formatter.before({
  "duration": 1046788919,
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
  "duration": 63685844183,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "checking some elements from the home page",
  "description": "",
  "id": "github-repo-test;checking-some-elements-from-the-home-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regressionnn"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I select \"DIAGNOSTIC\" link on the bddot home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify the selected page by the existence of the \"DIAGNOSTIC\" text",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DIAGNOSTIC",
      "offset": 10
    }
  ],
  "location": "HomePageTests.i_select_link_on_the_bddot_home_page(String)"
});
formatter.result({
  "duration": 2063435408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DIAGNOSTIC",
      "offset": 52
    }
  ],
  "location": "HomePageTests.i_verify_the_selected_page_by_the_existence_of_the_text(String)"
});
formatter.result({
  "duration": 2011665720,
  "status": "passed"
});
formatter.after({
  "duration": 960941699,
  "status": "passed"
});
formatter.before({
  "duration": 1096351502,
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
