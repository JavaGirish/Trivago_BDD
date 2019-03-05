package Utils;

import java.io.FileInputStream;
import java.util.Properties;

public class PropertiesFileReader {

public Properties getProperty() throws Exception{
    FileInputStream inputStream = null;
    Properties properties = new Properties();
    properties.load(new FileInputStream(".\\src\\main\\resources\\browser-config.properties"));

    return properties;
}

}
