/// <reference types='cypress' />

describe('Fioneer QA Automation Challenge', () => {
    beforeEach(() => {
        cy.visit('https://www.sapfioneer.com/');
        cy.clearCookies()
    })

    it('Check if header bookmarks are visible', () => {
        const expectedBookmarks = ["Banking", "Insurance", "Finance & ESG", "Services", "Partners", "Company", "Resources"]

        cy.get('.hide-for-medium.flex-right > .header-nav')
            .find('a')
            .invoke('text')
            .then((bookmarks) => {
                expect(bookmarks.lenght).to.equal(expectedBookmarks.length);

                for (let i = 0; i < expectedBookmarks.length; i++) {
                    expect(bookmarks[i]).to.equal(expectedBookmarks[i]);
                }
            })
    })
})
