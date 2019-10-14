package page_objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class DoctorPage { 


	private static WebDriver driver;
	public static By Doctor_link = By.linkText("DOCTOR");
	
	//Booking
	public static By Book_Appoinment_Header = By.xpath("//*[@id=\"__BVID__144___BV_modal_header_\"]/h5");
	public static By First_Doctor_Book_Link = By.xpath("//*[@id=\"app\"]/div/div[3]/div[2]/section/div/div[2]/div/div[2]/div[2]/div[1]/div/div/div[1]/button");
	public static By Patient_Name_Input = By.name("patientName");
	public static By Phone_Number = By.name("Phone");
	
	//Filter Bar
	public static By Search_Option_Search_Type = By.xpath("//*[@id=\"app\"]/div/div[3]/div[2]/section/div/div[1]/div[2]/div/div[1]/div/div");
	public static By Search_Type_Dropdown = By.xpath("//*[@id=\"app\"]/div/div[3]/div[2]/section/div/div[1]/div[2]/div/div[1]/div/div/div[1]/input");
	public static By Search_Option_Search_Location = By.xpath("//*[@id=\"app\"]/div/div[3]/div[2]/section/div/div[1]/div[2]/div/div[2]");
	public static By Search_Total_Count = By.xpath("//*[@id=\"app\"]/div/div[3]/div[2]/section/div/div[2]/div/div[2]/div[1]/div/span");
	
	//Side Bar
	private static String sideBarXPath = "//*[@id=\"app\"]/div/div[3]/div[2]/section/div/div[2]/div/div[1]/div";
	public static By Side_Bar = By.className("ListWidgets");
	public static By Availability_Side_Bar = By.xpath(sideBarXPath + "/div[1]/h4");
	public static By TimeRange_Side_Bar = By.xpath(sideBarXPath + "/div[2]/h4");
	public static By Consultation_Side_Bar = By.xpath(sideBarXPath + "/div[3]/h4");
//	public static By Consultation_Fee_Slider = By.id("FeeRange");
	public static By Rating_Side_Bar = By.xpath(sideBarXPath + "/div[4]/h4");
	public static By Rating_Five_Star = By.xpath(sideBarXPath + "/div[4]/div/div/div/span[5]");
	public static By Gender_Side_Bar = By.xpath(sideBarXPath + "/div[5]/h4");
	public static By Gender_Male_Check = By.id("gender_male");
	public static By Location_Side_Bar = By.xpath(sideBarXPath + "/div[6]/h4");
	
	//Footer
//	public static By About_Us_Footer = By.xpath("/html/body/footer/div[1]/div/div/div[2]/h3/b");
//	public static By News_Letter_Footer = By.xpath("/html/body/footer/div[1]/div/div/div[4]/h3/b");
//	public static By Copyright_Footer = By.xpath("/html/body/footer/div[2]/div/p");
//	public static By Scroll_Top_Footer = By.xpath("/html/body/footer/div[2]/span/a/i");
			
	public static boolean isDisplayed(WebDriver driver, By xPath){
		return driver.findElement(xPath).isDisplayed();
	}


	public DoctorPage(WebDriver driver) {
		System.out.println("DoctorPage constructor initiated....");
		//		super(driver);
		//		this.driver = driver;
	}

}