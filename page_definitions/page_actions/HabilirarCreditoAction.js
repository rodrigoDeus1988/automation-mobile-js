const { I } = inject();
const pageHabilitarCredito = require('../page_objects/habilitar_credito/PageHabilirarCredito.js');

module.exports = {

  async clicarComecar() {
    const botaoComecar = await I.findById(pageHabilitarCredito.botoes.btnComecar);
    I.waitForElement(botaoComecar, 20);
    I.tap(botaoComecar);
  },

  async clicarPermitirDepois() {
    const botaoPermitirDepois = await I.findByText(pageHabilitarCredito.botoes.btnPermitirDepois);
    I.waitForElement(botaoPermitirDepois, 10);
    I.tap(botaoPermitirDepois); 
  },



  async clicarBotaoEntrar() {
    const botaoEntrar = await I.findById(pageHabilitarCredito.botoes.btnEntrar);
    I.waitForElement(botaoEntrar, 10);
    I.tap(botaoEntrar);
  },

  async inserirCpf(cpf) {
    const campoCPF = await I.findById(pageHabilitarCredito.campos.campoCPFid);
    I.waitForVisible(campoCPF, 10);
    I.fillField(campoCPF, cpf);
    const botaoContinuar = await I.findById(pageHabilitarCredito.botoes.btnContinuar);
    I.waitForVisible(botaoContinuar, 5);
    I.tap(botaoContinuar);

  },

  async clicarLabelSenha() {
    const labelSenha = await I.findById(pageHabilitarCredito.campos.campoSenha);
    I.waitForElement(labelSenha, 5);
    I.tap(labelSenha); 
  },

  async inserirSenha(senha) {
    const camposSenha = await I.findById(pageHabilitarCredito.campos.campoSenha);
    I.waitForVisible(camposSenha, 5);
    I.fillField(camposSenha, senha);

    const botaoEntrar = await I.findById(pageHabilitarCredito.botoes.btnEntrar);
    I.waitForElement(botaoEntrar, 20);
    I.tap(botaoEntrar);

  },

  async clicarBannerCredito() {
    const banner = await I.findById(pageHabilitarCredito.textos.txtConhecaAtive);
    I.waitForElement(banner, 20);
    I.tap(banner);
    I.wait(5);
  },

  async clicarTaxasEncargos() {
    const botaoFuncaoCredito = await I.findById(pageHabilitarCredito.textos.txtTaxasEncargos);
    I.waitForElement(botaoFuncaoCredito, 20);
    I.tap(botaoFuncaoCredito);
    I.wait(5);
    const botaofechar = await I.findById(pageHabilitarCredito.botoes.btnFechar);
    I.waitForElement(botaofechar, 5);
    I.tap(botaofechar);
    I.wait(5);
  },

  async clicarAtivarFuncaoCredito() {
    const botaoCredito = await I.findById(pageHabilitarCredito.botoes.btnAtivarFuncaoCredito);
    I.waitForElement(botaoCredito, 30);
    I.wait(20);
    I.tap(botaoCredito);  
  },

  async selecionarMesVencimentoFatura() {
    const selecionarDataVec = await I.findById(pageHabilitarCredito.botoes.btnSelecioneVencimento);
    I.waitForElement(selecionarDataVec, 20);
    I.tap(selecionarDataVec); 

    const selecionarMes = await I.findById(pageHabilitarCredito.botoes.btnDiaVencimento);
    I.waitForElement(selecionarMes, 5);
    I.tap(selecionarMes);
    I.wait(5);
  },

  async clicarContinuarCredito() {
    const botaoContinuarCredito = await I.findById(pageHabilitarCredito.botoes.btnContinuar);
    I.waitForElement(botaoContinuarCredito, 5);
    I.tap(botaoContinuarCredito);
  },

  async clicarIrParaCartoes() {
    const botaoIrParaCartoes = await I.findById(pageHabilitarCredito.botoes.btnIrParaCartoes);
    I.waitForElement(botaoIrParaCartoes, 20);
    I.tap(botaoIrParaCartoes);
    I.wait(10);   
  },

}; 