const { I } = inject();

const pageHome = require('../page_objects/home/PageHome.js');
const pageBoleto = require('../page_objects/boleto/PageBoleto.js');

module.exports = {
  async createAPaymentAccountWithoutBalance() {
    const paymentAccountData = await I.haveAPaymentAccountWithoutBalance();
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async createAPaymentAccountWithIrregularSituation() {
    const paymentAccountData = I.haveAPaymentAccountWithIrregularSituation();
    await I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async hideDeviceKeyboard() {
    // TODO: Workaround para ocultar o teclado após a digitação.
    // No iOs a funcão I.hideDeviceKeyboard() não está funcionando
    const qualValor = await I.findByText('Qual o valor do depósito?');
    I.waitForVisible(qualValor, 20);
    I.tap(qualValor);
  },

  async selecionaOpcaoDepositoPorBoleto() {
    const btnDepositoPorBoleto = await I.findById(pageHome.botoes.btnDepositoPorBoleto);
    I.waitForVisible(btnDepositoPorBoleto, 30);
    I.tap(btnDepositoPorBoleto, 0, 0);
  },

  async informaValorDoDeposito() {
    const campoValor = await I.findById(pageBoleto.campos.campoValor);
    I.waitForVisible(campoValor, 20);
    I.fillField(campoValor, '25,00');
    I.takeNoteOf('billetValue', 'R$ 25,00');
    this.hideDeviceKeyboard();
  },

  async informaValorDoDepositoMinimo() {
    const campoValor = await I.findById(pageBoleto.campos.campoValor);
    I.waitForVisible(campoValor, 20);
    I.fillField(campoValor, '20,00');
    I.takeNoteOf('billetValue', 'R$ 20,00');
    this.hideDeviceKeyboard();
  },

  async informaValorDoDepositoMaximo() {
    const campoValor = await I.findById(pageBoleto.campos.campoValor);
    I.waitForVisible(campoValor, 20);
    I.fillField(campoValor, '5.000,00');
    I.takeNoteOf('billetValue', 'R$ 5.000,00');
    this.hideDeviceKeyboard();
  },

  async informaValorDoDepositoAcimaDoLimite() {
    const campoValor = await I.findById(pageBoleto.campos.campoValor);
    I.waitForVisible(campoValor, 20);
    I.fillField(campoValor, '5.000,01');
  },

  async informaValorDoDepositoAbaixoDoLimite() {
    const campoValor = await I.findById(pageBoleto.campos.campoValor);
    I.waitForVisible(campoValor, 20);
    I.fillField(campoValor, '19,99');
  },

  async validarValorMaximoPorBoleto() {
    I.waitForVisible(await I.findByText(pageBoleto.textos.txtValorMaximoPorBoleto), 30);
  },

  async validarValorMinimoPorBoleto() {
    I.waitForVisible(await I.findByText(pageBoleto.textos.txtValorMinimoPorBoleto), 30);
  },

  async selecionaOpcaoGerarBoleto() {
    const btnGerarBoleto = await I.findById(pageBoleto.botoes.btnGerarBoleto);
    I.waitForVisible(btnGerarBoleto, 20);
    I.tap(btnGerarBoleto, 0, 0);
  },

  async validarMensagemMigracaoConta() {
    I.waitForVisible(await I.findByText(pageBoleto.textos.txtMensagemLimiteMovimentacao), 30);
    I.waitForVisible(await I.findByText(pageBoleto.textos.txtMensagemRegraBancoCentral), 30);
    I.waitForVisible(await I.findByTextPartial(pageBoleto.textos.txtMensagemOferta), 30);
    I.waitForVisible(
      await I.findByTextPartial(pageBoleto.textos.txtMensagemAproveiteVantagens),
      30
    );
  },

  async validarGeracaoBoleto() {
    I.waitForVisible(await I.findByText(pageBoleto.textos.txtCodigoBoleto), 60);
    I.waitForVisible(await I.findByText(pageBoleto.textos.txtComprovante), 20);
    I.waitForVisible(await I.findByText(await I.readNoteWithKey('billetValue')), 20);
  }
};
