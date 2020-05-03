package retry;

import org.testng.annotations.Test;

import junit.framework.Assert;

public class FailingTests {
	@Test
	public void testSuccess() {
		System.out.println("This is a Test successful");
	}
	
	@Test
	public void testFailure() {
		int i = 1 / 0;
	}
	
	@Test(retryAnalyzer = RetryAnalyzer.class)
	public void testAssertFailure() {
		Assert.assertTrue(0 > 1);
	}
}
