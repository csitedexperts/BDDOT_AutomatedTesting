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

public class DoctorPageTests extends DoctorPage{

	private static WebDriver driver;

	public DoctorPageTests() {
		super(driver);
		driver = Hooks.webDriver;
		System.out.println("This is the BDDotHospitalTests constructor....");
	}

	@When("^I click on the doctor link$")
	public void i_click_on_the_doctor_link() throws Throwable {
		driver.findElement(DoctorPage.Doctor_link).click();

		Thread.sleep(2000);   // temporary wait
	}

	@Then("^I see the doctor page$")
	public void i_see_the_doctor_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 
		Assert.assertEquals(true, driver.getPageSource().contains("Azizur Rahman"));
		Thread.sleep(2000);   // temporary wait

	 }

}
