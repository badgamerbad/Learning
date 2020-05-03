package dependencies;

import org.testng.annotations.Test;

public class Dependencies {
	// so the testTwo will run first and then testOne
	// ignores the priority
	@Test(dependsOnMethods = {"testTwo", "testThree"}, priority = 1)
	public void testOne() {
		System.out.println("Test 1");
	}
	@Test(priority = 2, groups = {"regression"})
	public void testTwo() {
		System.out.println("Test 2 {\"regression\"}");
	}
	@Test(dependsOnGroups = {"smoke"})
	public void testThree() {
		System.out.println("Test 3");
	}
	
	@Test(groups = {"sanity"})
	public void testGroupOne() {
		System.out.println("Test Group 1 {\"sanity\"}");
	}
	@Test(groups = {"smoke"})
	public void testGroupTwo() {
		System.out.println("Test Group 2 {\"smoke\"}");
	}
}
