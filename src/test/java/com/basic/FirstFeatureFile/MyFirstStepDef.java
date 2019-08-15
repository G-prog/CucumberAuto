package com.basic.FirstFeatureFile;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyFirstStepDef {
	
	WebDriver driver;
	
	
	@Given("^User is on the Facebook login page$")
	public void user_is_on_the_Facebook_login_page(){
		
	System.setProperty("webdriver.gecko.driver", "C:\\cucumber setup\\geckodriver-v0.24.0-win64\\geckodriver.exe");
	driver=new FirefoxDriver();
	driver.get("https://www.facebook.com/");		
	}
	
@When("^User enters first name$")
	public void user_enters_first_name(){
	driver.findElement(By.xpath("//*[@id='u_0_e']")).sendKeys("Geeta");

		
	}


@Then("^User checks user first name is present$")
public void user_checks_user_first_name_is_present(){
	String userNameActual =driver.findElement(By.xpath("//*[@id='u_0_e']")).getAttribute("value");
	System.out.print(userNameActual);
	Assert.assertEquals("Geeta", userNameActual);
	
	
}
	
	
	

}
