const topUpActions = require('../../page_definitions/page_actions/RecargaActions.js');

Given(
  /^que "([^"]*)" possui uma conta pagamento para recarregar seu celular$/,
  async _nome => {
    await topUpActions.createAPaymentAccountWithBalance();
  }
);

When(/^ele aciona a opção de recarga$/, async () => {
  await topUpActions.clickTopUpCard();
});

When(/^preenche e confirma o formulário com os dados da operadora, ddd e telefone$/, async () => {
  await topUpActions.fillFormReceiver();
});

Then(/^a solicitação de recarga é realizada e o comprovante pode ser visualizado$/, async () => {
  await topUpActions.confirmTopUp();
});