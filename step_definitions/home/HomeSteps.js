const homeActions = require('../../page_definitions/page_actions/HomeActions.js');

Given(/^que "([^"]*)" possui uma conta pagamento com cartão riachuelo$/, async _nome => {
  await homeActions.createAPaymentAccountWithCard();
});

// AtivaçãoToken
Given(/^el(?:e|a) clica no botão de ativação do Token$/, async () => {
  await homeActions.clicarAtivarToken();
});

//Extrato
Given(/^el(?:e|a) aciona a opção Extrato$/, async () => {
  await homeActions.clicarCardExtratoHome();
});

Then('deve ser apresentado extrato da conta midway', async () => {
  await homeActions.visualizarTelaExtratoHome();
});

//Transferência
Given(/^el(?:e|a) aciona opção Transferência$/, async () => {
  await homeActions.clicarCardTransferenciaHome();
});

Then('deve ser apresentada Transferência de conta midway', async () => {
  await homeActions.visualizarTelaTransferenciaHome();
});

//DepositoPorBoleto
Given(/^el(?:e|a) aciona opção Deposito por boleto$/, async () => {
  await homeActions.clicarCardDepositoPorBoletoHome();
});

Then('deve ser apresentada tela Deposito por boleto', async () => {
  await homeActions.visualizarTelaDepositoPorBoletoHome();
});

//Cartão
Given(/^el(?:e|a) aciona icone Cartão$/, async () => {
  await homeActions.clicarCartoesHome();
});

Then('deve ser apresentado cartão com sucesso', async () => {
  await homeActions.visualizarTelaCartoesHome();
});

//Outros
Given(/^el(?:e|a) aciona icone Outros$/, async () => {
  await homeActions.clicarOutrosHome();
});

Then('deve ser apresentada tela Outros serviços', async () => {
  await homeActions.visualizarTelaOutrosHome();
});

//Chat
Given(/^el(?:e|a) aciona icone Chat$/, async () => {
  await homeActions.clicarChatHome();
});

Then('deve ser apresentada tela de Chat', async () => {
  await homeActions.visualizaTelaChat();
});
