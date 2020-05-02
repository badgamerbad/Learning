# Selenium MAVEN Project

## ArcheType
- Simple

<b>Note: </b> we can choose from archetypes - org.apache.maven.archtypes i.e `mavan-archetype-quickstart`

# POM - Page object Model
- Create a separate object Repository to store object locators
- for each web page there should be a separate page class
	- page class will have all the object locators and action methods

# Test NG
- GitHub link can be found over [here](https://testng.org/doc/download.html)
- once installed we can add MAVEN dependencies and add Test NG annotations
- to start, we can remove the Main method and use the page file to start Test NG

# Extent Report
- give a beautiful report in HTML
- can be used with Test NG

# Desired Capabilities
- A class in Selenium Library
- key/ value pair
- used to set properties for browsers
	- Browser Name
	- Platform
	- Version
	- etc

```java
DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("ignoreProtectedModeSettings", true);

WebDriver driver = new InternetExplorerDriver(caps);
```
# Generating `testing.xml`
- Right click on Test NG class and Test NG -> convert to TestNG

# Log4j
## Property file
	1. Loggers
	2. Appenders
	3. Layouts

# Excel
- Read/ Write data in Excel files

# TestNG Data Provider
```java
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

@Test(dataProvider = "excelData_v001")
public void login(String uname, String pass) {
	driver.get("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
	driver.findElement(By.id("txtUsername")).sendKeys(uname);
	driver.findElement(By.id("txtPassword")).sendKeys(pass);
	
	driver.findElement(By.id("txtUsername")).sendKeys(Keys.RETURN);
}
```

# TestNG Listeners