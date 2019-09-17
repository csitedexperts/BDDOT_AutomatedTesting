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
  "duration": 2663369007,
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
formatter.step({
  "line": 8,
  "name": "I scroll down to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_BDDOT_home_page()"
});
formatter.result({
  "duration": 8433607798,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_scroll_down_to_the_end_of_the_page()"
});
formatter.result({
  "duration": 2021903153,
  "status": "passed"
});
formatter.scenario({
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
formatter.match({
  "location": "DoctorPageTests.i_click_on_the_doctor_link()"
});
formatter.result({
  "duration": 4271465920,
  "status": "passed"
});
formatter.match({
  "location": "DoctorPageTests.i_see_the_doctor_page()"
});
formatter.result({
  "duration": 2034846093,
  "status": "passed"
});
formatter.after({
  "duration": 1220616659,
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
formatter.before({
  "duration": 1196328222,
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
formatter.step({
  "line": 8,
  "name": "I scroll down to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_BDDOT_home_page()"
});
formatter.result({
  "duration": 5314723734,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_scroll_down_to_the_end_of_the_page()"
});
formatter.result({
  "duration": 2017140795,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Hospital Link test",
  "description": "",
  "id": "bddot-homepage-checkup;hospital-link-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I click on the Hospital link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I see the Hospital page",
  "keyword": "Then "
});
formatter.match({
  "location": "HospitalPageTests.i_click_on_the_Hospital_link()"
});
formatter.result({
  "duration": 85907607,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Hospital\"}\n  (Session info: chrome\u003d76.0.3809.132)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.10240 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 80 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027MININT-3R3M1CE\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73), userDataDir\u003dC:\\Users\\mhossa12\\AppData\\Local\\Temp\\scoped_dir8052_18398}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d76.0.3809.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ae2c1d899e735f43b36912b863308a62\n*** Element info: {Using\u003dlink text, value\u003dHospital}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat step_definitions.HospitalPageTests.i_click_on_the_Hospital_link(HospitalPageTests.java:28)\r\n\tat ✽.When I click on the Hospital link(features/HospitalPageTests.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HospitalPageTests.i_see_the_Hospital_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1010305579,
  "status": "passed"
});
});