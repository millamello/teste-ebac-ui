/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade Pré Cadatro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        })

    it('Deve completar o pré cadastro com sucesso', () => {
        var emailfaker = faker.internet.email()
        var nomeFaker = faker.name.firstName()
        var sobrenomeFaker = faker.name.lastName()
        
        cy.get('#reg_email').type(emailfaker)
        cy.get('#reg_password').type('@Teste2026')
        cy.get(':nth-child(4) > .button').click ()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click ()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso')

    })
    


    });


