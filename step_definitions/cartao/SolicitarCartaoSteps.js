const SolicitarCartaoActions = require('../../page_definitions/page_actions/SolicitarCartaoActions.js');

Given(/^que "([^"]*)" possui uma conta pagamento sem cartão de débito$/, async _nome => {
  await SolicitarCartaoActions.createAPaymentAccountWithBalance();
});

Given(/^acessar a opção solicitar cartão de débito Midway$/, async () => {
  await SolicitarCartaoActions.clicarSolicitarCartao();
});

Given(/^clicar na opção aceito$/, async () => {
  await SolicitarCartaoActions.clicarAceito();
});

Given(/^adicionar o endereço residencial$/, async () => {
  await SolicitarCartaoActions.adicionarEndereco();
});

Given(/^confirmar o endereço$/, async () => {
  await SolicitarCartaoActions.confirmarEndereco();
});

Then(/^seu cartão é solicitado com sucesso$/, async () => {
  await SolicitarCartaoActions.solicitacaoSucesso();
});
