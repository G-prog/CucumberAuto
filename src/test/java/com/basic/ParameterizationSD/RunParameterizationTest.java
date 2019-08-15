package com.basic.ParameterizationSD;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		
		monochrome=true,
		//dryRun=true,
		features={"src/test/resources/com/basic/ParameterizationFileFF/"},
		glue={"com/basic/ParameterizationSD/"},
		plugin={
				
				"pretty",
				"html:target/cucumber-htmlreport",
				"json:target/cucumber-report6.json",
				 "com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport6.html"
			
		}
		
		
		)

public class RunParameterizationTest {
	
	
	

}
