const habilirarCreditoAction = require('../../page_definitions/page_actions/HabilirarCreditoAction.js');

Given(/^que ele acessa a tela de login home habiltar (.*) (.*)$/, async (cpf, password) => {
  await habilirarCreditoAction.clicarComecar();
  await habilirarCreditoAction.clicarBotaoEntrar();
  await habilirarCreditoAction.clicarPermitirDepois(); 
  await habilirarCreditoAction.inserirCpf([cpf]);  
  await habilirarCreditoAction.clicarLabelSenha(); 
  await habilirarCreditoAction.inserirSenha([password]);
  
  });

When(/^ele aciona banner ativar função crédito$/, async () => {
  await habilirarCreditoAction.clicarBannerCredito();
}); 

Then(/^deve ser apresentado banner de taxas e encargos$/,async () => {
    await habilirarCreditoAction.clicarTaxasEncargos();  
  }); 
  
Then(/^deve ativar funcao credito com sucesso$/,async () => {
    await habilirarCreditoAction.clicarAtivarFuncaoCredito();  
    await habilirarCreditoAction.selecionarMesVencimentoFatura();  
    await habilirarCreditoAction.clicarContinuarCredito();  
    await habilirarCreditoAction.clicarIrParaCartoes();     
  
  });