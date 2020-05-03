package headlessBrowsers;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class ChromeHeadless {
	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/drivers/chromeDriver/chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		
		// refer desired capabilities
		options.addArguments("--headless");
		options.addArguments("window-size=1280,800");
		
		WebDriver driver = new ChromeDriver(options);
	
		driver.get("https://www.google.com");
		System.out.println(driver.getTitle());
		
		driver.close();
		driver.quit();
	}
}
