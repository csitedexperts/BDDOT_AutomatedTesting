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
import page_objects.HospitalPage;

public class HospitalPageTests extends HospitalPage{

	private static WebDriver driver;

	public HospitalPageTests() {
		super(driver);
		driver = Hooks.webDriver;
		System.out.println("This is the BDDotHospitalTests constructor....");
	}


	@When("^I click on the Hospital link$")
	public void i_click_on_the_Hospital_link() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(HospitalPage.Hospital_link).click();
		Thread.sleep(2000);   // temporary wait

	}

	@Then("^I see the Hospital page$")
	public void i_see_the_Hospital_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(true, driver.getPageSource().contains("Sharafat Hospital"));
		Thread.sleep(2000);   // temporary wait

	}


}
