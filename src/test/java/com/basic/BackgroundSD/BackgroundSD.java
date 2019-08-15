package com.basic.BackgroundSD;



import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BackgroundSD{
	
	WebDriver driver;
	
	
	@Given("^User is on the Facebook login page$")
	public void user_is_on_the_Facebook_login_page() throws InterruptedException{
		
	System.setProperty("webdriver.gecko.driver", "C:\\cucumber setup\\geckodriver-v0.24.0-win64\\geckodriver.exe");
	driver=new FirefoxDriver();
	driver.get("https://www.facebook.com/");	
	Thread.sleep(1000);
	}
	
@When("^User enters \"*([^\"]*)\" first name$")
	public void user_enters_first_name(String userName) throws InterruptedException{
	driver.findElement(By.xpath("//*[@id='u_0_e']")).sendKeys(userName);
	Thread.sleep(1000);
	
	}


@Then("^User checks user \"*([^\"]*)\" first name is present$")
public void user_checks_user_first_name_is_present(String userName) throws InterruptedException{
	String userNameActual =driver.findElement(By.xpath("//*[@id='u_0_e']")).getAttribute("value");
	Assert.assertEquals(userName, userNameActual);
	Thread.sleep(1000);
}

@And("^User enters \"*([^\"]*)\" surname$")
public void user_enters_surname(String surname) throws InterruptedException{
driver.findElement(By.xpath("//*[@id='u_0_g']")).sendKeys(surname);
Thread.sleep(1000);
}

@Then("^User Mobile Field should be blank$")
public void  User_mobile_field_should_be_blank() throws InterruptedException{
	String mobileNumberActual =driver.findElement(By.xpath("//*[@id='u_0_j']")).getAttribute("value");
	Assert.assertEquals("", mobileNumberActual);
	Thread.sleep(1000);
}

@Then("^close Browser$")
public void close_Browser(){
	driver.close();
	driver=null;

}





	
	
	

}
