const gerarBoletoActions = require('../../page_definitions/page_actions/GerarBoletoActions.js');

Given(/^que "([^"]*)" possui uma conta pagamento para emissão de boleto$/, async _nome => {
  await gerarBoletoActions.createAPaymentAccountWithoutBalance();
});

Given(
  /^que "([^"]*)" possui uma conta pagamento em situação irregular para emissão de boleto$/,
  async _nome => {
    await gerarBoletoActions.createAPaymentAccountWithIrregularSituation();
  }
);

Given(/^que el(?:e|a) seleciona a opção para depósito por boleto$/, async () => {
  await gerarBoletoActions.selecionaOpcaoDepositoPorBoleto();
});

When(/^el(?:e|a) informa o valor para o deposito$/, async () => {
  await gerarBoletoActions.informaValorDoDeposito();
  await gerarBoletoActions.selecionaOpcaoGerarBoleto();
});

Then(/^el(?:e|a) deve ver que o boleto foi gerado com sucesso$/, async () => {
  await gerarBoletoActions.validarGeracaoBoleto();
});

When(/^el(?:e|a) informa o valor acima do permitido$/, async () => {
  await gerarBoletoActions.informaValorDoDepositoAcimaDoLimite();
});

When(/^el(?:e|a) informa o valor abaixo do permitido$/, async () => {
  await gerarBoletoActions.informaValorDoDepositoAbaixoDoLimite();
});

When(/^el(?:e|a) informa o valor máximo permitido$/, async () => {
  await gerarBoletoActions.informaValorDoDepositoMaximo();
  await gerarBoletoActions.selecionaOpcaoGerarBoleto();
});

When(/^el(?:e|a) informa o valor mínimo permitido$/, async () => {
  await gerarBoletoActions.informaValorDoDepositoMinimo();
  await gerarBoletoActions.selecionaOpcaoGerarBoleto();
});

Then(/^el(?:e|a) deve ver qual o valor máximo permitido por boleto$/, async () => {
  await gerarBoletoActions.validarValorMaximoPorBoleto();
});

Then(/^el(?:e|a) deve ver qual o valor mínimo permitido por boleto$/, async () => {
  await gerarBoletoActions.validarValorMinimoPorBoleto();
});

Then(
  /^el(?:e|a) deve ver a mensagem para migração para conta sem limite de movimentação$/,
  async () => {
    await gerarBoletoActions.validarMensagemMigracaoConta();
  }
);
