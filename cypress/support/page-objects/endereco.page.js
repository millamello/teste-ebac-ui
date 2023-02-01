class EnderecoPage{

editarEnderecoFaturamento(){
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(1) > .title > .edit').click()
    cy.get('#billing_first_name').clear().type('Camila')
    cy.get('#billing_last_name').clear().type('Mello')
    cy.get('#billing_company').clear().type('EBAC')

    cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
    cy.get('#billing_address_1').clear().type('Av. São João')
    cy.get('#billing_address_2').clear().type('2001')
    cy.get('#billing_city').clear().type('Sorocaba')
    cy.get('#select2-billing_state-container')
}
editarEnderecoEntrega(){
    //elementos+ações

}
}
export default new EnderecoPage()