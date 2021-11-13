const { I } = inject();

const pageHome = require('../page_objects/home/PageHome.js');
const PagePagamentos = require('../page_objects/pagamentos/PagePagamentos');

module.exports = {
  async createAPaymentAccountWithoutBalance() {
    const paymentAccountData = await I.haveAPaymentAccountWithoutBalance();
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async createAPaymentAccountWithIrregularSituation() {
    const paymentAccountData = I.haveAPaymentAccountWithIrregularSituation();
    await I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async selecionaOpcaoPagamentos() {
    const btnPagamentos = await I.findById(pageHome.botoes.btnPagamentos);
    await I.scrollUntil({
      scrollLocator: await I.findById(pageHome.carrossel.cardExtrato),
      toElementLocator: btnPagamentos,
      direction: 'right'
    });
    I.waitForVisible(btnPagamentos, 30);
    I.tap(btnPagamentos, 0, 0);
  },

  async digitarBoletoValido() {
    const config = await I.readYmlWithName('dados');
    const codigoDebarra = await I.findById(PagePagamentos.campos.codigoDebarra);
    I.waitForVisible(codigoDebarra, 20);
    I.fillField(codigoDebarra, config.paymentsModule.validBillet);
  },

  async digitarBoletoInvalido() {
    const config = await I.readYmlWithName('dados');
    const codigoDebarra = await I.findById(PagePagamentos.campos.codigoDebarra);
    I.waitForVisible(codigoDebarra, 20);
    I.fillField(codigoDebarra, config.paymentsModule.invalidBillet);
  },

  async selecionaOpcaoContinuar() {
    const btnContinuar = await I.findById(PagePagamentos.botoes.continuar);
    I.waitForVisible(btnContinuar, 20);
    I.tap(btnContinuar, 0, 0);
  },

  async selecionaOpcaoPagar() {
    const btnPagar = await I.findById(PagePagamentos.botoes.pagar);
    I.waitForVisible(btnPagar);
    I.tap(btnPagar, 0);
  },

  async selecionaOpcaoDeAgendamento() {
    const btnAgendar = await I.findById(PagePagamentos.botoes.agendar);
    I.waitForVisible(btnAgendar, 30);
    I.tap(btnAgendar, 0);
  },

  async validarPagamentoBoletoValido() {
    I.waitForVisible(await I.findByText(PagePagamentos.botoes.recibo), 30);
  },

  async validarPagamentoBoletoInvalido() {
    !I.waitForVisible(await I.findByText(PagePagamentos.botoes.recibo), 30);
  }
};
