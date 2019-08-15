package com.basic.TagsSD;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		
		monochrome=true,
		//dryRun=true,
		//tags={"@Important"},
				//tags={"@Smoke"},
						//tags={"@Smoke","@Regression"},//AND
							tags={"@Smoke,@Regression"},//OR 
		features={"src/test/resources/com/basic/TagsFileFF/"},
		glue={"com/basic/TagsSD/"},
		plugin={
				
				"pretty",
				"html:target/cucumber-htmlreport",
				"json:target/cucumber-report7.json",
				 "com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport7.html"
			
		}
		
		)

public class RunTagsTest {
	
	
	

}
