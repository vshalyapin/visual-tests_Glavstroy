describe('old.beregovoy', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })
  
  it('Main page', () => {   
    cy.visit('https://old.beregovoy-kvartal.ru/')

    // перед скроллшотом всей главной страницы скрываем изменчивые элементы во избежание падений тестов
    cy.get('.video-slider').hideElement() // видеослайдер на главном рендере
    cy.get('.video_block > .video').hideElement()  // видео в блоке "Архитекторы о проекте"
    cy.get('p > .phone').hideElement()  // номер телефона в футере
    cy.compareSnapshot('main-page') // делаем снэпшот всей страницы
  })

  it('Menu-burger', () => {  
    cy.visit('https://old.beregovoy-kvartal.ru/')
    cy.get('.menu_humburger').click() // открываем меню-бургер
    cy.wait(1000)

    cy.get('.number_in > .phone').hideElement()  //  перед снэпшотом скрываем номер телефона в хедере меню-бургер во избежание падений тестов
    cy.get('.inner_size').compareSnapshot('menu-burger') // делаем снэпшот меню-бургер
  })
})