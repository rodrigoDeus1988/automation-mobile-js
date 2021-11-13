const { I } = inject();
const pagePerfil = require('../page_objects/perfil/PagePerfil.js');

module.exports = {
  async createAPaymentAccountToClosure() {
    const paymentAccountData = await I.haveAPaymentAccountToClosure();
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async createAPaymentAccount() {
    const paymentAccountData = await I.haveAPaymentAccountWithoutBalance();
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async acessarPerfil() {
    const campoPerfil = await I.findById(pagePerfil.campos.campoPerfil);
    I.waitForVisible(campoPerfil, 30);
    I.tap(campoPerfil);
  },

  async clicarEncerrarConta() {
    const btnEncerrarConta = await I.findById(pagePerfil.botoes.btnEncerrarConta);
    I.waitForElement(btnEncerrarConta, 20);
    I.tap(btnEncerrarConta);
  },

  async informarMotivoEncerramento() {
    const campoMotivoCancelamento = await I.findById(pagePerfil.campos.campoMotivoCancelamento);
    I.waitForVisible(campoMotivoCancelamento, 20);
    I.tap(campoMotivoCancelamento);

    const txtResposta = await I.findByText(pagePerfil.textos.txtResposta);
    I.waitForElement(txtResposta, 20);
    I.tap(txtResposta);

    const btnContinuar = await I.findById(pagePerfil.botoes.btnContinuar);
    I.waitForElement(btnContinuar, 20);
    I.tap(btnContinuar);

    I.waitForVisible(await I.findByText(pagePerfil.textos.txtCondicoesEncerramento), 20);
    I.tap(await I.findById(pagePerfil.botoes.btnConfirmarCancelamento));

    const btnConfirmar = await I.findById(pagePerfil.botoes.btnConfirmar);
    I.waitForElement(btnConfirmar, 20);
    I.tap(btnConfirmar);
  },

  async validarEncerramentoContaPagamento() {
    const txtSolicitacaoEnviada = await I.findByText(pagePerfil.textos.txtSolicitacaoEnviada);
    I.waitForElement(txtSolicitacaoEnviada, 20);
    I.seeElement(txtSolicitacaoEnviada);
  }
};
