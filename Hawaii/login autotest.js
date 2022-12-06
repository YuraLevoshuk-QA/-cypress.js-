describe('Проверка формы логина', function () {
   it('Позитивный кейс, верный логин и пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('yura_levoshuk5@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('nmKjU78jKO01m');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
    })
})
