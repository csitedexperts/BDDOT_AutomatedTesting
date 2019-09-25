package page_objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class DoctorPage { 


	private static WebDriver driver;
	public static By Doctor_link = By.linkText("DOCTOR");
	
	//Filter Bar
	public static By Doctor_Name_Filter = By.id("SpecilityOrDoctorName");
	public static By Search_Option_Search_Type = By.id("SearchType");
	public static By Search_Type_Dropdown = By.name("SearchTypeValue");
	public static By Search_Option_Search_Location = By.id("DictictName");

	//Side Bar
	public static By Availability_Side_Bar = By.className("sidebar");
	
	public static boolean isDisplayed(WebDriver driver, By xPath){
		return driver.findElement(xPath).isDisplayed();
	}


	public DoctorPage(WebDriver driver) {
		System.out.println("DoctorPage constructor initiated....");
		//		super(driver);
		//		this.driver = driver;
	}

}