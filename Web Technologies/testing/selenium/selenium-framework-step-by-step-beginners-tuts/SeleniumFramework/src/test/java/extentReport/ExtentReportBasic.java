package extentReport;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

public class ExtentReportBasic {
	public static void main(String[] args) {
		ExtentHtmlReporter htmlReporter = new ExtentHtmlReporter("extentReports.html");
		
		// create ExtentReports and attach reporter(s)
        ExtentReports extent = new ExtentReports();
        extent.attachReporter(htmlReporter);

        // creates a toggle for the given test, adds all log events under it    
        ExtentTest googleSearch = extent.createTest("Google Search Test v 0.0.1", "How to Google...");
        
        googleSearch.log(Status.INFO, "starting the Googling...");
        
        Google google = new Google();
        google.setupTest();
        google.searchAndEnter();
        googleSearch.pass("Navigated to Google webpage and performed search...");
        google.tearDown();
        googleSearch.pass("Finishing up...");
        
        googleSearch.info("Test Completed - Googling");
        
        // calling flush writes everything to the log file
        extent.flush();
	}
}
