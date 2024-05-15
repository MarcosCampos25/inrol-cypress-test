const url = 'https://inrol.uy/';

describe('Verificar que los mensajes de error se muestran correctamente', () => {
  it('Agregar prdocuto a carrito sin elegir color', () => {
    cy.visit(url + 'ver/producto/1')
    cy.get('#enlace__agregar').click()
    cy.get('body > div:nth-child(7)').should('contain', 'Seleccione un color')
  });

  it('Agregar prdocuto con un color inválido (por url o modificando el html)', () => {
    // Verifico la validación del lado del servidor en este caso
    cy.visit(url + 'pago/agregar_todo_al_carrito/1?cantidad=2&color=%23ff1111') // Acá pongo un color que no existe en ese producto
    cy.get('#enlace__agregar').click()
    cy.get('body > div.notyf').should('contain', 'Seleccione un color')
  });

  it('Agregar prdocuto con cantidad inválida', () => {
    cy.visit(url + 'ver/producto/1')
    cy.get('#cantidad__productos').clear().type('0')
    cy.get('#enlace__agregar').click()
    cy.get('body > div.notyf').should('contain', 'Cantidad inválida')
  });

  it('Eliminar un producto del carrito y verificar que muestre que esta vacío', () => {
    cy.visit(url + 'pago/agregar_todo_al_carrito/1?cantidad=2&color=%23ff0000')
    cy.get('body > main > div.container > div > a').click()
    cy.get('body > div.notyf-announcer').should('contain', 'Se elimino el producto del carrito')
    cy.get('body > main > div.container.cart-item > div').should('contain', 'Carrito vacío')
  });

});
