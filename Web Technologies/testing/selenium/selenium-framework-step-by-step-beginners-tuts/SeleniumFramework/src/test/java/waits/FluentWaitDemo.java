package waits;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.FluentWait;

import com.google.common.base.Function;

public class FluentWaitDemo {
	public static void main(String[] args) {
		testFluentWait();
	}
	public static void testFluentWait() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/drivers/chromeDriver/chromedriver.exe");
		WebDriver driver = new ChromeDriver();

		driver.get("https://www.google.com");

		WebElement textBox = driver.findElement(By.xpath("//input[@name='q']"));
		textBox.sendKeys("Automation step 1");
		textBox.sendKeys(Keys.RETURN);

		// Waiting 30 seconds for an element to be present on the page, checking
		// for its presence once every 5 seconds.
		Wait<WebDriver> wait = new FluentWait<WebDriver>(driver)
			.withTimeout(30, TimeUnit.SECONDS)
			.pollingEvery(5, TimeUnit.SECONDS)
			.ignoring(NoSuchElementException.class);

		WebElement foo = wait.until(new Function<WebDriver, WebElement>() {
			public WebElement apply(WebDriver driver) {
				return driver.findElement(By.linkText("Automation Step by Step - Raghav Pal - YouTube"));
			}
		});

		driver.close();
		driver.quit();
	}
}
