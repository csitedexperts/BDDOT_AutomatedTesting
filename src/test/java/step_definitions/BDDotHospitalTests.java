package step_definitions;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper_classes.Hooks;
import page_objects.BDDotDoctorPage;

public class BDDotHospitalTests extends BDDotDoctorPage{

	private static WebDriver driver;

	public BDDotHospitalTests() {
		super(driver);
		driver = Hooks.webDriver;
		System.out.println("This is the BDDotHospitalTests constructor....");
	}


	@When("^I click on the Privacy link$")
	public void i_click_on_the_Privacy_link() throws Throwable {
		driver.findElement(BDDotDoctorPage.Privacy_Link).click();
		Thread.sleep(2000);   // temporary wait
	}

	@Then("^I see the Privacy page$")
	public void i_see_the_Privacy_page() throws Throwable {
		Assert.assertEquals(true, driver.getPageSource().contains("Welcome to the Google Privacy Policy"));
		Thread.sleep(2000);   // temporary wait
	}

	@When("^I click on the Terms link$")
	public void i_click_on_the_Terms_link() throws Throwable {
		driver.findElement(BDDotDoctorPage.Terms_Link).click();

		Thread.sleep(2000);   // temporary wait
	}

	@Then("^I see the Terms page$")
	public void i_see_the_Terms_page() throws Throwable {
		Assert.assertEquals(true, driver.getPageSource().contains("Google Terms of Service"));
		Thread.sleep(2000);   // temporary wait
	}

	@When("^I select \"(.*?)\" link in the Google footer$")
	public void i_select_link_in_the_Google_footer(String footerLink_text) throws Throwable {

		driver.findElement(By.linkText(footerLink_text)).click();

		Thread.sleep(2000);   // temporary wait
	}

	@Then("^I verify the selected Google page by the existence of the \"(.*?)\" text$")
	public void i_verify_the_selected_Google_page_by_the_existence_of_the_text(String linkedPage_text) throws Throwable {
		Assert.assertEquals(true, driver.getPageSource().contains(linkedPage_text));
		Thread.sleep(2000);   // temporary wait
	}



	@Given("^I select the Privacy link in the Google footer$")
	public void i_select_the_Privacy_link_in_the_Google_footer() throws Throwable {
		driver.findElement(BDDotDoctorPage.Privacy_Link).click();
		Thread.sleep(2000);   // temporary wait
	}

	@When("^I click on the Privacy Policy tab$")
	public void i_click_on_the_Privacy_and_Policy_tab() throws Throwable {
		driver.findElement(By.linkText("Privacy Policy")).click();
		Thread.sleep(2000);   // temporary wait

	}
	
	@When("^I click on a specific Privacy Policy \"(.*?)\"$")
	public void i_click_on_a_specific_Privacy_Policy(String privacyPolicy_Link) throws Throwable {
		driver.findElement(By.linkText(privacyPolicy_Link)).click();
		Thread.sleep(2000);   // temporary wait
	}


}
