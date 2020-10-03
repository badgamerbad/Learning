package priorities;

import org.testng.annotations.Test;

public class TestNgPriorityTest {
	@Test(priority = 1)
	public void test1() {
		System.out.println("Im inside the test 1");
	}
	@Test(priority = 2)
	public void test2() {
		System.out.println("Im inside the test 2");
	}
	@Test(priority = 3)
	public void test3() {
		System.out.println("Im inside the test 3");
	}
}
