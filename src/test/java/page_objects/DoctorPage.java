package page_objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class DoctorPage { 


	private static WebDriver driver;
	public static By Doctor_link = By.linkText("DOCTOR");
	
	//Booking
	public static By Book_Appoinment_Header = By.xpath("/html/body/div[1]/h3");
	public static By First_Doctor_Book_Link = By.xpath("/html/body/section/div/div[2]/div[1]/div[2]/div[3]/div[2]/a");
	public static By Patient_Name_Input = By.id("PatientName");
	public static By Phone_Number = By.id("Phone");
	
	//Filter Bar
	public static By Doctor_Name_Filter = By.id("SpecilityOrDoctorName");
	public static By Search_Option_Search_Type = By.id("SearchType");
	public static By Search_Type_Dropdown = By.id("SearchTypeValue");
	public static By Search_Option_Search_Location = By.id("DictictName");
	public static By Search_Total_Count = By.id("totalCount");
	
	//Side Bar
	public static By Side_Bar = By.className("sidebar");
	public static By Availability_Side_Bar = By.xpath("/html/body/section/div/div[1]/div/h4[1]");
	public static By Availability_Timer_Slider = By.id("TimeRange");
	public static By Consultation_Side_Bar = By.xpath("/html/body/section/div/div[1]/div/h4[2]");
	public static By Consultation_Fee_Slider = By.id("FeeRange");
	public static By Rating_Side_Bar = By.xpath("/html/body/section/div/div[1]/div/h4[3]");
	public static By Rating_Five_Star = By.id("rating_5");
	public static By Gender_Side_Bar = By.xpath("/html/body/section/div/div[1]/div/h4[4]");
	public static By Gender_Male_Check = By.id("gender_male");
	public static By Location_Side_Bar = By.xpath("/html/body/section/div/div[1]/div/h4[5]");
	
	//Footer
	public static By About_Us_Footer = By.xpath("/html/body/footer/div[1]/div/div/div[2]/h3/b");
	public static By News_Letter_Footer = By.xpath("/html/body/footer/div[1]/div/div/div[4]/h3/b");
	public static By Copyright_Footer = By.xpath("/html/body/footer/div[2]/div/p");
	public static By Scroll_Top_Footer = By.xpath("/html/body/footer/div[2]/span/a/i");
			
	public static boolean isDisplayed(WebDriver driver, By xPath){
		return driver.findElement(xPath).isDisplayed();
	}


	public DoctorPage(WebDriver driver) {
		System.out.println("DoctorPage constructor initiated....");
		//		super(driver);
		//		this.driver = driver;
	}

}