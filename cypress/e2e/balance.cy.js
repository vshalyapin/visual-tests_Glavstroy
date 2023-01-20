describe('balance', () => {
  it('Main page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })
    
    cy.visit('https://get-balance.ru/')
    cy.get('.cookies-btn').click() // закрываем уведомление о сборе куки
    cy.wait(1000) // ожидаем 1 сек.

    // перед скроллшотом всей главной страницы скрываем изменчивые элементы во избежание падений тестов
    cy.get('.block > .logo').hideElement() // лого balance в футере
    cy.get('.contacts__wrapper > .contacts > .phone > a').hideElement() // номер телефона в футере
    cy.compareSnapshot('main-page') // делаем снэпшот всей страницы
  })

  it('Menu-burger', () => {    
    cy.visit('https://get-balance.ru/')
    cy.get('.mb').click() // открываем меню-бургер
    cy.wait(3000) // ожидаем 3 сек.

    cy.get('.menu_content').compareSnapshot('menu-burger') // делаем снэпшот меню-бургер
  })
})