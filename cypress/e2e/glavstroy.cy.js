describe('glavstroy', () => {
  it('Main page', () => {    
    cy.visit('https://glavstroy.ru/')
    cy.get('.cookie-warning__close').click() // закрываем уведомление о сборе куки

    cy.scrollTo('bottom')
    cy.get('[href="/projects/k31/"]').scrollIntoView() // проект К31
    cy.wait(1000)
    cy.get('[href="/projects/d8/"]').scrollIntoView() // проект Д8
    cy.wait(1000)
    cy.scrollTo('bottom')
    cy.get('[href="/projects/mmsz/"]').scrollIntoView() // проект Штаб-квартира
    cy.wait(1000)
    cy.get('[href="/projects/M54/"]').scrollIntoView() // проект М54
    cy.wait(1000)
    cy.scrollTo('bottom')
    cy.get('[href="/projects/stolichny/"]').scrollIntoView() // проект Столичный
    cy.wait(1000)
    cy.get('[href="/projects/geroev/"]').scrollIntoView() // проект ЖК Героев
    cy.wait(1000)
    cy.scrollTo('bottom')
    cy.get('[href="/projects/imeretinskij/"]').scrollIntoView() // проект Имеретинский
    cy.wait(2000)
    cy.scrollTo('bottom')
    cy.wait(2000)
    cy.scrollTo('bottom')
    cy.wait(2000)
    cy.scrollTo('bottom')
    cy.wait(2000)
    cy.scrollTo('bottom')
    cy.wait(2000)

    cy.compareSnapshot('main-page', 0.02) // делаем снэпшот всей страницы с условием (threshold), что пискели в скриншоте совпадаеют с эталоном не менее чем на 98%
  })
})