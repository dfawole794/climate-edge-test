/// <reference types="cypress" />

class Homepage {
	elementsLocator = {
		getPageUrl: () => cy.url(),
		getPageTitle: () => cy.contains('Your Services'),
		getUserMenu: () => cy.get('.dropdown-menu'),
		getMenuItems: (option) => cy.contains(`${option}`),
		getBroadcastBoxTitle: () => cy.contains('Broadcast'),
		getBroadcastBoxOffText: () => cy.contains('Off'),
		getBroadcastViewBtn: () => cy.contains('View'),
	};

	// Actions
	UserMenuDropDown() {
		this.elementsLocator.getUserMenu().realHover();
	}

	selectMenuOption(optionToSelect) {
		this.elementsLocator.getUserMenu().realHover();
		this.elementsLocator.getMenuItems(optionToSelect).click();
	}

	// Assertions
	homePageIsDisplayed() {
		this.elementsLocator.getPageUrl().should('include', '/services');
		this.elementsLocator.getPageTitle().should('be.visible');
		this.elementsLocator.getBroadcastBoxTitle().should('be.visible');
		this.elementsLocator.getBroadcastBoxOffText().should('be.visible');
	}
}

export default Homepage;
