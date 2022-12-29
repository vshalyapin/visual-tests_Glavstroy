describe('culture', () => {
  it('Main page', () => {   
    cy.visit('https://culture-home.ru/')
    cy.wait(2000)
     
    cy.get('#first').compareSnapshot('main-render') // делаем снэпшот главного рендера
  })

  it('Parking', () => {    
    cy.visit('https://culture-home.ru/parking/')
    cy.wait(2000)

    cy.get('.bx-core').compareSnapshot('parking') // делаем снэпшот верхней части страницы
  })
})