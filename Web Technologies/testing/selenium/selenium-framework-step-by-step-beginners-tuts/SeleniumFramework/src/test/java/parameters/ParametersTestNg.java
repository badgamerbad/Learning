package parameters;

import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

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
