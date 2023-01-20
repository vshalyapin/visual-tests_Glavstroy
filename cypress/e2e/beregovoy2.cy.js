describe('Beregovoy2', () => {
  it('Main page', () => {
    cy.visit('https://beregovoy-kvartal.ru/')
    cy.get('.circle_3HyQf').click() // закрываем уведомление о сборе куки

    // добавить код для проверки хедера
    
    // далее для загрузки "ленивых" изображений подскролливаем страницу к блокам с lazy image и ожидаем по 2 сек.
    cy.get('.topWrap_27XFq').scrollIntoView() // слайдер Квартиры
    cy.wait(2000)
    cy.get('.FlatsSection_3UDpM > .ImageBreak_2s0Oj > .images_3BPDa > .image-lazy > .image-lazy__image').scrollIntoView() // рендер "Общественная гостиная с камином и видом на двор"
    cy.wait(2000)
    cy.get('.content_3jQDr').scrollIntoView() // слайдер "Благоустройство"
    cy.wait(2000)
    cy.get('.LandscapeSection_1MP-_ > .ImageBreak_2s0Oj > .images_3BPDa > .image-lazy > .image-lazy__image').scrollIntoView() // рендер "Набережная парк"
    cy.wait(2000)
    cy.get('.images_3_i7t > .image-lazy > .image-lazy__image').scrollIntoView() // рендер "Архитектура вне времени"
    cy.wait(2000)
    cy.get('.mapWrap_2W_nO').scrollIntoView() // карта "Историческое место"
    cy.wait(2000)
    cy.get('.FormBlock_hCgnB').scrollIntoView() // блок с рендером "Приезжайте на персональную презентацию"

    // перед скроллшотом всей главной страницы скрываем элементы во избежание падений тестов
    cy.get('.wrap_2Ykyh').hideElement() // скрываем хедер во избежание перекрытия контента главной страницы при скроллшоте
    cy.get('.PublicSection_1NscU').hideElement() // скрываем слайдер "Общественные пространства" (ломает скроллшот)
    cy.compareSnapshot('main-page', 0.02) // делаем снэпшот всей страницы с условием (threshold), что пискели в скриншоте совпадаеют с эталоном не менее чем на 99%
  })

  it('Menu-burger', () => {
    cy.visit('https://beregovoy-kvartal.ru/')
    cy.get('.burger_3Mfdq').click() // открываем меню-бургер
    cy.wait(1000)

    // перед снэпшотом меню-бургер скрываем изменчивые элементы во избежание падений тестов
    cy.get('.headerAside_2wQ1N > a.cursor-pointer').hideElement() // номер телефона в хедере
    cy.get('.TheBurgerMenu_1epRd').compareSnapshot('menu-burger', 0.01) // делаем снэпшот меню-бургер с условием (threshold), что пискели в скриншоте совпадаеют с эталоном не менее чем на 99%
  })
})