const HomeCartaoActions = require('../../page_definitions/page_actions/HomeCartaoActions.js');

Given(/^que "([^"]*)" possui uma conta pagamento sem cartão riachuelo$/, async _nome => {
  await HomeCartaoActions.createAPaymentAccountWithoutCard();
});

When(/^(?:que )?ele acess(?:ou|a) a opção cartões$/, async () => {
  await HomeCartaoActions.clicarHomeCartoes();
});

Then(/^visualizar a apresentação das informações na tela inicial$/, async () => {
  await HomeCartaoActions.conferirElementos();
});

Then(/^el(?:e|a) poderá visualizar seus lançamentos na opção Ver lançamentos$/, async () => {
  await HomeCartaoActions.clicarVerLancamento();
});

Then(/^el(?:e|a) poderá visualizar sua fatura na opção Ver Fatura$/, async () => {
  await HomeCartaoActions.clicarVerFatura();
});

Then(/^validar a apresentação da tela mostrando que não possui cartão$/, async () => {
  await HomeCartaoActions.validarTelaSemCartao();
});
