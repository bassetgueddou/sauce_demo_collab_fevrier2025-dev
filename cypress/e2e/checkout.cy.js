/// <reference types="cypress" />

import loginPage from "../pages/login.page"
import productsPage from "../pages/product.page"
import cartPage from "../pages/cart.page"
import checkoutinformationpagePage from "../pages/checkoutinformationpage.page"
import CheckoutOvervieuwPage from "../pages/CheckoutOvervieuw.page"


describe("checkout", () => {

    it("checkout", () => {
        cy.visit('https://www.saucedemo.com/')
        loginPage.login("standard_user", "secret_sauce")

        productsPage.cliquerSurProduit("Sauce Labs Backpack")
        productsPage.allerAuPanier()

        cartPage.clickCheckoutButton()

        checkoutinformationpagePage.enterFirstName("ka")
        checkoutinformationpagePage.enterLastName("ko")
        checkoutinformationpagePage.enterPostalCode("91")
        checkoutinformationpagePage.clickContinue()

        CheckoutOvervieuwPage.cliquersurleButtonfinish()

        cy.get(".pony_express").should("be.visible")
    })
})