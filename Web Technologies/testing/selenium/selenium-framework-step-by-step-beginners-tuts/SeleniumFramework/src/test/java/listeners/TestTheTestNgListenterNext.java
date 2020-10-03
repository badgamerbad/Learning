package listeners;

import org.testng.annotations.Listeners;
import org.testng.annotations.Test;

@Listeners(listeners.TestNgListener.class)
public class TestTheTestNgListenterNext {
	@Test
	public void testNumber4 () {
		System.out.println("Test 4");
	}
	@Test
	public void testNumber5 () {
		System.out.println("Test 5");
	}
	@Test
	public void testNumber6 () {
		System.out.println("Test 6");
	}
}