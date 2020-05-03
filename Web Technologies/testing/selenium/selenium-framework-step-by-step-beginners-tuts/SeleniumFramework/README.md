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
- implements the interface `ITestListener` which have metheods
	- onTestStart
	- onTestSuccess
	- onTestFailure
	
# Priorities
lowest number gets highest priority

```java
@Test(priority = 1)
public void test1() {
	System.out.println("Im inside the test 1");
}
@Test(priority = 2)
public void test2() {
	System.out.println("Im inside the test 2");
}
```

# Multi browser
- pareller execution of test cases

# Grouping
```java
// no need to put dots - these are simply for demo - to look good
@Test(groups = {"classes.all.methods"})
public class GroupingTests {
	@Test(groups = {"sanity"})
	public void testOne() {
		System.out.println("This is a test number 1 {\"sanity\"}");
	}
	@Test(groups = {"sanity", "smoke", "windows.regression"})
	public void testTwo() {
		System.out.println("This is a test number 2 {\"sanity\", \"smoke\"}");
	}
	@Test(groups = {"sanity", "linux.regression"})
	public void testThree() {
		System.out.println("This is a test number 3 {\"sanity\", \"regression\"}");
	}
	@Test
	public void testFour() {
		System.out.println("This is a test number 4 {None}");
	}
}
```

- TestNG XML file

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="Suite">
	<test name="Test NG Grouping - TEST">
		<groups>
			<define name="full regression">
				<include name="regression"></include>
				<include name="smoke"></include>
			</define>
			<run>
				<include name="smoke"></include>
				<include name="regression"></include>
				<!-- using regular expressions -->
				<include name="windows.*"></include>
			</run>
		</groups>
		<classes>
			<class name="grouping.GroupingTests" />
		</classes>
	</test>
	<!-- Test -->
</suite>
<!-- Suite -->
```

# Parameters
```java
public class ParametersTestNg {
	@Test
	@Parameters("name")
	public void testName(String name) {
		System.out.println("Name is " + name);
	}
	@Test
	@Parameters({"name"})
	public void testNameWithBrackets(String name) {
		System.out.println("Name with {} is " + name);
	}
	@Test
	@Parameters({"firstName", "lastname"})
	public void testFullName(@Optional("This is a default value") String fName, String lName) {
		System.out.println("full name is " + fName + " " + lName);
	}
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="Suite">
	<parameter name="name" value="foo"></parameter>
	<test name="test ng parameters">
		<parameter name="firstName" value="foo"></parameter>
		<parameter name="lastname" value="bar"></parameter>
		<classes>
			<class name="parameters.ParametersTestNg"></class>
		</classes>
	</test>
	<!-- Test -->
</suite>
<!-- Suite -->
```

# Ignore (JUnit)
```java
import org.junit.Ignore;
import org.testng.annotations.Test;

@Ignore
public class IgnoreDemo {
	@Test
	public void testOne() {
		System.out.println("Ignored");
	}
	@Test
	public void testTwo() {
		System.out.println("This will NOT be ignored");
	}
}
```

# Rerun or Retry failed cases

## Manually
- when the cases failes, a XML file is created inside test-output -> testng-failed.xml
	
## Auto with CLI
- Test NG Documentation - Retry Section [here](https://testng.org/doc/documentation-main.html)

```
java -classpath testng.jar;%CLASSPATH% org.testng.TestNG -d test-outputs testng.xml
java -classpath testng.jar;%CLASSPATH% org.testng.TestNG -d test-outputs test-outputs\testng-failed.xml
```

## Just After failure

- Create a Retry Analyzer

```java
package retry;

import org.testng.IRetryAnalyzer;
import org.testng.ITestResult;

public class RetryAnalyzer implements IRetryAnalyzer {
	private int retryCount = 0;
	private static final int maxRetryCount = 3;

	public boolean retry(ITestResult result) {
		if (retryCount < maxRetryCount) {
			retryCount++;
			return true;
		}
		return false;
	}
}
```

- use it in @Test

```java
@Test(retryAnalyzer = RetryAnalyzer.class)
public void testAssertFailure() {
	Assert.assertTrue(0 > 1);
}
```

# Katalon Recorder
- Add extention to the browser
- record the session and export (JAVA (Webdriver + TestNG))

# Waits

## Implicit
```java
// Implicit wait - on all elements
// polling time is 250ms
driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);	
```

## Explicit
```java
WebElement fakeElement = wait.until(ExpectedConditions.elementToBeClickable(By.className("fake")));
```

## Fluent
- a class in Selenium API
- we can apply wait to a specific element
- set max wait time period
- set polling frequency
- set to ignore specific exceptions

```java
Wait wait = new FluentWait(driver)
	.withTimeout(30, TimeUnit.SECONDS)
	.pollingEvery(5, TimeUnit.SECONDS)
	.ignore(NoSuchElementException.class)
```

# Headless Browsers [refer](https://www.selenium.dev/selenium/docs/api/java/)
```java
ChromeOptions options = new ChromeOptions();
		
// refer desired capabilities
options.addArguments("--headless");
options.addArguments("window-size=1280,800");

WebDriver driver = new ChromeDriver(options);
```

# Test NG with Maven CLI

- First we need to add plugin - surefire in pom.xml
- dynamically specify the name of the test Ng xml file with `<suiteXmlFile>${test-file}</suiteXmlFile>`

```xml
<project>
	[...]
	<build>
		<plugins>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-surefire-plugin</artifactId>
				<version>3.0.0-M4</version>
				<configuration>
					<suiteXmlFiles>
						<suiteXmlFile>${test-file}</suiteXmlFile>
					</suiteXmlFiles>
				</configuration>
			</plugin>
		</plugins>
	</build>
	[...]
<project
```

- CMD to execute the required file

```
# clears all downloaded jars
$ mvn clean

# reinstall after clean CMD
$ mvn install

# main cmd
$ mvn test -D test-file=test-ng-parameters.xml
```

- with includes

```xml
<configuration>
	<includes>
		<include>GroupingTests.java</include>
	</includes>
</configuration>
```