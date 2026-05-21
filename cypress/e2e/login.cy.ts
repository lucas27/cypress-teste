import Login from '../pages/login/index.js'
import inventory from '../pages/inventory/index.js'

describe('Login', () => {
    beforeEach(() => {
        Login.visitarPagina()
        // cy.visit('https://www.saucedemo.com/')
    })

    it('Realizar login com sucesso', () => {
        // Arrang
        // cy.visit('https://www.saucedemo.com/')
        
        // Act
        // cy.get('[data-test="username"]').type('standard_user')
        
        // cy.get('[data-test=password]').type('secret_sauce')

        // cy.get('[data-test="login-button"]').click()

        Login.preencherCredenciaisValidas()

        inventory.validarAcessoAPagina()

        // Assert
        // cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

        // cy.screenshot('login')
    })
    it('Realizar login informando credenciais inválidas',  () => {
        // Arrang
        // cy.visit('https://www.saucedemo.com/')
        
        // Act
        // cy.get('[data-test="username"]').type('user.invalid')
        
        // cy.get('[data-test=password]').type('senha')

        // cy.get('[data-test="login-button"]').click()

        Login.preencherCredenciaisInvalidas()

        Login.validarErroCredenciaisInvalidas()

        // cy.screenshot('erro credenciais inválidas')

        // // Assert
        // cy.get('[data-test="error"]')
        //     .should(
        //         'contain.text',
        //         'Username and password do not match any user in this service'
        //     )
            
        // cy.url().should('eq','https://www.saucedemo.com/')
    })

})