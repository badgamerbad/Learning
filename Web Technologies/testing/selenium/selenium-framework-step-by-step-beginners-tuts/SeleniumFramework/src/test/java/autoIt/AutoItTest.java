package autoIt;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AutoItTest {
	public static void main(String[] args) {
		autoIt();
	}
	public static void autoIt() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/drivers/chromeDriver/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
	
		driver.get("https://filebin.net/");
		driver.findElement(By.id("fileField")).click();
		
		try {
			Runtime.getRuntime().exec(System.getProperty("user.dir") + "/autoIt/file-upload-selector-script.exe");
			
			Thread.sleep(3000);
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		
		driver.close();
		driver.quit();
	}
}
