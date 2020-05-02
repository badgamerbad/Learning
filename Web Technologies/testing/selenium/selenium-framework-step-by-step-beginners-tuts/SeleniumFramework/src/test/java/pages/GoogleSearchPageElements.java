package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class GoogleSearchPageElements {
	private static WebElement element = null;
	public static WebElement textBoxSearch(WebDriver driver) {
		element = driver.findElement(By.name("q"));
		return element;
	}
	public static WebElement buttonSearch(WebDriver driver) {
		element = driver.findElement(By.cssSelector("input.gNO89b"));
		return element;
	}
}
