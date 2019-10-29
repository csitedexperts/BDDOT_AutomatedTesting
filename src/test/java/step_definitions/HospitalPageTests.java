package step_definitions;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper_classes.Hooks;
import page_objects.DoctorPage;
import page_objects.HospitalPage;

public class HospitalPageTests extends HospitalPage{

	private static WebDriver driver;
	private static Actions action;

	public HospitalPageTests() {
		super(driver);
		driver = Hooks.webDriver;
		action = new Actions(driver);
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
	
	@Then("^I see the hospital sidebar$")
	public void i_see_the_sidebar() throws Throwable {
		Assert.assertTrue(driver.findElement(HospitalPage.Side_Bar).isDisplayed());
		Thread.sleep(2000);   // temporary wait
	}
	
	@And("^I see the hospital name section$")
	public void i_see_hospital_name_section() {
		Assert.assertTrue(driver.findElement(HospitalPage.Hospital_Name_Header).isDisplayed());
	}
	
	@And("^I see the hospital name filter$")
	public void i_see_hospital_name_filter() {
		Assert.assertTrue(driver.findElement(HospitalPage.Hospital_Name_Filter).isDisplayed());
	}
	
	@And("^I input a hospital \"([^\"]*)\" into the filter$")
	public void i_input_hospital_name_into_filter(String hospitalName) throws Throwable {
		driver.findElement(HospitalPage.Hospital_Name_Input_Filter).sendKeys(hospitalName);
		Thread.sleep(2000);
		action.sendKeys(Keys.ESCAPE).perform();
	}
	
	@And("^I click hospital name Apply Filter$")
	public void i_click_hospital_name_apply_filter() {
		driver.findElement(HospitalPage.Hospital_Apply_Filter_Button).click();
	}

}
