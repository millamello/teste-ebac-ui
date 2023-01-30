/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta')
        })

    afterEach(()=>{

        cy.screenshot()
    })


it(' Deve exibir uma mensagem de erro ao inserir usuário inválido' , ()=>{
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click ()

    cy.get('.woocommerce-error').should('contain' , 'Erro')

})  

it(' Deve exibir uma mensagem de erro ao inserir senha inválido' , ()=>{
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click ()
        cy.get('.woocommerce-error').should('contain' , 'Erro')
    })


})