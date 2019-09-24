package step_definitions;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
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
		Assert.assertEquals(true, driver.getPageSource().contains("Azizur Rahman"));
		Thread.sleep(2000);   // temporary wait

	}

	@Then("^I see the doctor filter$")
	public void i_see_doctor_name_filter() throws Throwable {
		Assert.assertTrue(driver.findElement(DoctorPage.Doctor_Name_Filter).isDisplayed());
		Assert.assertTrue(driver.findElement(DoctorPage.Search_Option_Search_Location).isDisplayed());
		Assert.assertTrue(driver.findElement(DoctorPage.Search_Option_Search_Type).isDisplayed());

		Thread.sleep(2000);   // temporary wait
	}
	
	@And("^I can click on the Search Type Dropdown$")
	public void i_click_search_type_dropdown() throws Throwable {
		driver.findElement(DoctorPage.Search_Option_Search_Type).click();
		Thread.sleep(2000);   // temporary wait
		
//		Select searchTypeValue = new Select(driver.findElement(DoctorPage.Search_Type_Dropdown));
//		Assert.assertEquals("Hospital", searchTypeValue.getOptions().get(1).getText());
//		
//		Thread.sleep(2000);   // temporary wait
	}
	
	@Then("^I see the availability sidebar$")
	public void i_see_availability_sidebar() throws Throwable {
		Assert.assertTrue(driver.findElement(DoctorPage.Availability_Side_Bar).isDisplayed());

		Thread.sleep(2000);   // temporary wait
	}

}
