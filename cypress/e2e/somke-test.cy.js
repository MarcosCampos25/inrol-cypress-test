const url = 'https://inrol.uy/';

describe('Verificar carga correcta de cada pantalla', () => {

  it('Elementos cargan correctamente en la página principal', () => {
    cy.visit(url)
    cy.get('h1.title-class')
    cy.get('img.carousel__image')
    cy.get('#tiktok-video')
  });

  it('Elementos cargan correctamente en la página sobre nosotros', () => {
    cy.visit(url + 'sobre-nosotros')
    cy.get('h1').should('contain', 'Bienvenido a Inrol, conoce más sobre nostoros')
  });

  it('Elementos cargan correctamente en la página preguntas frecuentes', () => {
    cy.visit(url + 'ver/preguntas-frecuentes')
    cy.get('.expand-icon')
  });

  it('Elementos cargan correctamente en la página contacto', () => {
    cy.visit(url + 'contacto')
    cy.get('body > main > div > form > div.title')
  });

  it('Elementos cargan correctamente en la página carrito (con un producto agregado)', () => {
    cy.visit(url + 'pago/agregar_todo_al_carrito/1?cantidad=2&color=%23ff0000')
    cy.get('#quantity-1-ff0000').should('have.value', '2')
    cy.get('body > main > div.container > div > div > div.color-circle')
    .invoke('attr', 'style')
    .then(style => {
      const backgroundColor = style.match(/background-color: (#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3});?/)[1];
      expect(backgroundColor).to.equal('#ff0000');
    });
  });

  it('Elementos cargan correctamente en la página ver producto', () => {
    cy.visit(url + 'ver/producto/1')
    cy.get('#cantidad__productos').should('have.value', '1')
    cy.get('.titulo-producto').should('contain', 'Neceser diamantado')
  });

  it('Elementos cargan correctamente en la página de manejo de errores', () => {
    cy.visit(url + '12345678')
    cy.get('h1[data-h1="404"]')
    cy.get('p[data-p="BAD REQUEST"]')
    cy.get('.description')
  });
  
  it('Elementos cargan correctamente en la página de login', () => {
    cy.visit(url + 'login')
    cy.get('#username')
    cy.get('#password')
  });

  it('Pantalla de pago', () => {
    cy.visit(url + 'pago/agregar_todo_al_carrito/1?cantidad=2&color=%23ff0000');
    cy.visit(url + 'pago/datos_direccion');
  });

});
