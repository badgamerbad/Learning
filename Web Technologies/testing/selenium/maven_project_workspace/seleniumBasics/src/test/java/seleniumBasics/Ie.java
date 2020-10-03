package seleniumBasics;

import org.openqa.selenium.ie.InternetExplorerDriver;

import io.github.bonigarcia.wdm.WebDriverManager;
import tasks.AfterSetup;

public class Ie extends AfterSetup {
    public void setupClass() {
        WebDriverManager.iedriver().setup();
        driver = new InternetExplorerDriver();
    }
}
