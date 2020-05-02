package config;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Properties;

public class PropertiesFile {
	static Properties prop = new Properties();
	public static void main(String[] args) {
		getProperties();
		setProperties();
	}
	public static String getProperties() {
		try {
			InputStream input = new FileInputStream(System.getProperty("user.dir") + "/src/test/java/config/config.properties");
			prop.load(input);
			String browser = prop.getProperty("browser");
			
			return browser;
		} 
		catch (Exception e) {
			e.printStackTrace();
			return "";
		}
	}
	public static void setProperties() {
		try {
			OutputStream output = new FileOutputStream(System.getProperty("user.dir") + "/src/test/java/config/config.properties");
			prop.setProperty("browser", "Chrome");
			prop.store(output, "wth are commnets...");
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
	}
}
