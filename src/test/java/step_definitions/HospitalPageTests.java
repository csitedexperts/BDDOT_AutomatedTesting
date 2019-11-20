package step_definitions;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper_classes.Hooks;
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
		driver.findElement(HospitalPage.Hospital_link).click();
		Thread.sleep(2000);   // temporary wait
	}

	@Then("^I see the Hospital page$")
	public void i_see_the_Hospital_page(){
		Assert.assertTrue(driver.getPageSource().toLowerCase().contains("hospital"));
	}
	
	@Then("^I see the hospital sidebar$")
	public void i_see_the_sidebar(){
		Assert.assertTrue(driver.findElement(HospitalPage.Side_Bar).isDisplayed());
	}
	
	@Then("^I see the hospital name filter section$")
	public void i_see_hospital_name_section() {
		Assert.assertTrue(driver.findElement(HospitalPage.Hospital_Name_Header).isDisplayed());
		Assert.assertTrue(driver.findElement(HospitalPage.Hospital_Name_Filter).isDisplayed());
	}
	
	@And("^I input a hospital \"(.*?)\" into the filter$")
	public void i_input_hospital_name_into_filter(String hospitalName) throws Throwable {
		driver.findElement(HospitalPage.Hospital_Name_Input_Filter).sendKeys(hospitalName);
		driver.findElement(HospitalPage.Hospital_Name_Input_Filter).sendKeys(Keys.ESCAPE);
		Thread.sleep(2000);
//		driver.findElement(HospitalPage.Hospital_Name_Input_Filter).sendKeys(Keys.ENTER);
//		action.sendKeys(Keys.ESCAPE).perform();
		Thread.sleep(2000);
//		driver.findElement(HospitalPage.Hospital_Apply_Filter_Button).click();
		Thread.sleep(2000);
	}
	
	@Then("There is only one hospital with \"(.*?)\" as a title")
	public void i_see_hospitals(String hospitalTitle) {
		Assert.assertTrue(driver.getCurrentUrl().contains(hospitalTitle));
	}
	
	@And("^I scroll to the bottom of hospital page$")
	public void i_scroll_to_bottom() throws Throwable {
		((JavascriptExecutor) driver).executeScript("window.scrollTo(0,document.body.scrollHeight)");
		Thread.sleep(2000);
	}
	
	@Then("^I see \"(.*?)\" header$")
	public void i_see_about_header(String headerTitle) {
		if (headerTitle.equals("About Us")) 
			Assert.assertEquals("ABOUT US", driver.findElement(HospitalPage.About_Us_Header).getText());
		else if (headerTitle.equals("Copyright")) 
			Assert.assertEquals("© Copyright 2018 BDDOT. All rights reserved.", driver.findElement(HospitalPage.Footer_Copy_Right).getText());
		else if (headerTitle.equals("News Letter")) 
			Assert.assertEquals("NEWS LETTER", driver.findElement(HospitalPage.News_Letter_Header).getText());
		else
			Assert.assertTrue(false);
	}
	
	@And("^I scroll back to the hospital top$")
	public void i_scroll_to_the_top() throws Throwable {
		driver.findElement(HospitalPage.Footer_Scroll_Top).click();
		Thread.sleep(2000);
	}
	
	@Then("^I see hospital search total count$")
	public void i_see_search_total_after_scroll() {
		Assert.assertTrue(driver.findElement(HospitalPage.Search_Total_Count).isDisplayed());
	}

}
