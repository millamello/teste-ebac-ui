/// <reference types="cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () =>{
beforeEach(() => {
cy.visit('minha-conta')
cy.fixture('perfil').then(dados =>{
cy.login(dados.usuario , dados.senha)
})


});

it.only('Deve fazer cadastro do faturamento com sucesso', ()=>{
    EnderecoPage.editarEnderecoFaturamento()

//cadastro de endereço

});


})