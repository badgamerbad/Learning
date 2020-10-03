package utils;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class ExcelDataProvider {
	private static WebDriver driver = null;
	
	@BeforeTest
	public void setupTest() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/drivers/chromeDriver/chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@Test(dataProvider = "excelData_v001")
	public void login(String uname, String pass) {
		driver.get("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
		driver.findElement(By.id("txtUsername")).sendKeys(uname);
		driver.findElement(By.id("txtPassword")).sendKeys(pass);
		
		driver.findElement(By.id("txtUsername")).sendKeys(Keys.RETURN);
	}
	
	@AfterTest
	public void tearDown() {
		// close browser
		driver.close();
		driver.quit();
	}
	
	@DataProvider(name = "excelData_v001")
	public Object[][] getData() {
		ExcelUtil excel = new ExcelUtil(System.getProperty("user.dir") + "/excel/file.xlsx", "data");

		int rowCount = excel.getRowCount();
		int colCount = excel.getColCount();

		Object data[][] = new Object[rowCount - 1][colCount];

		for(int i = 1; i < rowCount; ++i) {
			for(int j = 0; j < colCount; ++j) {
				data[i - 1][j] = excel.getStringData(i,  j); 
			}
		}

		return data;
	}
}
