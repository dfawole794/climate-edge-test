import { Given, Then, And, But } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../Login-page/loginPage';
import Homepage from '../Home-Page/homePage';
import ServicePage from './servicesPage';
import { username, password, base_url } from '../../../fixtures/config';

const Login = new LoginPage();
const Home = new Homepage();
const Service = new ServicePage();

// Scenario: Broadcast character limits
Given('user is on Climate Edge home page', () => {
	cy.visit(base_url);
	Login.typeUsername(username);
	Login.typePassword(password);
	Login.clickLoginBtn();
	Home.homePageIsDisplayed();
});

And('user clicks View button on Broadcast dialog box', () => {
	Service.clickViewBtn();
});

Then('Broadcast text area must be displayed', () => {
	Service.broadCastTextAreaIsDisplayed();
});

Given(
	'user fill Broadcast text area without exceeding the maximum limit',
	() => {
		Service.populateTextArea();
	}
);

Then('character counter must not be highlighted', () => {
	Service.countCharactersUnderLimits();
});

But('if user fill Broadcast text area exceeding the maximum limit', () => {
	Service.populateTextArea();
});

Then('character counter and + button must be highlighted', () => {
	Service.countCharactersOverLimits();
});

Given('user click Send now button to broadcast message', () => {
	Service.clickSendNowBtn();
});

Then('success notification {string} must be displayed', (msg) => {
	Login.noticeMsgIsDisplayed(msg);
});

// Scenario: click Add Series display form
Given('user clicks Add Series menu button', () => {
	Service.openAddSeriesForm();
});

Then('Add Series form must be displayed', () => {
	Service.addSeriesFormIsDisplayed();
	Service.closeAddSeriesForm();
});
