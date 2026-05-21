class Cart {
    validarProdutoPresenteNoCarrinho(name: string) {
        cy.contains(name).should('be.visible')

        cy.screenshot('produto adicionado')
    }
}

export default new Cart()