package AppRunner;


import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(ExtendedCucumber.class)
@ExtendedCucumberOptions(jsonReport = "target/cucumber.json"
        ,overviewReport = true
        ,jsonUsageReport = "target/cucumber-usage.json"
        ,includeCoverageTags = {"@Test1","@Test2","@Test3","@Test4","@Test5","@Test6"}
        ,outputFolder = "target"

        //         retryCount = 3,
        //        ,detailedReport = true
        //        ,detailedAggregatedReport = true
        //        ,overviewReport = true
        //        ,overviewCharts = true
)
@CucumberOptions(
        features = ".\\src\\main\\java\\Features",
        glue = {"StepDefinition"},
        plugin = {"pretty","html:test-output","json:target/cucumber.json"},
        tags = {},
        monochrome = true
        //"usage:target/cucumber-usage.json",
        //"junit:targer/cucumber-results.xml"
)

public class Runner {
}
