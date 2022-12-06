describe('Проверка формы логина', function () {
   it('Негативный кейс, верный логин, неверный пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('yura_levoshuk5@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('nmKjU78jKO01');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
})