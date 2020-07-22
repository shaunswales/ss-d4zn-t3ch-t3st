import * as loc from '../fixtures/locators';
import * as content from '../fixtures/page';
import { resultsTableItems } from '../../../testdata/index';

Cypress.Commands.add(
  'checkTheWeather',
  (postcode, submissionType = 'click') => {
    if (submissionType === 'click') {
      cy.get(loc.search.input).type(postcode);
      cy.get(loc.search.button).click();
    } else {
      cy.get(loc.search.input).type(`${postcode}{enter}`);
    }

    cy.get(loc.results.title)
      .should('be.visible')
      .contains(content.results.title);

    resultsTableItems.map(([index, fieldName]) => {

      const wrapper = `${loc.results.table.wrapper}`;
      
      cy.get(wrapper).eq(index);

      // const rowNameLocator = `${$li} ${loc.results.table.tableItemName}`;
      // const rowValueLocator = `${$li} ${loc.results.table.tableItemValue}`;

      // cy.get(rowNameLocator).should('eq', `${fieldName}:`).and('be.visible');
      // cy.get(rowValueLocator).should('be.visible');
    });

    // Weather Details
    // Get JSON Response
    // Assert Results
  },
);

Cypress.Commands.add(
  'checkTheWeatherInvalid',
  (postcode, expectedOutcome) => {},
);
