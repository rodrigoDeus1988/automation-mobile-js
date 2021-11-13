const contaRemunerada = require('../../page_definitions/page_actions/ContaRemuneradaAction.js');

Given(/^que "([^"]*)" possui uma conta remunerada com saldo$/, async _nome => {
  await contaRemunerada.createARemuneratedAccount();
});

When(/^el(?:e|a) consulta o saldo atual$/, async () => {
  await contaRemunerada.visualizarSaldoAtual();
});

When(/^ele aciona card conta remunerada$/, async () => {
  await contaRemunerada.clicarContaRemunerada();
  await contaRemunerada.visualizarContaRemunerada();
  await contaRemunerada.visualizarSaldoContaRemunerada();
});

Then(
  /^deve ser apresentar Rendimento bruto no mes, Imposto de renda, IOF, Rendimento liquido$/,
  async () => {
    await contaRemunerada.validarAtributosRemunerada();
    await contaRemunerada.clicarComoFunciona();
  }
);
