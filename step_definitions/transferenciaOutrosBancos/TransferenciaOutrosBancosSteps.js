const { I } = inject();
const transOutrosBancosfActions = require('../../page_definitions/page_actions/TransferenciaOutrosBancosActions.js');

Given(
  /^que "([^"]*)" possui uma conta pagamento para transferência para outros bancos$/,
  async _nome => {
    await transOutrosBancosfActions.createAPaymentAccountWithBalance();
  }
);

When(/^ele aciona a opção transferencia outros$/, async () => {
  await transOutrosBancosfActions.clicarCardTransferencia();
  await transOutrosBancosfActions.clicarLabellInstituiçãoDaConta();
});

When(/^informa valor de transferencia para outros bancos$/, async () => {
  const config = await I.readYmlWithName('dados');
  await transOutrosBancosfActions.pesquisarContaOutrosBancos({
    banco: config.contaOutroBanco.banco
  });
  await transOutrosBancosfActions.inserirAgencia({
    agencia: config.contaOutroBanco.agencia
  });
  await transOutrosBancosfActions.inserirContaOutrosBancos({
    conta: config.contaOutroBanco.conta
  });
  await transOutrosBancosfActions.inserirTipoDeConta();
  await transOutrosBancosfActions.inserirTransfParaOutro({
    cpf: '090.213.814-60',
    nome: 'Rafael Eduardo Lima'
  });
  await transOutrosBancosfActions.clicarBotaoContinuar();
  await transOutrosBancosfActions.inserirValorTransferOutrosBancos();
  await transOutrosBancosfActions.clicarBotaoContinuar();
  await transOutrosBancosfActions.aguardarCampoDataAgendamento();
  await transOutrosBancosfActions.clicarBotaoContinuar();
  await transOutrosBancosfActions.inserirFinalidadeTransferencia();
  await transOutrosBancosfActions.inserirIdentificacaoExtrato();
  await transOutrosBancosfActions.clicarBotaoConfirmar();
});

Then(/^transferência entre outros bancos efetuado com sucesso$/, async () => {
  await transOutrosBancosfActions.validarComprovonteTransferencia();
});

Then(/^transferência entre outros bancos agendado com sucesso$/, async () => {
  await transOutrosBancosfActions.validarComprovonteAgendamento();
});

When(/^informa valor de transferencia para outros bancos e data para agendamento$/, async () => {
  const config = await I.readYmlWithName('dados');
  await transOutrosBancosfActions.pesquisarContaOutrosBancos({
    banco: config.contaOutroBanco.banco
  });
  await transOutrosBancosfActions.inserirAgencia({
    agencia: config.contaOutroBanco.agencia
  });
  await transOutrosBancosfActions.inserirContaOutrosBancos({
    conta: config.contaOutroBanco.conta
  });
  await transOutrosBancosfActions.inserirTipoDeConta();
  await transOutrosBancosfActions.inserirTransfParaOutro({
    cpf: '090.213.814-60',
    nome: 'Rafael Eduardo Lima'
  });
  await transOutrosBancosfActions.clicarBotaoContinuar();
  await transOutrosBancosfActions.inserirValorTransferOutrosBancos();
  await transOutrosBancosfActions.clicarBotaoContinuar();
  await transOutrosBancosfActions.inserirDataAgendamento();
  await transOutrosBancosfActions.clicarBotaoContinuar();
  await transOutrosBancosfActions.inserirFinalidadeTransferencia();
  await transOutrosBancosfActions.inserirIdentificacaoExtrato();
  await transOutrosBancosfActions.clicarBotaoConfirmar();
});

When(/^informa valor de transferencia para outros bancos e cadastra favorecido$/, async () => {
  const config = await I.readYmlWithName('dados');
  await transOutrosBancosfActions.pesquisarContaOutrosBancos({
    banco: config.contaOutroBanco.banco
  });
  await transOutrosBancosfActions.inserirAgencia({
    agencia: config.contaOutroBanco.agencia
  });
  await transOutrosBancosfActions.inserirContaOutrosBancos({
    conta: config.contaOutroBanco.conta
  });
  await transOutrosBancosfActions.inserirTipoDeConta();
  await transOutrosBancosfActions.inserirTransfParaOutro({
    cpf: '090.213.814-60',
    nome: 'Rafael Eduardo Lima'
  });
  await transOutrosBancosfActions.clicarBotaoSalvarFavorito();
  await transOutrosBancosfActions.clicarBotaoContinuar();
  await transOutrosBancosfActions.inserirValorTransferOutrosBancos();
  await transOutrosBancosfActions.clicarBotaoContinuar();
  await transOutrosBancosfActions.clicarBotaoContinuar();
  await transOutrosBancosfActions.inserirFinalidadeTransferencia();
  await transOutrosBancosfActions.inserirIdentificacaoExtrato();
  await transOutrosBancosfActions.clicarBotaoConfirmar();
});

When(
  /^informa valor de transferencia para outros bancos, cadastra favorecido e agenda$/,
  async () => {
    const config = await I.readYmlWithName('dados');
    await transOutrosBancosfActions.pesquisarContaOutrosBancos({
      banco: config.contaOutroBanco.banco
    });
    await transOutrosBancosfActions.inserirAgencia({
      agencia: config.contaOutroBanco.agencia
    });
    await transOutrosBancosfActions.inserirContaOutrosBancos({
      conta: config.contaOutroBanco.conta
    });
    await transOutrosBancosfActions.inserirTipoDeConta();
    await transOutrosBancosfActions.inserirTransfParaOutro({
      cpf: '090.213.814-60',
      nome: 'Rafael Eduardo Lima'
    });
    await transOutrosBancosfActions.clicarBotaoSalvarFavorito();
    await transOutrosBancosfActions.clicarBotaoContinuar();
    await transOutrosBancosfActions.inserirValorTransferOutrosBancos();
    await transOutrosBancosfActions.clicarBotaoContinuar();
    await transOutrosBancosfActions.inserirDataAgendamento();
    await transOutrosBancosfActions.clicarBotaoContinuar();
    await transOutrosBancosfActions.inserirFinalidadeTransferencia();
    await transOutrosBancosfActions.inserirIdentificacaoExtrato();
    await transOutrosBancosfActions.clicarBotaoConfirmar();
  }
);

Given(/^informa os dados com cpf incorreto$/, async () => {
  const config = await I.readYmlWithName('dados');
  await transOutrosBancosfActions.pesquisarContaOutrosBancos({
    banco: config.contaOutroBanco.banco
  });
  await transOutrosBancosfActions.inserirAgencia({
    agencia: config.contaOutroBanco.agencia
  });
  await transOutrosBancosfActions.inserirContaOutrosBancos({
    conta: config.contaOutroBanco.conta
  });
  await transOutrosBancosfActions.inserirTipoDeConta();
  await transOutrosBancosfActions.inserirTransfParaOutro({
    cpf: '00000000000',
    nome: 'Rafael Eduardo Lima'
  });
});

Then(/^é exibido erro CPF inválido$/, async () => {
  await transOutrosBancosfActions.validarErroCpf();
});
