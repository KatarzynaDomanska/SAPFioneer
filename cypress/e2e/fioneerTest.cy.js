/// <reference types='cypress' />

describe('Fioneer QA Automation Challenge', () => {
    beforeEach(() => {
        cy.visit('https://www.sapfioneer.com/');
        cy.clearCookies()
    });

    it('Check if header bookmarks are visible', () => {
        const expectedBookmarks = ['Banking', 'Insurance', 'Finance & ESG', 'Services', 'Partners', 'Company', 'Resources'];

        cy.get('.hide-for-medium.flex-right > .header-nav > li > a')
            .filter(':lt(7)')
            .should('be.visible')
            .each((bookmark, a) => {
                cy.wrap(bookmark).invoke('text').should('equal', expectedBookmarks[a])
            });
    });

    it('Check if user has been redirected to the correct page', () => {
        const expectedPage = 'https://www.sapfioneer.com/finance-esg/financial-control/';

        cy.get('#menu-item-29979 > .nav-top-link').click()
        //cy.get('#col-1514298497 > .col-inner > .ux-menu > :nth-child(4) > .ux-menu-link__link').click()

    })
})

