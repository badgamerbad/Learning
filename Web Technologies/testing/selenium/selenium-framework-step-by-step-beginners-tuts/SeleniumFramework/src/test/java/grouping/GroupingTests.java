package grouping;

import org.testng.annotations.Test;

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
