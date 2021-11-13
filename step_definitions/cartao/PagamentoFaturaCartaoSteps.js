const pagamentoFaturaCartaoAction = require('../../page_definitions/page_actions/PagamentoFaturaCartaoAction.js'); 

When(/^clicar fatura Fechada$/, async () => { 
    await pagamentoFaturaCartaoAction.clicarFaturaFechada(); 
}); 

When(/^clicar pagar fatura$/, async () => {
    await pagamentoFaturaCartaoAction.clicarPagarFatura(); 
    await pagamentoFaturaCartaoAction.clicarPagarFatura(); 
}); 

When(/^clicar pagar total$/, async () => {
    await pagamentoFaturaCartaoAction.clicarPagarTotal();
}); 

When(/^clicar copiar código$/, async () => {
    await pagamentoFaturaCartaoAction.clicarCopiarCodigo();
}); 

Then(/^o código de barra foi copiado com sucesso.$/,async () => {
    await pagamentoFaturaCartaoAction.validarMensagemSucesso(); 
   
  }); 