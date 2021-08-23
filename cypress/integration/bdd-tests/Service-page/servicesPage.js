import { broadcastMsg } from '../../../fixtures/broadcast-data';

class ServicePage {
	elementsLocator = {
		getPageUrl: () => cy.url(),
		getViewBtn: () => cy.contains('View'),
		getPageTitle: () => cy.contains('#GCT*BC Broadcast'),
		getBroadcastTextArea: () => cy.get('.content-body > .ng-untouched'),
		getTextCounter: () => cy.get('.count-characters > span'),
		getPlusSignBtn: () => cy.get('.actions > span'),
		getSendNowBtn: () => cy.get('button').contains('Send now'),
		getSendLaterBtn: () => cy.contains('Send later'),
		getOpenAddSeries: () => cy.get('.broadcast-series'),
		getAddSerriesForm: () => cy.get('.body > .text > .block-form'),
	};

	// Actions
	clickViewBtn() {
		this.elementsLocator.getViewBtn().click();
	}

	clickSendNowBtn() {
		cy.wait(4000);
		this.elementsLocator.getSendNowBtn().click();
	}

	openAddSeriesForm() {
		this.elementsLocator.getOpenAddSeries().click();
	}

	closeAddSeriesForm() {
		this.elementsLocator.getOpenAddSeries().contains('Cancel').click();
	}

	populateTextArea(msg) {
		msg = broadcastMsg;
		this.elementsLocator.getBroadcastTextArea().type(msg);
	}

	// Assertions
	broadCastPageIsDisplayed() {
		this.elementsLocator.getPageUrl().should('include', '/services/GCT*BC');
	}

	broadCastTextAreaIsDisplayed() {
		this.elementsLocator.getPageTitle().should('be.visible');
	}

	addSeriesFormIsDisplayed() {
		cy.contains('Name').should('be.visible');
		cy.contains('Description').should('be.visible');
		cy.contains('Send time').should('be.visible');
		cy.contains('Status').should('be.visible');
		cy.contains('Cancel').should('be.visible');
		cy.contains('Save').should('be.visible');
	}

	countCharactersUnderLimits() {
		this.elementsLocator
			.getTextCounter()
			.should('not.have.class', 'has-text-warning');
	}

	countCharactersOverLimits() {
		this.elementsLocator
			.getTextCounter()
			.should('have.class', 'has-text-warning');
		this.elementsLocator
			.getPlusSignBtn()
			.should('have.class', 'actions-highlight');
	}
}

export default ServicePage;
