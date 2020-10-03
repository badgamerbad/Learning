package seleniumBasics;

import org.openqa.selenium.firefox.FirefoxDriver;

import io.github.bonigarcia.wdm.WebDriverManager;
import tasks.AfterSetup;

public class Mozilla extends AfterSetup {
	public void setupClass() {
    	WebDriverManager.firefoxdriver().setup();
    	driver = new FirefoxDriver();
    }
}
