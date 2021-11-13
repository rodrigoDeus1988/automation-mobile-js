const { I } = inject();
const transfActions = require('../../page_definitions/page_actions/TransferenciaContasMidwayActions.js');

Given(
  /^que "([^"]*)" possui uma conta pagamento para transferência para contas midway$/,
  async _nome => {
    await transfActions.createAPaymentAccountWithBalance();
  }
);

When(/^ele aciona a opção transferencia$/, async () => {
  await transfActions.clicarCardTransferencia();
  await transfActions.clicarLabellInstituiçãoDaConta();
});

When(/^informa valor de transferencia para contas midway$/, async () => {
  const config = await I.readYmlWithName('dados');
  await transfActions.pesquisarContaMidway({
    banco: config.contaMidway.banco
  });
  await transfActions.inserirContaMidway({
    conta: config.contaMidway.conta
  });
  await transfActions.clicarBotaoContinuar();
  await transfActions.inserirValorTransfer();
  await transfActions.clicarBotaoContinuar();
  await transfActions.aguardarCampoDataAgendamento();
  await transfActions.clicarBotaoContinuar();
  await transfActions.inserirIdentificacaoExtrato();
  await transfActions.clicarBotaoConfirmar();
});

Then(/^transferência entre contas midway efetuado com sucesso$/, async () => {
  await transfActions.validarComprovonteTransferencia();
});

Then(/^transferência entre contas midway agendado com sucesso$/, async () => {
  await transfActions.validarComprovonteAgendamento();
});

When(/^informa valor de transferencia para contas midway e data para agendamento$/, async () => {
  const config = await I.readYmlWithName('dados');
  await transfActions.pesquisarContaMidway({
    banco: config.contaMidway.banco
  });
  await transfActions.inserirContaMidway({
    conta: config.contaMidway.conta
  });
  await transfActions.clicarBotaoContinuar();
  await transfActions.inserirValorTransfer();
  await transfActions.clicarBotaoContinuar();
  await transfActions.inserirDataAgendamentoMidway();
  await transfActions.clicarBotaoContinuar();
  await transfActions.inserirIdentificacaoExtrato();
  await transfActions.clicarBotaoConfirmar();
});

When(/^informa valor de transferencia para contas midway e cadastra favorecido$/, async () => {
  const config = await I.readYmlWithName('dados');
  await transfActions.pesquisarContaMidway({
    banco: config.contaMidway.banco
  });
  await transfActions.inserirContaMidway({
    conta: config.contaMidway.conta
  });
  await transfActions.clicarBotaoSalvarFavorito();
  await transfActions.clicarBotaoContinuar();
  await transfActions.inserirValorTransfer();
  await transfActions.clicarBotaoContinuar();
  await transfActions.clicarBotaoContinuar();
  await transfActions.inserirIdentificacaoExtrato();
  await transfActions.clicarBotaoConfirmar();
});

When(
  /^informa valor de transferencia para contas midway, data para agendamento e cadastra favorecido$/,
  async () => {
    const config = await I.readYmlWithName('dados');
    await transfActions.pesquisarContaMidway({
      banco: config.contaMidway.banco
    });
    await transfActions.inserirContaMidway({
      conta: config.contaMidway.conta
    });
    await transfActions.clicarBotaoSalvarFavorito();
    await transfActions.clicarBotaoContinuar();
    await transfActions.inserirValorTransfer();
    await transfActions.clicarBotaoContinuar();
    await transfActions.inserirDataAgendamentoMidway();
    await transfActions.clicarBotaoContinuar();
    await transfActions.inserirIdentificacaoExtrato();
    await transfActions.clicarBotaoConfirmar();
  }
);

Given(/^informa dados incorretos$/, async () => {
  const config = await I.readYmlWithName('dados');
  await transfActions.pesquisarContaMidway({
    banco: config.contaMidway.banco
  });
  await transfActions.inserirContaMidway({
    conta: config.contaMidway.contaInvalida
  });
  await transfActions.clicarBotaoContinuar();
});

Then(/^é exibido erro de conta inválida$/, async () => {
  await transfActions.validarErroConta();
});
