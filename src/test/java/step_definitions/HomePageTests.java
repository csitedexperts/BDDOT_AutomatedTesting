package step_definitions;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper_classes.Hooks;
import page_objects.DoctorPage;

public class HomePageTests extends DoctorPage{

	private static WebDriver driver;

	public HomePageTests() {
		super(driver);
		driver = Hooks.webDriver;
		System.out.println("This is the BDDotHospitalTests constructor....");
	}


	@When("^I select \"(.*?)\" link on the bddot home page$")
	public void i_select_link_on_the_bddot_home_page(String homeLink_text) throws Throwable {

		driver.findElement(By.linkText(homeLink_text)).click();

		Thread.sleep(2000);   // temporary wait
	}

	@Then("^I verify the selected page by the existence of the \"(.*?)\" text$")
	public void i_verify_the_selected_page_by_the_existence_of_the_text(String linkedPage_text) throws Throwable {
		Assert.assertEquals(true, driver.getPageSource().contains(linkedPage_text));
		Thread.sleep(2000);   // temporary wait
	}


}
