package Utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.github.bonigarcia.wdm.WebDriverManager;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

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

            //System.setProperty("webdriver.chrome.driver",".\\src\\main\\java\\Library\\chromedriver.exe");
        	WebDriverManager.chromedriver().setup();
        	ChromeOptions op = new ChromeOptions();
        
        	op.addArguments("--headless");
        	op.addArguments("--window-size=1400,800");
            driver = new ChromeDriver();
            driver.get(properties.getProperty("URL"));
            driver.manage().window().maximize();
            driver.manage().deleteAllCookies();
            
            driver.manage().timeouts().pageLoadTimeout(2, TimeUnit.MINUTES);
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        }



}
