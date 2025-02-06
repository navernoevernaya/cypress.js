describe('Покупка аватара', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');     // нужно ввести актуальный логин
         cy.get('#password').type('USER_PASSWORD');                     // нужно ввести актуальный пароль
         cy.get('.auth__button').click();
         cy.wait(1500);
         cy.get('.header__container > .header__id').click();
         cy.get('[href="/shop"]').click();
         cy.get(':nth-child(1) > .shop__button').click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('10/25');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('german dolnikov');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
         cy.get('.payment__font-for-success').should('be.visible');
     });
 });