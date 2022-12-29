describe('100lichny', () => {
  it('Main page', () => {    
    cy.visit('https://100lichny.ru/')
    cy.get('.general_cookies_popup__btn').click() // закрываем уведомление о сборе куки
    cy.wait(1000) // ожидаем 1 сек.

    // перед скроллшотом всей главной страницы скрываем изменчивые элементы во избежание падений тестов
    cy.get('.header-container').hideElement() // скрываем хедер во избежание перекрытия контента главной страницы при скроллшоте
    cy.get('#slick-slide20 > :nth-child(1) > [style="width: 100%; display: inline-block;"] > .main-slider2__item').hideElement() // главный рендер-слайдер
    cy.get('.location-sidebar__content > :nth-child(2) > :nth-child(1) > :nth-child(2)').hideElement() // номер телефона в блоке Контакты
    cy.compareSnapshot('main-page', 0.02) // делаем снэпшот всей страницы с условием (threshold), что пискели в скриншоте совпадаеют с эталоном не менее чем на 98%
  })

  it('Menu-burger', () => {
    cy.visit('https://100lichny.ru/')
    cy.get('.general_cookies_popup__btn').click() // закрываем уведомление о сборе куки
    cy.get('.header__hamburger').click() // открываем меню-бургер

    cy.get(':nth-child(4) > .links-list > :nth-child(1) > .link > .link__text').hideElement() // скрываем номер телефона в меню-бургер
    cy.get('.menu__content').compareSnapshot('menu-burger') // делаем снэпшот меню-бургер
  })
})