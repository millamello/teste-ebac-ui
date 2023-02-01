/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first() - primeiro produto da lista
            //.last - ultimo produto da lista
            //.eq(3) - 4 produto da lista começando pela contagem 0,1,2,3
            .contains('Abominable Hoodie')
            .click()

    });
    it('Deve selecionar um produto par o Carrinho', () => {
        var quantidade = 10
        cy.get('[class="product-block grid"]')
       
            .contains('Abominable Hoodie').click()
            cy.get('.button-variable-item-M').click()
            cy.get('.button-variable-item-Blue').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()
            
            cy.get('#cart > .dropdown-toggle').should('contain' , quantidade)
            cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

    });
   it.only('Deve adicionar produtos ao carrinho - Usando Comando customizado', ()=> {
    cy.addProdutos('Abominable Hoodie', 'L', 'Red', 2)

   })
   it.only('Deve adicionar produtos ao carrinho - Usando Comando customizado', ()=> {
    cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 5)

   })

});




