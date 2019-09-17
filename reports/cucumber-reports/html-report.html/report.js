$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BDDotHospitalLinkTests.feature");
formatter.feature({
  "line": 3,
  "name": "Google Footer links Checkup",
  "description": "As a Google Lover,\r\nI want to learn about the legal policies and terms of service of Google and Gmail.",
  "id": "google-footer-links-checkup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@GoogleFooterLinks"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 4219715096,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I launch the BDDOT home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I scroll down to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_BDDOT_home_page()"
});
formatter.result({
  "duration": 21965722926,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_scroll_down_to_the_end_of_the_page()"
});
formatter.result({
  "duration": 2019891467,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Terms Link test",
  "description": "",
  "id": "google-footer-links-checkup;terms-link-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I click on the Terms link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I see the Terms page",
  "keyword": "Then "
});
formatter.match({
  "location": "BDDotHospitalTests.i_click_on_the_Terms_link()"
});
formatter.result({
  "duration": 41935028,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Terms\"}\n  (Session info: chrome\u003d76.0.3809.132)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.10240 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 32 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027MININT-3R3M1CE\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73), userDataDir\u003dC:\\Users\\mhossa12\\AppData\\Local\\Temp\\scoped_dir14324_9489}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d76.0.3809.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 5938d8f096666e3a9d7740209a9ff0ed\n*** Element info: {Using\u003dlink text, value\u003dTerms}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat step_definitions.BDDotHospitalTests.i_click_on_the_Terms_link(BDDotHospitalTests.java:38)\r\n\tat ✽.When I click on the Terms link(features/BDDotHospitalLinkTests.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BDDotHospitalTests.i_see_the_Terms_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1147374873,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Selecting different footer links and checking the corresponding page",
  "description": "",
  "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I select \"\u003cfooterLink_text\u003e\" link in the Google footer",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I verify the selected Google page by the existence of the \"\u003clinkedPage_text\u003e\" text",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;",
  "rows": [
    {
      "cells": [
        "footerLink_text",
        "linkedPage_text"
      ],
      "line": 21,
      "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;1"
    },
    {
      "cells": [
        "Privacy",
        "Welcome to the Google Privacy Policy"
      ],
      "line": 22,
      "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;2"
    },
    {
      "cells": [
        "Terms",
        "Google Terms of Service"
      ],
      "line": 23,
      "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1329926742,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I launch the BDDOT home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I scroll down to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_BDDOT_home_page()"
});
formatter.result({
  "duration": 2141298351,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d76.0.3809.132)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.10240 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.14 seconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027MININT-3R3M1CE\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73), userDataDir\u003dC:\\Users\\mhossa12\\AppData\\Local\\Temp\\scoped_dir6604_28230}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d76.0.3809.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 997143da8240c9245b49c56b2a068d32\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:364)\r\n\tat step_definitions.CommonSteps.i_launch_the_BDDOT_home_page(CommonSteps.java:22)\r\n\tat ✽.Given I launch the BDDOT home page(features/BDDotHospitalLinkTests.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CommonSteps.i_scroll_down_to_the_end_of_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "Selecting different footer links and checking the corresponding page",
  "description": "",
  "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GoogleFooterLinks"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I select \"Privacy\" link in the Google footer",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I verify the selected Google page by the existence of the \"Welcome to the Google Privacy Policy\" text",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Privacy",
      "offset": 10
    }
  ],
  "location": "BDDotHospitalTests.i_select_link_in_the_Google_footer(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to the Google Privacy Policy",
      "offset": 59
    }
  ],
  "location": "BDDotHospitalTests.i_verify_the_selected_Google_page_by_the_existence_of_the_text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 976302751,
  "status": "passed"
});
