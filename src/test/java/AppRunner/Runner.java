package AppRunner;


import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(ExtendedCucumber.class)
@CucumberOptions(
        features = ".\\src\\main\\java\\Features",
        glue = {"StepDefinition"},
        plugin = {"pretty","html:test-output","json:target/cucumber.json"},
        tags = {},dryRun= false,
        monochrome = true,strict=true
        //"usage:target/cucumber-usage.json",
        //"junit:targer/cucumber-results.xml"
)

/* @ExtendedCucumberOptions(jsonReport = "target/cucumber.json"
        ,overviewReport = true
        ,jsonUsageReport = "target/cucumber-usage.json"
        ,includeCoverageTags = {"@Test1","@Test2","@Test3"}
        ,outputFolder = "target"

               retryCount = 3,
                ,detailedReport = true
                ,detailedAggregatedReport = true
                ,overviewReport = true
                ,overviewCharts = true
)
*/



public class Runner {
}
