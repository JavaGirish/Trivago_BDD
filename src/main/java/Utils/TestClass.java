package Utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class TestClass {

    public static WebDriver driver;
    public static Properties properties;


    public TestClass() {
        try {
            properties = new Properties();
            FileInputStream fileInputStream = new FileInputStream(".\\src\\main\\resources\\browser-config.properties");
            properties.load(fileInputStream);

        } catch (IOException e) {
            e.getMessage();
        }
    }

        public static void initialization(){

            System.setProperty("webdriver.chrome.driver",".\\src\\main\\java\\Library\\chromedriver.exe");
            driver = new ChromeDriver();
            driver.manage().window().maximize();
            driver.manage().deleteAllCookies();
            driver.get(properties.getProperty("URL"));
        }



}
