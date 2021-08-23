import { base_url } from '../../../fixtures/config';

class LoginPage {
	elementsLocator = {
		getUrl: () => cy.url(),
		getPageTitle: () => cy.contains('Sign In'),
		getUserNameInput: () => cy.get('input[name="email"]'),
		getPasswordInput: () => cy.get('input[name="password"]'),
		getForgotPasswordLink: () => cy.contains('forgot password?'),
		getLoginBtn: () => cy.get('input[type="submit"]'),
		getNotification: (notice_msg) => cy.contains(`${notice_msg}`),
		getRequestPasswordBtn: () => cy.contains('Request Password Reset'),
	};

	// Actions
	visit() {
		cy.visit(base_url);
	}

	typeUsername(username) {
		this.elementsLocator.getUserNameInput().type(username);
	}

	typePassword(password) {
		this.elementsLocator.getPasswordInput().type(password);
	}

	clickLoginBtn() {
		this.elementsLocator.getLoginBtn().first().click();
	}

	clickForgotPassword() {
		this.elementsLocator.getForgotPasswordLink().click();
	}

	clickRequestPasswordBtn() {
		this.elementsLocator.getRequestPasswordBtn().click();
	}

	// Assertions
	noticeMsgIsDisplayed(msg) {
		this.elementsLocator.getNotification(msg);
	}

	loginPageIsDisplayed() {
		this.elementsLocator.getUrl().should('include', '/home');
		this.elementsLocator.getPageTitle().should('be.visible');
	}

	resetPasswordPageIsDisplayed() {
		this.elementsLocator.getRequestPasswordBtn.should('be.visible');
	}
}

export default LoginPage;
