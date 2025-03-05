/// <reference types="cypress" />

import loginPage from "../pages/login.page"
import productPage from "../pages/product.page";

describe("Test Tri", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com");

        loginPage.login("standard_user","secret_sauce")
        

        // Vérifier que la redirection vers la page produit est correcte
        cy.url().should("include", "/inventory.html");
    });

    it("Tri Alphabétique A-Z", () => {
        let produitNonTrier = [];

        productPage.elements.productTitle()
            .then((elements) =>{
                produitNonTrier =Array.from(elements).map((el) => el.innerText.trim());
            })
            .then(() => {
                //Ont applique le Tri "A-Z"
                productPage.selectionnerTriPar("az");

                //vérifier que le tri est bien appliqué
                productPage.verifierTriSelectionne("az");

                //Ont recupère les noms des produits 
                productPage.elements.productTitle().then((elements)=>{
                    const produitsApresTri = Array.from(elements).map((el) => el.innerText);

                    // Vérifier que les produits sont bien triés dans l'ordre alphabétique
                    const produitsManuelTrie = Array.from(produitNonTrier).sort();

                    expect(produitsApresTri).to.deep.equal(produitsManuelTrie);
                })
            })
    })

    it("Tri Alphabétique Z-A",()=>{
        let produitNonTrier = [];
        productPage.elements.productTitle()
            .then((elements)=>{
                produitNonTrier = Array.from(elements).map((el)=> el.innerText);
            })
            .then(() => {
                //Ont applique le Tri "A-Z"
                productPage.selectionnerTriPar("za");

                //vérifier que le tri est bien appliqué
                productPage.verifierTriSelectionne("za");

                //Ont recupère les noms des produits 
                productPage.elements.productTitle().then((elements)=>{
                    const produitsApresTri = Array.from(elements).map((el) => el.innerText);

                    // Vérifier que les produits sont bien triés dans l'ordre alphabétique
                    const produitsManuelTrie = Array.from(produitNonTrier).sort().reverse();

                    expect(produitsApresTri).to.deep.equal(produitsManuelTrie);
                })
            })
    })
})