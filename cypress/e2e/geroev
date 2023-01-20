describe('geroev', () => {
  it('Main page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.visit('https://kvartal-geroev.ru/')
    cy.get('.general_cookies_popup__btn').click() // закрываем уведомление о сборе куки
    cy.wait(1000) // ожидаем 1 сек.

    // далее для загрузки "ленивых" изображений подскролливаем страницу к блокам с lazy image и ожидаем по 2 сек.
    cy.get('.main > :nth-child(6)').scrollIntoView() // блок "Квартиры на любой вкус"
    cy.wait(3000)
    cy.get('.main > :nth-child(7)').scrollIntoView() // блок "Рядом с Москвой"
    cy.wait(3000)
    cy.get('.purchase').scrollIntoView() // блок "Способы покупки"
    cy.wait(3000)
    cy.get('.main > :nth-child(9)').scrollIntoView() // блок "Контакты"
    cy.wait(3000)

    // перед скроллшотом всей главной страницы скрываем изменчивые элементы во избежание падений тестов
    cy.get('.header-container').hideElement() // скрываем хедер во избежание перекрытия контента главной страницы при скроллшоте
    cy.get('#slick-slide00 > :nth-child(1) > [style="width: 100%; display: inline-block;"] > .main-slider2__item').hideElement()
    cy.get('.location-sidebar__text > :nth-child(3)').hideElement() // номер телефона в блоке Контакты
    cy.get('.location-sidebar__text > :nth-child(7) > a').hideElement() // номер телефона офиса продаж в блоке Контакты
    cy.compareSnapshot('main-page', 0.02) // делаем снэпшот всей страницы с условием (threshold), что пискели в скриншоте совпадаеют с эталоном не менее чем на 98%
  })

  it('Menu-burger', () => {   
    cy.visit('https://kvartal-geroev.ru/')
    cy.get('.general_cookies_popup__btn').click() // закрываем уведомление о сборе куки
    cy.get('.hamburger').click() // открываем меню-бургер

    cy.get(':nth-child(1) > .link > .link__text').hideElement() // скрываем номер телефона в футере меню-бургер
    cy.get('#menu').compareSnapshot('menu-burger') // делаем снэпшот меню-бургер 
  })
})