const bloqueioDefinitivoAction = require('../../page_definitions/page_actions/BloqueioCartoes.js');
const habilirarCreditoAction = require('../../page_definitions/page_actions/HabilirarCreditoAction.js');

Given(/^que ele acessa a tela de login cartoes (.*) (.*)$/, async (cpf, password) => {
  await habilirarCreditoAction.clicarComecar();
  await habilirarCreditoAction.clicarBotaoEntrar();
  await habilirarCreditoAction.clicarPermitirDepois();
  await habilirarCreditoAction.inserirCpf([cpf]);
  await habilirarCreditoAction.clicarLabelSenha();
  await habilirarCreditoAction.inserirSenha([password]);

});

When(/^ele aciona aba cartoes$/, async () => {
  await bloqueioDefinitivoAction.clicarCartoesTsys();
});

When(/^clica opcao bloqueio Definitivo$/, async () => {
  await bloqueioDefinitivoAction.clicarBloqueioDefinitivo();
});

When(/^seleciona motivo do bloqueio$/, async () => {
  await bloqueioDefinitivoAction.clicarMotivoBloqueio();
});


Then(/^deve ser apresentado seu cartao esta bloqueado$/, async () => {
  await bloqueioDefinitivoAction.clicarBloquear();
  await bloqueioDefinitivoAction.clicarFechar();
});

When(/^clica clicar Engrenagem$/, async () => {
  await bloqueioDefinitivoAction.clicarEngrenagem();

});

When(/^clica opcao bloqueio temporário$/, async () => {
  await bloqueioDefinitivoAction.clicarBloqueioTemporario();
});

When(/^clica bloquear$/, async () => {
  await bloqueioDefinitivoAction.clicarBloquearTemp();
});

Then(/^deve ser apresentado seu cartao está bloqueado temporariamente$/, async () => {
  await bloqueioDefinitivoAction.vaidarTextoSucesso();

});

When(/^clica desbloquear$/, async () => {
  await bloqueioDefinitivoAction.clicarDesbloquearCad();
});

Then(/^deve ser apresentado como desbloqueado$/, async () => {
  await bloqueioDefinitivoAction.validarTituloConfigurarCartao();

});

Then(/^devera cancelar tentativa de bloqueio temporario$/, async () => {
  await bloqueioDefinitivoAction.clicarCancelar();

}); 