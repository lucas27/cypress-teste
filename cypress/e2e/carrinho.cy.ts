import Cart from "../pages/cart/index.js"
import Header from "../pages/header/index.js"
import Inventory from "../pages/inventory/index.js"
import Login from "../pages/login/index.js"

describe('Carrinho', () => {
    beforeEach(() => {
        // Arrang
        // cy.visit('https://www.saucedemo.com/')
        
        // cy.get('[data-test="username"]').type('standard_user')
        
        // cy.get('[data-test=password]').type('secret_sauce')

        // cy.get('[data-test="login-button"]').click()
        Login.visitarPagina()
        Login.preencherCredenciaisValidas()
    })
    
    it('Adicionar produto ao carrinho com sucesso',  () => {
        // Arrang
        // cy.visit('https://www.saucedemo.com/')
        
        // cy.get('[data-test="username"]').type('standard_user')
        
        // cy.get('[data-test=password]').type('secret_sauce')

        // cy.get('[data-test="login-button"]').click()

        // Act
        // cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        // cy.screenshot('produto adicionado')

        // // Assert
        // cy.get('.shopping_cart_badge')
        //     .should('be.visible')
        //     .and('have.text', '1')

        // cy.get('#shopping_cart_container').click()

        // cy.contains('Sauce Labs Backpack').should('be.visible')

        Inventory.adicionarProduto('Sauce Labs Backpack')

        const qtdItensAdicionados = 1
        Header.validarQueCarrinhoPossuiItens(qtdItensAdicionados)

        Cart.validarProdutoPresenteNoCarrinho('Sauce Labs Backpack')
    })

    it('Remover produto do carrinho com sucesso', () => {
        // Arrang
        // cy.visit('https://www.saucedemo.com/')

        // cy.get('[data-test="username"]').type('problem_user')
        
        // cy.get('[data-test="password"]').type('secret_sauce')
        
        // cy.get('[data-test="login-button"]').click()

        // cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        Inventory.adicionarProduto('Sauce Labs Backpack')

        // cy.get('.shopping_cart_badge')
        //     .should('be.visible')

        // Act
        // cy.get('[data-test="remove-sauce-labs-backpack"]').click()

        Inventory.removerProduto('Sauce Labs Backpack')
        // Assert
        // cy.get('.shopping_cart_badge').should('not.exist')
        Header.validarQueCarrinhoNaoPossuiItens()
        // cy.screenshot('produto removido')
    })
})