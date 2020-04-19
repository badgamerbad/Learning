package tasks;

import org.openqa.selenium.WebDriver;

public class AfterSetup {
	public WebDriver driver;
	public void test() {
        driver.get("https://www.google.com");
        System.out.println(driver.getTitle());
        
        driver.close();
    }
	
	public void teardown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
