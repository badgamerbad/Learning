import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

public class DesiredCapabilityDemo {
	public static void main(String[] args) {
		DesiredCapabilities caps = new DesiredCapabilities();
		caps.setCapability("ignoreProtectedModeSettings", true);
		
		System.setProperty("webdriver.ie.driver", System.getProperty("user.dir") + "/drivers/ieDrivers/IEDriverServer.exe");
		WebDriver driver = new InternetExplorerDriver(caps);

		driver.get("http://www.google.com");
		
		driver.findElement(By.name("q")).sendKeys("ABCD");
		driver.findElement(By.name("q")).sendKeys(Keys.RETURN);
		
		driver.close();
		driver.quit();
	}
}