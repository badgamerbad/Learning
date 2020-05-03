package parellel;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class MultiBrowser {
	private static WebDriver driver = null;
	
	@BeforeTest
	@Parameters("browserName")
	public void setup(String browserName) {
		System.out.println("BrowserName is :" + browserName);
		System.out.println("Thread ID is :" +  Thread.currentThread().getId());
		
		if(browserName.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") + "/drivers/geckoDrivers/geckodriver.exe");
			driver = new FirefoxDriver();
		}
		else if (browserName.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/drivers/chromeDriver/chromedriver.exe");
			driver = new ChromeDriver();
		}
		else if (browserName.equalsIgnoreCase("ie")) {
			System.setProperty("webdriver.ie.driver", System.getProperty("user.dir") + "/drivers/ieDrivers/IEDriverServer.exe");
			driver = new InternetExplorerDriver();
		}
		else {
			return;
		}
	}
	
	@Test
	public void testCase() {
		driver.get("https://www.google.com");
	}
	
	@AfterTest
	public void tearDown() {
		// close browser
		driver.close();
		driver.quit();
	}
}
