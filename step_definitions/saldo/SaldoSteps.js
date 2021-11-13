const saldoActions = require('../../page_definitions/page_actions/SaldoActions.js');

Given(/^que "([^"]*)" possui uma conta pagamento com saldo$/, async _nome => {
  await saldoActions.createAPaymentAccountWithBalance();
});

Given(/^que "([^"]*)" possui uma conta pagamento(?: sem saldo)?$/, async _nome => {
  await saldoActions.createAPaymentAccountWithoutBalance();
});

Given(
  /^que "([^"]*)" possui uma conta pagamento com saldo parcialmente bloqueado$/,
  async _nome => {
    await saldoActions.createAPaymentAccountWithBlockedBalance();
  }
);

When(/^el(?:e|a) consulta o saldo disponível$/, async () => {
  await saldoActions.selecionarOpcaoVerSaldo();
});

Then(/^o saldo disponível deve ser exibido$/, async () => {
  await saldoActions.validarSaldo();
});

Then(/^o saldo disponível deve ser zero$/, async () => {
  await saldoActions.validarSaldoZerado();
});

Then(/^o saldo bloqueado deve ser exibido$/, async () => {
  await saldoActions.validarSaldo();
  await saldoActions.validarSaldoBloqueado();
});

Then(/^ele deve ver mais informações sobre seu saldo bloqueado$/, async () => {
  await saldoActions.validarInformacoesSaldoBloqueado();
});
