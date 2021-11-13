const parcelamentoFaturaCartaoAction = require('../../page_definitions/page_actions/ParcelamentoFaturaCartaoAction.js'); 


When(/^clicar ver lancamentos$/, async () => { 
    await parcelamentoFaturaCartaoAction.clicarVerLancamentos();
}); 

When(/^clicar pagar fatura$/, async () => {
    await parcelamentoFaturaCartaoAction.clicarMesFechado();
    await parcelamentoFaturaCartaoAction.pagarFatura();
}); 

When(/^clicar parcelar fatura$/, async () => {
    await parcelamentoFaturaCartaoAction.parcelarFatura();
    await parcelamentoFaturaCartaoAction.confirmarFatura();
    await parcelamentoFaturaCartaoAction.selecionarParcela1();
    await parcelamentoFaturaCartaoAction.confirmarParc();
    await parcelamentoFaturaCartaoAction.confirmarResumo();

}); 

Then(/^deve ser apresentado processando o seu parcelamento$/,async () => {
    await parcelamentoFaturaCartaoAction.confirmarProcesPar(); 
  }); 

