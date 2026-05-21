import { elements as el } from "./elements.js"

class inventory {
    validarAcessoAPagina() {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

        cy.screenshot('acesso a página de inventário')
    }

    adicionarProduto(itemName: string) {
        cy.get(el.addToCart(itemName)).click()

    }

    removerProduto(itemName: string) {
        cy.get(el.removeFromCart(itemName)).click()
    }
}

export default new inventory()