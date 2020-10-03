package test;

import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.MediaEntityBuilder;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

public class ExtentReportTestNg {
	ExtentHtmlReporter htmlReporter = null;
	ExtentReports extent = null;
	ExtentTest googleSearch = null;
	Google google = new Google();
	// run just once before starting any tests
	@BeforeSuite
	public void setup() {
		htmlReporter = new ExtentHtmlReporter("extentReports.html");

		// create ExtentReports and attach reporter(s)
		extent = new ExtentReports();
		extent.attachReporter(htmlReporter);
		google.setupTest();
		
		// creates a toggle for the given test, adds all log events under it    
        googleSearch = extent.createTest("Google Search v 0.0.1 (Test Extent Report + Test NG)", "How to Google...");
	}

	@Test
	public void searchAndEnter() throws Exception {
		googleSearch.log(Status.INFO, "starting the Googling with ENTER key...");
		google.searchAndEnter();
		
		googleSearch.fail("search and hit Enter key", MediaEntityBuilder.createScreenCaptureFromPath("googling_with_enter.png").build());
		
		// test with snapshot
		googleSearch.addScreenCaptureFromPath("googling_with_enter.png");
		
		googleSearch.pass("Navigated to Google webpage and performed search...");
	}
	
	@Test
	public void searchAndClick() throws Exception {
		googleSearch.log(Status.INFO, "starting the Googling with click button event...");
		google.searchAndClick();
		
		googleSearch.fail("Search and click on search button", MediaEntityBuilder.createScreenCaptureFromPath("googling_with_click.png").build());
		
		// test with snapshot
		googleSearch.addScreenCaptureFromPath("googling_with_click.png");
		
		googleSearch.pass("Navigated to Google webpage and performed search...");
	}

	// run just once after all test
	@AfterSuite
	public void tearDown() {
		google.tearDown();

		googleSearch.pass("Finishing up...");
		googleSearch.info("Test Completed - Googling");

		// calling flush writes everything to the log file
		extent.flush();
	}
}
