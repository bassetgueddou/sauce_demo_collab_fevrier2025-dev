/// <reference types="cypress" />

import cartPage from "../pages/cart.page";
import loginPage from "../pages/login.page";
import productPage from "../pages/product.page";


describe("Test affichage des produits ajoutés dans cart", ()=>{
    
    context("Test affichage des produits ajoutés dans cart", () => {
        beforeEach(() =>{
            cy.visit("https://www.saucedemo.com/");
            loginPage.login("standard_user", "secret_sauce");
        });

        it("Ajouter des produits et vérifier s'ils sont ajoutés dans card", () => {
            // ajouter n produits
            let nombreProduits = 4
            let listeProduits =[]
            productPage.elements.productTitle().each((produit, id)=>{
                if(id < nombreProduits){
                    cy.wrap(produit).invoke("text").then((produitTexte) => {
                        productPage.ajouterProduitAuPanier(produitTexte.toLowerCase().replace(/\s+/g, "-"));
                        listeProduits.push(produitTexte);
                    })  
                }
                
            });
            
            productPage.allerAuPanier();
            cy.wrap(cartPage.getAddedProducts()).should('deep.equal', listeProduits);

        });
    });
})