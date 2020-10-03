package waits;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ImplicitExplicitWaitDemo {
	public static void main(String[] args) {
		seleniumWaits();
	}
	public static void seleniumWaits() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/drivers/chromeDriver/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		
		driver.get("https://www.google.com");
		
		// Implicit wait - on all elements
		// polling time is 250ms
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		WebDriverWait wait = new WebDriverWait(driver, 20);
		
		WebElement textBox = driver.findElement(By.name("q"));
		textBox.sendKeys("Automation step 1");
		textBox.sendKeys(Keys.RETURN);
		
		// explicit wait
		WebElement fakeElement = wait.until(ExpectedConditions.elementToBeClickable(By.className("fake")));
		
		driver.close();
		driver.quit();
	}
}
