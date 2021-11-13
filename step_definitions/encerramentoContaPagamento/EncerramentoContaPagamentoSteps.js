const encerramentoContaActions = require('../../page_definitions/page_actions/EncerramentoContaPagamentoAction.js');

Given(/que "([^"]*)" possui uma conta pagamento no qual deseja encerrar/, async _nome => {
  await encerramentoContaActions.createAPaymentAccount();
});

When(/el(?:e|a) acessa o perfil da conta/, async () => {
  await encerramentoContaActions.acessarPerfil();
});

When(/el(?:e|a) aciona a opção de encerrar conta/, async () => {
  await encerramentoContaActions.clicarEncerrarConta();
});

When(/el(?:e|a) informa o motivo do encerramento/, async () => {
  await encerramentoContaActions.informarMotivoEncerramento();
});

Then('a conta pagamento deve ser encerrada com sucesso', async () => {
  await encerramentoContaActions.validarEncerramentoContaPagamento();
});
