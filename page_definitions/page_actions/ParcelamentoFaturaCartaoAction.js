const { I } = inject();
const PageParcelamentoFaturaCartao = require('../page_objects/cartoes/PageParcelamentoFaturaCartao.js');

module.exports = {

  async clicarVerLancamentos() {
    I.wait(10);
    const botaoVerlancamentos = await I.findByText(PageParcelamentoFaturaCartao.textos.txtVerLancamentos);
    I.waitForVisible(botaoVerlancamentos, 20); 
    I.tap(botaoVerlancamentos);  
  },
  
  async clicarMesFechado() {
    const botaoJulho = await I.findByText(PageParcelamentoFaturaCartao.textos.txtFechado);
    I.waitForVisible(botaoJulho, 10); 
    I.tap(botaoJulho);  
  }, 

  async pagarFatura() {
    const botaoPagarFatura = await I.findByText(PageParcelamentoFaturaCartao.textos.txtPagarFatura);
    I.waitForVisible(botaoPagarFatura, 10); 
    I.tap(botaoPagarFatura);  
  }, 

  async parcelarFatura() {
    const botaoPagarFaturaTotal = await I.findByText(PageParcelamentoFaturaCartao.botoes.btnParcelarFatura);
    I.waitForVisible(botaoPagarFaturaTotal, 10); 
    I.tap(botaoPagarFaturaTotal);  
  }, 

  async confirmarFatura() {
    const botaoConfirmaParcela = await I.findById(PageParcelamentoFaturaCartao.botoes.btnConfirmarParcelar);
    I.waitForVisible(botaoConfirmaParcela, 10); 
    I.tap(botaoConfirmaParcela);  
  },
  
  async selecionarParcela1() {
    const checkSelecionarParc1 = await I.findById(PageParcelamentoFaturaCartao.checkbox.checkParcela1);
    I.waitForVisible(checkSelecionarParc1, 10); 
    I.tap(checkSelecionarParc1); 
  },

  async confirmarParc() {
    const botaoConfirmarPac = await I.findByText(PageParcelamentoFaturaCartao.textos.txtContinuar);
    I.waitForVisible(botaoConfirmarPac, 10); 
    I.tap(botaoConfirmarPac); 
  },

  async confirmarResumo() {
    const botaoConfirmarResumo = await I.findById(PageParcelamentoFaturaCartao.botoes.btnConfirmarResumo);
    I.waitForVisible(botaoConfirmarResumo, 10); 
    I.tap(botaoConfirmarResumo); 
  },

  async confirmarProcesPar() {
    const botaoOkProParce = await I.findById(PageParcelamentoFaturaCartao.botoes.btnProcessadoParc);
    I.waitForVisible(botaoOkProParce, 10); 
    I.tap(botaoOkProParce);
    I.wait(5); 
  },

  
};

  
