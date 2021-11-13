const transfActions = require('../../page_definitions/page_actions/TransferenciaFavorecidoAction.js');

When('ele aciona o primeiro favorecido do atalho home', async () => {
  await transfActions.clicarPrimeiroFav();
});

When('informa valor de transferencia e identificacao para confirmar', async () => {
  await transfActions.inserirValorTransfer();
  await transfActions.clicarBotaoContinuar();
  await transfActions.clicarBotaoContinuar();
  await transfActions.inserirIdentificacaoExtrato();
  await transfActions.clicarBotaoConfirmar();
});

Then('transferência para favorecido efetuado com sucesso', async () => {
  await transfActions.validarComprovonte();
});

When('ele aciona a opção transferencia e escolhe o primeiro contato', async () => {
  await transfActions.clicarCardTransferencia();
  await transfActions.clicarPrimeiroContatoDaLista();
});

When('ele aciona a opção transferencia e escolhe o primeiro atalho', async () => {
  await transfActions.clicarCardTransferencia();
  await transfActions.clicarPrimeiroIconFavLista();
});
