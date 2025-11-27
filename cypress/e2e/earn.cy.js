import earnPage from "../support/pageObjects/earnPage";

describe("Earn page – Max value of ETH is correct", () => {

    beforeEach(() => {
        cy.visit('/');
        // tap on Earn tab to display the Earn page
        cy.get('[data-test="widget_navbar_tab_earn"]').click();
        // select ETH in the dropdown of assets
        earnPage.selectAsset('ETH')
        // click on max button
        earnPage.clickOnMaxButton()
    });

    it("check the max value ETH is a multiple of 32 ETH ", () => {
        // get the value displayed and check that it's a multiple of 32
        earnPage.inputs.depositInput()
        .invoke("val")
        .then((value) => {
            const maxValue = Number(value);
            expect(maxValue % 32).to.equal(0);
        });
    });

    it("check the max value is correct based on portfolio balance ", () => {
        // TODO: Remove cy.wait()
        // The balance element currently has no reliable data-test selector,
        // A static wait is used here as a temporary workaround.
        // In a real project, I would ask frontend to expose a dedicated
        // data-test attribute (e.g. data-test="portfolio-balance")
        // so this test can become fully deterministic and stable
        cy.wait(2000)
        // check that ETH is
        cy.contains("ETH AVAILABLE").should('be.visible')
        .then(($el) => {
            const rawText = $el.text().trim();
            const balance = Number(rawText.replace(/[^\d.]/g, ""));
            earnPage.clickOnMaxButton()
            earnPage.inputs.depositInput()
            .invoke("val")
            .then((value) => {
                const maxValue = Number(value)
                // check that the max value doesn't exceed the balance
                expect(maxValue).to.be.at.most(balance);
                // check that adding one more 32-ETH chunk would exceed the user's balance,
                // which confirms that the displayed Max value is the largest valid max value
                expect(maxValue + 32).to.be.greaterThan(balance);                
            });      
        });
    });
});