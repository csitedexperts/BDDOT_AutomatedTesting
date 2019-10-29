package step_definitions;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import helper_classes.Hooks;

public class CommonSteps {
//	static Logger log;
	private static WebDriver driver;

	public CommonSteps() {
		driver = Hooks.webDriver;
		driver.manage().window().maximize();

//		new GooglePage(driver);
	}



	@Given("^I launch the BDDOT home page$")
	public void i_launch_the_BDDOT_home_page() throws Throwable {
		driver.get("http://dev.bddot.com");
		
		Assert.assertEquals(true, driver.getPageSource().contains("Services"));
		Thread.sleep(2000);
	}

	@Given("^I launch the OLD BDDOT home page$")
	public void i_launch_the_OLD_BDDOT_home_page() throws Throwable {
		driver.get("http://www.bddot.com");
		
		Assert.assertEquals(true, driver.getPageSource().contains("SEARCH FOR DOCTOR/HOSPITAL"));
		Thread.sleep(2000);
	}


	// @Given("^I scroll down to the end of the page$")
	// public void i_scroll_down_to_the_end_of_the_page() throws Throwable {
		
	// 	((JavascriptExecutor) driver).executeScript("window.scrollTo(0, document.body.scrollHeight)");
	// 	Thread.sleep(2000);   // temporary wait
	
	// }

	

}
