package ignoreTests;

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
