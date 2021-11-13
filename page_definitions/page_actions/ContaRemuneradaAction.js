const { I } = inject();
const pageContaRemunerada = require('../page_objects/outros/PageContaRemunerada.js');
const pageHome = require('../page_objects/home/PageHome.js');

module.exports = {
  async createARemuneratedAccount(balance) {
    const paymentAccountData = await I.haveAPaymentAccountWithBalance({
      balance: balance,
      fallback: 'remuneratedAccount'
    });
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async visualizarSaldoAtual() {
    I.waitForElement(await I.findByText(pageHome.textos.txtSaldoDisponivel), 60);
    const btnVerSaldo = await I.findById(pageHome.botoes.btnVerSaldo);
    I.waitForElement(btnVerSaldo, 60);
    I.tap(btnVerSaldo);

    const campoValorSaldo = await I.findById(pageHome.campos.campoValorSaldo);
    I.waitForElement(campoValorSaldo, 30);
    const saldo = await I.grabTextFrom(campoValorSaldo);
    I.takeNoteOf('amountValue', saldo);
  },

  async clicarContaRemunerada() {
    const cardContaRemunerada = await I.findById(pageContaRemunerada.card.cardContaRemunerada);
    I.waitForElement(cardContaRemunerada, 20);
    I.tap(cardContaRemunerada);
  },

  async visualizarContaRemunerada() {
    I.waitForElement(await I.findByText(pageContaRemunerada.textos.txtRemuneradacaoConta), 20);
    I.waitForElement(await I.findByText(pageContaRemunerada.textos.txtSaldoTotalHoje), 20);
  },

  async visualizarSaldoContaRemunerada() {
    I.waitForElement(await I.findById(pageContaRemunerada.campos.campoSaldo), 20);
  },

  async validarAtributosRemunerada() {
    I.waitForVisible(await I.findByText(await I.readNoteWithKey('amountValue')), 20);
    I.waitForElement(await I.findByText(pageContaRemunerada.textos.txtRendimentoBrutoNoMes), 20);
    I.waitForElement(await I.findByText(pageContaRemunerada.textos.txtImpostoDeRenda), 20);
    I.waitForElement(await I.findByText(pageContaRemunerada.textos.txtIOF), 20);
    I.waitForElement(await I.findByText(pageContaRemunerada.textos.txtRendimentoLiquido), 20);
  },

  async clicarComoFunciona() {
    const txtComoFunciona = await I.findByText(pageContaRemunerada.textos.txtComoFunciona);
    I.waitForElement(txtComoFunciona, 20);
    I.tap(txtComoFunciona);
    I.waitForElement(await I.findByText(pageContaRemunerada.textos.txtRendimento), 20);
  }
};
