const { I } = inject();
const PagePagamentoFaturaCartao = require('../page_objects/cartoes/PagePagamentoFaturaCartao.js');

module.exports = {

  async clicarFaturaFechada() {
    I.wait(10);
    const abaFaturaFechada = await I.findByText(PagePagamentoFaturaCartao.textos.txtFaturaFechada);
    I.waitForVisible(abaFaturaFechada, 20);
    I.seeTextEquals('Fechada', abaFaturaFechada); 
    I.tap(abaFaturaFechada);  
  },
  
  async clicarPagarFatura() {
    const botaoPagarFatura = await I.findByText(PagePagamentoFaturaCartao.textos.txtPagarFatura);
    I.waitForVisible(botaoPagarFatura, 10); 
    I.seeTextEquals('Pagar Fatura', botaoPagarFatura); 
    I.tap(botaoPagarFatura);
    I.wait(5); 
  },

  async clicarPagarTotal() {
    const botaoPagarFaturaTotal = await I.findByText(PagePagamentoFaturaCartao.textos.txtPagarFaturaTotal);
    I.waitForVisible(botaoPagarFaturaTotal, 10); 
    I.seeTextEquals('Pagar total', botaoPagarFaturaTotal); 
    I.tap(botaoPagarFaturaTotal);
    I.wait(10); 
  },

  async clicarCopiarCodigo() {
    const botaocopiarCodigo = await I.findById(PagePagamentoFaturaCartao.botoes.btnCopiarCodigo);
    I.waitForVisible(botaocopiarCodigo, 20); 
    I.tap(botaocopiarCodigo);
    I.wait(5); 
  },

  async validarMensagemSucesso() {
    const msgSucessoCopiado = await I.findByText(PagePagamentoFaturaCartao.textos.txtCodigoBarraCopiado);
    I.waitForVisible(msgSucessoCopiado, 10); 
    I.seeTextEquals('Código de barras copiado!', msgSucessoCopiado); 

    const botaoOkSucesso = await I.findByText(PagePagamentoFaturaCartao.textos.txtOK);
    I.waitForVisible(botaoOkSucesso, 10); 
    I.seeTextEquals('Ok', botaoOkSucesso); 
    I.tap(botaoOkSucesso);
  },


  
};

  
