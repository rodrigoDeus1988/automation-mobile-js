const { I } = inject();
const gerarExtratoActions = require('../../page_definitions/page_actions/GerarExtratoActions.js');
const loginActions = require('../../page_definitions/page_actions/LoginActions.js');

Given(/^que "([^"]*)" possui uma conta pagamento com movimentações de saída$/, async () => {
  await gerarExtratoActions.createAPaymentAccountWithOutboundMovement();
});

Given(/^que "([^"]*)" possui uma conta pagamento com movimentações de entrada$/, async () => {
  await gerarExtratoActions.createAPaymentAccountWithIncomingMovement();
});

Given(/^que "([^"]*)" possui uma conta pagamento com movimentações futuras$/, async () => {
  await gerarExtratoActions.createAPaymentAccountWithFutureMovement();
});

When(/^el(?:e|a) acessa a opção para visualizar o extrato$/, async () => {
  await loginActions.esperaHomeCarregar();
  await gerarExtratoActions.selecionaOpcaoExtrato();
  await gerarExtratoActions.visualizarPaginaExtrato();
});

Then(/^a movimentação do extrato é apresenta com sucesso$/, async () => {
  await gerarExtratoActions.visualizarPaginaExtrato();
});

When(/^el(?:e|a) visualiza os débitos de sua conta pagamento$/, async () => {
  await gerarExtratoActions.selecionaOpcaoExtrato();
  await gerarExtratoActions.visualizarPaginaExtrato();
  await gerarExtratoActions.acessaAsMovimentacoesDeSaida();
});

When(/^el(?:e|a) visualiza os créditos de sua conta pagamento$/, async () => {
  await gerarExtratoActions.selecionaOpcaoExtrato();
  await gerarExtratoActions.visualizarPaginaExtrato();
  await gerarExtratoActions.acessaAsMovimentacoesDeEntrada();
});

When(/^el(?:e|a) visualiza os lançamentos futuros de sua conta pagamento$/, async () => {
  await gerarExtratoActions.selecionaOpcaoExtrato();
  await gerarExtratoActions.visualizarPaginaExtrato();
  await gerarExtratoActions.acessaAsMovimentacoesFuturas();
});

When(/^el(?:e|a) visualiza as últimas 10 movimentações$/, async () => {
  await gerarExtratoActions.selecionaOpcaoExtrato();
  await gerarExtratoActions.visualizarPaginaExtrato();
});

When(/^el(?:e|a) seleciona as datas para exibição$/, async () => {
  const paymentAccount = await I.readNoteWithKey('paymentAccount');
  const { startDate, endDate } = paymentAccount.account;
  await gerarExtratoActions.defineFiltroDeData(startDate, endDate);
});

Then('todas as informações exibidas devem ser de débito', async () => {
  await gerarExtratoActions.validarMovimentacoesDeSaida();
});

Then('todas as informações exibidas devem ser de crédito', async () => {
  await gerarExtratoActions.validarMovimentacoesDeEntrada();
});

Then('devem ser exibidos os lançamentos futuros', async () => {
  await gerarExtratoActions.validarMovimentacoesFuturas();
});
