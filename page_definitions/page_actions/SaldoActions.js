const { I } = inject();
const pageHome = require('../page_objects/home/PageHome.js');
const pageSaldo = require('../page_objects/saldo/PageSaldo.js');

module.exports = {
  async createAPaymentAccountWithBalance(balance) {
    const paymentAccountData = await I.haveAPaymentAccountWithBalance({
      balance: balance,
      fallback: 'paymentAccountWithBalance'
    });
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async createAPaymentAccountWithoutBalance() {
    const paymentAccountData = await I.haveAPaymentAccountWithoutBalance({
      fallback: 'paymentAccountWithoutBalance'
    });
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async createAPaymentAccountWithBlockedBalance(balance = 1000, blockedBalance = 100) {
    const paymentAccountData = await I.haveAPaymentAccountWithBlockedBalance({
      balance: balance,
      blockedBalance: blockedBalance,
      fallback: 'paymentAccountWithBlockedBalance'
    });
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async selecionarOpcaoVerSaldo() {
    I.waitForElement(await I.findByText(pageHome.textos.txtSaldoDisponivel), 60);
    const btnVerSaldo = await I.findById(pageHome.botoes.btnVerSaldo);
    I.waitForElement(btnVerSaldo, 60);
    I.tap(btnVerSaldo);
  },

  async validarSaldo() {
    const paymentAccount = await I.readNoteWithKey('paymentAccount');
    const { balance } = paymentAccount.account;

    const campoValorSaldo = await I.findById(pageHome.campos.campoValorSaldo);
    I.waitForElement(campoValorSaldo, 30);
    const saldo = await I.grabTextFrom(campoValorSaldo);
    I.assertCurrencyValue(saldo, balance);
  },

  async validarSaldoZerado() {
    const campoValorSaldo = await I.findById(pageHome.campos.campoValorSaldo);
    I.waitForElement(campoValorSaldo, 30);
    const saldo = await I.grabTextFrom(campoValorSaldo);
    I.assertText(saldo, pageHome.textos.txtSaldoZerado);
  },

  async validarSaldoBloqueado() {
    const paymentAccount = await I.readNoteWithKey('paymentAccount');
    const { blockedBalanceResult } = paymentAccount.account;
    const formatedBlockedBalanceResult = parseFloat(blockedBalanceResult).toLocaleString('pt-br', {
      minimumFractionDigits: 2
    });

    const campoValorSaldoBloqueado = await I.findById(pageSaldo.campos.campoValorSaldoBloqueado);
    I.waitForElement(campoValorSaldoBloqueado, 30);
    const saldoBloqueado = await I.grabTextFrom(campoValorSaldoBloqueado);

    I.assertText(saldoBloqueado, formatedBlockedBalanceResult);
  },

  async validarInformacoesSaldoBloqueado() {
    const campoValorSaldoBloqueado = await I.findById(pageSaldo.campos.campoValorSaldoBloqueado);
    I.waitForElement(campoValorSaldoBloqueado, 30);
    I.tap(campoValorSaldoBloqueado);

    I.waitForVisible(await I.findByText(pageSaldo.textos.txtTituloMensagemValorBloqueado), 20);
    I.waitForVisible(await I.findByText(pageSaldo.textos.txtMensagemValorBloqueadoDescricao), 20);
    I.waitForVisible(await I.findByText(pageSaldo.textos.txtMensagemValorBloqueadoInformacoes), 20);
  }
};
