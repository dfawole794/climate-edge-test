import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from './loginPage';
import Homepage from '../Home-Page/homePage';

const URL = 'http://test.climate-edge.com';
const Login = new LoginPage();
const Home = new Homepage();

//  Scenario:  Valid user login
Given('user visits Climate Edge url', () => {
	Login.visit(URL);
});

Then('login page must be displayed', () => {
	Login.loginPageIsDisplayed();
});

Given('user enter {string} and {string}', (username, password) => {
	Login.typeUsername(username);
	Login.typePassword(password);
});

And('user clicks Login button', () => {
	Login.clickLoginBtn();
});

Then('user must be redirected to home page', () => {
	Home.homePageIsDisplayed();
});

Given('user hover on menu dropdown', () => {
	Home.UserMenuDropDown();
});

And('user clicks {string} option', (option) => {
	Home.selectMenuOption(option);
});

Then('user must be logged out', () => {
	Login.loginPageIsDisplayed();
});

//  Scenario: Invalid user login
Then('error notification {string} must be displayed', (msg) => {
	Login.noticeMsgIsDisplayed(msg);
});

And('user must not be redirected to home page', () => {
	Login.loginPageIsDisplayed();
});
