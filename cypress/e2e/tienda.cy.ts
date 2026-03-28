describe('Prueba E2E ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('Cargando correctamente', () => {
    //Vemos que la barra verde existe
    cy.get('.nav-bar').should('be.visible')
    //Comprobacionde carritoç
    cy.get('.cart').should('contain', 'Cart(0)')
  })

  it('Sumar 1 cuando añadimos un producto', () => {
    //Tienda
    cy.visit('http://localhost:5173/tienda')

    //Busca primer boton
    cy.get('.button ').first().click()

    //Acualizacion de carrito
    cy.get('.cart').should('contain', 'Cart(1)')
  })
})
