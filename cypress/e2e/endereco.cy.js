/// <reference types="cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require ('../fixtures/endereco.json')
describe('Funcionalidade Endereços - Faturamento e Entrega', () =>{
beforeEach(() => {
cy.visit('minha-conta')
cy.fixture('perfil').then(dados =>{
cy.login(dados.usuario , dados.senha)
})


});

it('Deve fazer cadastro do faturamento com sucesso', ()=>{
    EnderecoPage.editarEnderecoFaturamento('Camila', 'Mello', 'Google', 'Brasil', 'Av Brasil', '1500', 'Sorocaba', 'São Paulo', '18031180', '15981518407', 'email@dominio.com')
    cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso')

//cadastro de endereço

});
it.only('Deve fazer cadastro do faturamento com sucesso - Usando arquivo de dados', ()=>{
    EnderecoPage.editarEnderecoFaturamento(
        dadosEndereco[2].nome,
        dadosEndereco[2].sobrenome,
        dadosEndereco[2].empresa,
        dadosEndereco[2].pais,
        dadosEndereco[2].endereco,
        dadosEndereco[2].numero,
        dadosEndereco[2].cidade,
        dadosEndereco[2].estado,
        dadosEndereco[2].cep,
        dadosEndereco[2].telefone,
        dadosEndereco[2].email
        )
    cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso')
})
})