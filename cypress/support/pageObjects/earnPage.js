export class earnPage {

    buttons = {
        maxButton : () => cy.get('[data-test="widget_earn_input_max_button"]')
    }

    inputs = {
        depositInput : () => cy.get('input[placeholder="0.00"]')
    }

    dropdowns = {
        assetDropdown : () => cy.get('[data-test="widget_earn_select_asset_dropdown_trigger"]')
    }

    clickOnMaxButton(){
        this.buttons.maxButton().should('be.visible').and('not.be.disabled').click()
    }

    selectAsset(assetName) {
    this.dropdowns.assetDropdown().should('be.visible').click();
    cy.get('.text-display-s').contains(assetName).should('be.visible').click();
    // check the asset is correctly selected
    this.dropdowns.assetDropdown().should('contain', assetName);
  }

}
module.exports = new earnPage();