import { validData, invalidData } from '../../../testdata/index';
import * as loc from '../fixtures/locators';
import * as content from '../fixtures/page';

describe('Weather Checker', () => {
  context.skip('Assertions', () => {
    it('should contain Weather Checker as the title in the header', () => {
      cy.get(loc.header.title)
        .should('be.visible')
        .contains(content.header.title);
    });
    it('should have a single input field for postcode entry', () => {
      cy.get(loc.search.input)
        .should('be.visible')
        .and('have.attr', 'placeholder', content.search.input);
    });
    it('should have a single button to trigger a search', () => {
      cy.get(loc.search.button)
        .should('be.visible')
        .contains(content.search.button);
    });
    it('should match the base visual screenshot', () => {});
  });
  context('Success Scenarios', () => {
    validData.map(([testDesc, postcode]) => {
      it(`should I enter the postcode ${postcode} (${testDesc}) and submit by clicking the submit button results should be displayed`, () => {
        cy.checkTheWeather(postcode, 'click');
      });
      it(`should I enter the postcode ${postcode} (${testDesc}) and submit by the {enter} key then results should be displayed`, () => {
        cy.checkTheWeather(postcode, 'press');
      });
    });
  });
  context.skip('Error Scenarios', () => {
    invalidData.map(([testDesc, postcode, , expectedErrorMessage]) => {
      it(`should I enter the postcode '${postcode}' (${testDesc}) the response '${expectedErrorMessage}' to be displayed`, () => {
        cy.checkTheWeatherInvalid(postcode, expectedErrorMessage);
      });
    });
  });
});
