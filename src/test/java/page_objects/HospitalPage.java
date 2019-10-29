package page_objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HospitalPage { 

	private static WebDriver driver;
	public static By Hospital_link = By.linkText("HOSPITAL");
	
	//Filter Bar
	public static By Search_Option_Search_Type = By.id("SearchType");
	public static By Search_Option_Type_Dropdown = By.id("SearchTypeValue");
	public static By Search_Option_Search_Location = By.id("DictictName");
	public static By Search_Option_Location_Dropdown = By.id("DictictId");
	public static By Search_Total_Count = By.id("totalCount");
	public static By Hospital_Name_Filter = By.id("SpecilityOrDoctorName");
	public static By Hospital_Name_Filter_Value = By.id("SpecilityId");
	public static By Search_Button = By.id("primary-srch");
	
	public static By Total_Result = By.id("totalCount");
	
	//Side Bar
	public static By Side_Bar = By.className("sidebar");
	public static By Hospital_Name_Header = By.xpath("/html/body/section/div/div[1]/div/div[1]/h4");
	public static By Hospital_Name_Input_Filter = By.id("filterHospitalName");
	public static By Hospital_Reset_Filter_Button = By.id("reset-all");
	public static By Hospital_Apply_Filter_Button = By.id("apply-filter");
	public static By Location_Name_Header = By.xpath("/html/body/section/div/div[1]/div/div[3]/h4");
	public static By Location_Map_Image = By.xpath("/html/body/section/div/div[1]/div/div[3]/div/div/img");
	public static By Send_Request_Link = By.linkText("Send Request");
	
	//Main Content
	public static By Pagination_Group = By.xpath("/html/body/section/div/div[2]/div[2]");
	
	//Footer
	public static By BDDOT_Info_Header = By.xpath("/html/body/footer/div[1]/div/div/div[1]/h3");
	public static By BDDOT_Info_Body = By.xpath("/html/body/footer/div[1]/div/div/div[1]/p[1]"); //Simply Lorem Ipsum Text
	public static By About_Us_Header = By.xpath("/html/body/footer/div[1]/div/div/div[2]/h3");
	public static By About_Us_Body = By.xpath("/html/body/footer/div[1]/div/div/div[2]/p[1]");
	public static By About_Us_Body_Second = By.xpath("/html/body/footer/div[1]/div/div/div[2]/p[2]");
	public static By About_Us_Body_Read_More = By.linkText("read more >>");
	public static By News_Letter_Header = By.xpath("/html/body/footer/div[1]/div/div/div[4]/h3");
	public static By News_Letter_Text = By.xpath("/html/body/footer/div[1]/div/div/div[4]/p");
	public static By News_Letter_Input = By.name("Email");
	public static By News_Letter_Subscribe = By.xpath("/html/body/footer/div[1]/div/div/div[4]/form/button");
	public static By Footer_Copy_Right = By.xpath("/html/body/footer/div[2]/div/p");
	public static By Footer_Scroll_Top = By.xpath("/html/body/footer/div[2]/span/a/i");

	
	public static boolean isDisplayed(WebDriver driver, By xPath){
		return driver.findElement(xPath).isDisplayed();
	}


	public HospitalPage(WebDriver driver) {
		System.out.println("YahooPage constructor initiated....");
		
	}




}