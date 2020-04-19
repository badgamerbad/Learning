package seleniumBasics;

import org.openqa.selenium.edge.EdgeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;
import tasks.AfterSetup;

public class Edge  extends AfterSetup {
	public void setupClass() {
        WebDriverManager.edgedriver().setup();
        driver = new EdgeDriver();
    }
}
