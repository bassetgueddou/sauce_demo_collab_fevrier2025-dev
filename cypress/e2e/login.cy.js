import loginPage from "../pages/login.page"

describe('login scenario', () => {
    it('correct user and correct pass', () => {
      cy.visit('https://www.saucedemo.com/')
      loginPage.login("standard_user", "secret_sauce")
      cy.get("#react-burger-menu-btn").should("be.visible")
    })



    beforeEach('acces url', ()=>{
      cy.visit('https://www.saucedemo.com/')
    })
    it('correct user and wrong pass', () => {
      loginPage.login("standard_user", "secret_sauce1")
      cy.get('[data-test=error]').should("be.visible")
    }),

    it('wrong user and correct pass', () => {
      loginPage.login("standard_user1", "secret_sauce")
      cy.get('[data-test=error]').should("be.visible")
    }),

    it('wrong user and wrong pass', () => {
      loginPage.login("standard_user1", "secret_sauce1")
      cy.get('[data-test=error]').should("be.visible")
    })


})