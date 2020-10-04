const { cyan } = require("@material-ui/core/colors")

describe('Return True if title is correct', () => {
    it ('Verify title', () => {
        cy.visit('/')

        cy.contains("O IMC é o Índice de Massa Corporal")
    })

    it ('Type input and verify result', () => {
        cy.visit("/");
        cy.get('#input-1').clear().type('180');
        cy.get('#input-2').clear().type('80');
        cy.get('#btn').click();
        cy.contains('O seu IMC é: 24.69 Kg/m2 - Peso Normal');
    })
})