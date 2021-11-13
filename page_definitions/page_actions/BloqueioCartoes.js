const { I } = inject();
const PageBloqueioDefinitivo = require('../page_objects/cartoes/BloqueioCartoes.js');

module.exports = {

  async clicarCartoesTsys() {
    I.wait(30);
    const botaoCartoesTsys = await I.findById(PageBloqueioDefinitivo.botoes.btnHomeCartoes);
    I.waitForVisible(botaoCartoesTsys, 40);
    I.tap(botaoCartoesTsys);
  },

  async clicarEngrenagem() {
    I.wait(10);
    const botaoEngrenagem = await I.findByText(PageBloqueioDefinitivo.botoes.btnEngrenagem2);
    I.waitForVisible(botaoEngrenagem, 40);
    I.tap(botaoEngrenagem);
  },

  async clicarBloqueioDefinitivo() {
    const botaoBloqueioDefinitivo = await I.findById(PageBloqueioDefinitivo.textos.txtBloqueioDefinitivo);
    I.waitForElement(botaoBloqueioDefinitivo, 20);
    I.tap(botaoBloqueioDefinitivo);
  },

  async clicarMotivoBloqueio() {
    const botaoMotivoBloqueio = await I.findById(PageBloqueioDefinitivo.botoes.btnListaBloqueio);
    I.waitForElement(botaoMotivoBloqueio, 10);
    I.tap(botaoMotivoBloqueio);
  },

  async clicarBloquear() {
    const botaoBloquear = await I.findById(PageBloqueioDefinitivo.botoes.btnBloquear);
    I.waitForElement(botaoBloquear, 10);
    I.tap(botaoBloquear);
  },

  async clicarFechar() {
    const botaoFechar = await I.findByText(PageBloqueioDefinitivo.botoes.btnFechar);
    I.waitForElement(botaoFechar, 10);
    I.tap(botaoFechar);
    I.wait(5);
  },

  async clicarBloqueioTemporario() {
    const botaoBloqueioTemp = await I.findById(PageBloqueioDefinitivo.botoes.btnBloqueioTemporario);
    I.waitForElement(botaoBloqueioTemp, 10);
    I.tap(botaoBloqueioTemp);
  },

  async clicarBloquearTemp() {
    const botaoBloqueioTemp = await I.findById(PageBloqueioDefinitivo.botoes.btnbloquearflag);
    I.waitForElement(botaoBloqueioTemp, 10);
    I.tap(botaoBloqueioTemp);
  },

  async vaidarTextoSucesso() {
    const textoSucessoBloqueio = await I.findByText(PageBloqueioDefinitivo.textos.txtBloqueioTemporario);
    I.waitForVisible(textoSucessoBloqueio, 30);

    const botaoContinuar = await I.findByText(PageBloqueioDefinitivo.botoes.btnContinuar);
    I.waitForVisible(botaoContinuar, 10);
    I.tap(botaoContinuar);
  },

  async clicarDesbloquearCad(){
    const botaoDesbloqueio = await I.findById(PageBloqueioDefinitivo.botoes.btnbloquearflag);
    I.waitForVisible(botaoDesbloqueio, 20);
    I.tap(botaoDesbloqueio);
    I.wait(5);

  },

  async validarTituloConfigurarCartao() {
    const textoTituloConfigurarCartao = await I.findByText(PageBloqueioDefinitivo.textos.txtConfigurarCartao);
    I.waitForVisible(textoTituloConfigurarCartao, 20);
  },

  async clicarCancelar() {
    const botaoCancelar = await I.findById(PageBloqueioDefinitivo.botoes.btnCancelar);
    I.waitForElement(botaoCancelar, 10);
    I.tap(botaoCancelar);
    I.wait(5);
  },

}; 