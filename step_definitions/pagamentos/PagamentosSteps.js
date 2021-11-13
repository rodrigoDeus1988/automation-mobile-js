const pagamentosAction = require('../../page_definitions/page_actions/PagamentosActions');

Given(/^que "([^"]*)" possui uma conta pagamento com saldo$/, async _nome => {
  await pagamentosAction.createAPaymentAccountWithoutBalance();
});

Given(/^que ele seleciona a opção para pagamento de boleto$/, async () => {
  await pagamentosAction.selecionaOpcaoPagamentos();
});

When(/^ele pagar um boleto com o saldo disponível$/, async () => {
  await pagamentosAction.digitarBoletoValido();
  await pagamentosAction.selecionaOpcaoContinuar();
  await pagamentosAction.selecionaOpcaoPagar();
});
When(/^ele pagar um boleto invalido com o saldo disponível$/, async () => {
  await pagamentosAction.digitarBoletoInvalido();
  await pagamentosAction.selecionaOpcaoContinuar();
  await pagamentosAction.selecionaOpcaoPagar();
});

Then(/^a tela de comprovante de pagamento deve ser exibida$/, async () => {
  await pagamentosAction.validarPagamentoBoletoValido();
});

Then(/^a tela de comprovante de pagamento não deve ser exibida$/, async () => {
  await pagamentosAction.validarPagamentoBoletoInvalido();
});
Then(/^a tela de comprovante de agendamento deve ser exibida$/, async () => {
  await pagamentosAction.validarPagamentoBoletoValido();
});

Then(/^a tela de comprovante de agendamento não deve ser exibida$/, async () => {
  await pagamentosAction.validarPagamentoBoletoInvalido();
});

When(/^ele agendar o pagamento de um boleto válido$/, async () => {
  await pagamentosAction.digitarBoletoValido();
  await pagamentosAction.selecionaOpcaoContinuar();
  await pagamentosAction.selecionaOpcaoDeAgendamento();
  await pagamentosAction.selecionaOpcaoPagar();
});

When(/^ele agendar o pagamento de um boleto inválido$/, async () => {
  await pagamentosAction.digitarBoletoInvalido();
  await pagamentosAction.selecionaOpcaoContinuar();
  await pagamentosAction.selecionaOpcaoDeAgendamento();
  await pagamentosAction.selecionaOpcaoPagar();
});
