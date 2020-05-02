package pages;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class GoogleSearchPage {
	WebDriver driver = null;
	public GoogleSearchPage(WebDriver driver) {
		this.driver = driver;
	}
	public void SetTextElement(String text) {
		GoogleSearchPageElements.textBoxSearch(driver).sendKeys(text);
	}
	public void searchText() {
		GoogleSearchPageElements.textBoxSearch(driver).sendKeys(Keys.RETURN);
	}
	public void clickOnSearchButton() {
		GoogleSearchPageElements.buttonSearch(driver).click();
	}
}
