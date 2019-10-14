package step_definitions;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

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

	@When("^I am on the doctor page$")
	public void i_am_on_the_doctor_page() throws Throwable {
		Assert.assertEquals("http://dev.bddot.com/doctor", driver.getCurrentUrl());
		Thread.sleep(2000);   // temporary wait
	}
	
	@Then("^I see the doctor filter$")
	public void i_see_doctor_name_filter() throws Throwable {
		Assert.assertTrue(driver.findElement(DoctorPage.Search_Option_Search_Location).isDisplayed());
		Assert.assertTrue(driver.findElement(DoctorPage.Search_Option_Search_Type).isDisplayed());

		Thread.sleep(2000);   // temporary wait
	}
	
	@And("^I can click on the Search Type Dropdown$")
	public void i_click_search_type_dropdown() throws Throwable {
		driver.findElement(DoctorPage.Search_Option_Search_Type).click();
		Thread.sleep(2000);   // temporary wait
		
//		Select searchTypeValue = new Select(driver.findElement(DoctorPage.Search_Type_Dropdown));
//		searchTypeValue.selectByVisibleText("Hospital");
//		Assert.assertEquals("Hospital", searchTypeValue.getOptions().get(1).getText());
		
		Thread.sleep(2000);   // temporary wait
	}
	
	@Then("^I see the sidebar$")
	public void i_see_the_sidebar() throws Throwable {
		Assert.assertTrue(driver.findElement(DoctorPage.Side_Bar).isDisplayed());

		Thread.sleep(2000);   // temporary wait
	}
	
	@Then("^I see the availability section$")
	public void i_see_availability_section() {
		Assert.assertTrue(driver.findElement(DoctorPage.Availability_Side_Bar).isDisplayed());
	}
	
	@And("^I see the timerange slider$")
	public void i_see_availability_time_slider() {
		Assert.assertTrue(driver.findElement(DoctorPage.TimeRange_Side_Bar).isDisplayed());
	}
	
	@Then("^I see the consultation fee section$")
	public void i_see_consultation_section() {
		Assert.assertTrue(driver.findElement(DoctorPage.Consultation_Side_Bar).isDisplayed());
	}

	@And("^I see the consultation fee slider$")
	public void i_see_consultation_fee_slider() {
//		Assert.assertEquals("0,5000", driver.findElement(DoctorPage.Consultation_Fee_Slider).getAttribute("value"));
	}
	
	@Then("^I see the rating section$")
	public void i_see_rating_section() throws Throwable {
		WebElement element = driver.findElement(DoctorPage.Rating_Side_Bar);
		((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true)", element);
		Thread.sleep(5000);
		Assert.assertTrue(driver.findElement(DoctorPage.Rating_Side_Bar).isDisplayed());
	}
	
	@And("^I can click the five star rating$")
	public void i_click_five_star() {
//		driver.findElement(DoctorPage.Rating_Five_Star).click();
		Assert.assertFalse(driver.findElement(DoctorPage.Rating_Five_Star).isSelected());
	}
	
	@Then("^I see the gender section$")
	public void i_see_gender_section() {
		driver.findElement(DoctorPage.Gender_Side_Bar).isDisplayed();
	}
	
	@And("^I can click male$")
	public void i_click_male() {
//		driver.findElement(DoctorPage.Gender_Male_Check).click();
		Assert.assertFalse(driver.findElement(DoctorPage.Gender_Male_Check).isSelected());
	}
	
	@Then("^I see the location section$")
	public void i_see_location_section() {
		driver.findElement(DoctorPage.Location_Side_Bar).isDisplayed();
	}
	
	@Then("^I scroll to the bottom of the page$")
	public void i_scroll_to_bottom() throws Throwable {
		((JavascriptExecutor) driver).executeScript("window.scrollTo(0,document.body.scrollHeight)");
		Thread.sleep(5000);
	}
	
//	@Then("^I see About Us header$")
//	public void i_see_about_header() {
//		Assert.assertEquals("ABOUT US", driver.findElement(DoctorPage.About_Us_Footer).getText());
//	}
//	
//	@And("^I see copyright 2018$")
//	public void i_see_copyright() {
//		Assert.assertEquals("© Copyright 2018 BDDOT. All rights reserved.", driver.findElement(DoctorPage.Copyright_Footer).getText());
//	}
//	
//	@And("^I see News Letter$")
//	public void i_see_news_letter() {
//		Assert.assertEquals("NEWS LETTER", driver.findElement(DoctorPage.News_Letter_Footer).getText());
//	}
//
//	@Then("^I scroll back to the top$")
//	public void i_scroll_to_the_top() throws Throwable {
////		((JavascriptExecutor) driver).executeScript("window.scrollTo(0,0)");
//		driver.findElement(DoctorPage.Scroll_Top_Footer).click();
//		Thread.sleep(5000);
//	}

	@And("^I see search total count$")
	public void i_see_search_total_after_scroll() {
		Assert.assertTrue(driver.findElement(DoctorPage.Search_Total_Count).isDisplayed());
	}
	
	@Then("^I want to book an appointment$")
	public void i_want_to_book_appointment() throws Throwable{
		driver.findElement(DoctorPage.First_Doctor_Book_Link).click();
//        WebDriverWait wait = new WebDriverWait(driver, 10);
//        wait.until(ExpectedConditions.visibilityOf(driver.findElement(DoctorPage.Book_Appoinment_Header)));
        Thread.sleep(2000);
	}
	
	@Then("^I see book appointment popup")
	public void i_see_booking_popup() {
//		Assert.assertTrue(driver.findElement(DoctorPage.Book_Appoinment_Header).isDisplayed());
	}
	
	@Then("^I input patient name$")
	public void i_input_patient_name() throws Throwable {
//		WebElement element = driver.findElement(DoctorPage.Patient_Name_Input);
//		Assert.assertEquals("Patient Name", element.getAttribute("placeholder"));
//		element.sendKeys("Test Patient");
//		Thread.sleep(2000);
//		Assert.assertEquals("Test Patient", element.getAttribute("value"));
	}
	
	@And("^I input phone number$")
	public void i_input_phone_number() throws Throwable {
//		WebElement element = driver.findElement(DoctorPage.Phone_Number);
//		Assert.assertEquals("Phone #", element.getAttribute("placeholder"));
//		element.sendKeys("6786223049");
//		Thread.sleep(2000);
//		Assert.assertEquals("6786223049", element.getAttribute("value"));
	}
}
