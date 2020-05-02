package test;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import pages.GoogleSearchPage;

public class Google {
	private static WebDriver driver = null;
	String browserName = null;
	@BeforeTest
	public void setupTest() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/drivers/chromeDriver/chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@Test
	public void searchAndEnter() {
		driver.get("https://www.google.com");
		
		GoogleSearchPage gpo = new GoogleSearchPage(driver);
		
		gpo.SetTextElement("Automation step 1");
		gpo.searchText();
	}
	
	@Test
	public void searchAndClick() {
		driver.get("https://www.google.com");
		
		GoogleSearchPage gpo = new GoogleSearchPage(driver);
		
		gpo.SetTextElement("Automation step 1");
		gpo.clickOnSearchButton();
	}
	
	@AfterTest
	public void tearDown() {
		// close browser
		driver.close();
		driver.quit();
	}
}
