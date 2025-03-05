/// <reference types="cypress" />

import loginPage from "../pages/login.page";
import productsPage from "../pages/product.page"; // Assurez-vous que le chemin est correct

describe("Test affichage des produits", () => {
    

    context("Test affichage des produits", () => {
        beforeEach(() => {
            cy.visit("https://www.saucedemo.com/");
            loginPage.login("standard_user", "secret_sauce");
        });

        it("Récupérer la liste des produits affichés", () => {
            productsPage.elements.productTitle()
                .should('have.length.greaterThan', 0)
        });
        
        
    });
});
