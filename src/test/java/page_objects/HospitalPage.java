package page_objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HospitalPage { 

	private static WebDriver driver;
	public static By Hospital_link = By.linkText("Hospital");

	public static boolean isDisplayed(WebDriver driver, By xPath){
		return driver.findElement(xPath).isDisplayed();
	}


	public HospitalPage(WebDriver driver) {
		System.out.println("YahooPage constructor initiated....");
		
	}




}