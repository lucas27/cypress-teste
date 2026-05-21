import { elements as el } from "./elements.js"

class Header {
    validarQueCarrinhoPossuiItens(quantidade: number) {

        cy.get(el.cartBadge)
            .should('be.visible')
            .and('have.text', quantidade.toString())

    }

    navegarParaCarrinho() {
        cy.get(el.cartContainer).click()

    }

    validarQueCarrinhoNaoPossuiItens() {
        cy.get(el.cartBadge).should('not.exist')
        cy.screenshot('produto removido')
    }
}

export default new Header()