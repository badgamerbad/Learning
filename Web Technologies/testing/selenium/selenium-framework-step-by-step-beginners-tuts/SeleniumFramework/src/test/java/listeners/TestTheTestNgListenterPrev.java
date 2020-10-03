package listeners;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.SkipException;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;

import pages.GoogleSearchPage;

@Listeners(listeners.TestNgListener.class)
public class TestTheTestNgListenterPrev {
	private static WebDriver driver = null;
	
	@Test
	public void testNumber1 () {
		System.out.println("Test 1");
	}
	@Test
	public void testNumber2 () {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/drivers/chromeDriver/chromedriver.exe");
		driver = new ChromeDriver();
		
		driver.get("https://www.google.com");
		
		GoogleSearchPage gpo = new GoogleSearchPage(driver);
		
		gpo.SetTextElement("Automation step 1");
		gpo.clickOnSearchButton();
	}
	@Test
	public void testNumber3 () {
		System.out.println("Test 3");
		
		throw new SkipException("This is skipped");
	}
	
	@AfterSuite
	public void tearDown() {
		// close browser
		driver.close();
		driver.quit();
	}
}