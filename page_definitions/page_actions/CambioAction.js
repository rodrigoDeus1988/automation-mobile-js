const { I } = inject();
const PageBloqueioDefinitivo = require('../page_objects/cartoes/PageCambio.js');
const { validarTituloConfigurarCartao } = require('./BloqueioCartoes.js');

module.exports = {

  async clicarCotacaoDolar() {
    I.wait(30); 
    I.swipeDown();
    const botaoCotacao = await I.findByText(PageBloqueioDefinitivo.textos.txtCotacaoDolar);
    I.waitForVisible(botaoCotacao, 10);
    I.tap(botaoCotacao);
    
  },
  async validarTituloCotacao(){
    const tituloPage = await I.findByText(PageBloqueioDefinitivo.textos.txtTituloCotacaoDolar);
    I.waitForVisible(tituloPage, 20);
    I.wait(10); 
  }

  
}; 