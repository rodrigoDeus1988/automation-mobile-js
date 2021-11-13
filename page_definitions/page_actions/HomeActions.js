const { I } = inject();
const pageHome = require('../page_objects/home/PageHome.js');
const pageExtrato = require('../page_objects/extrato/PageExtrato.js');
const pageTransferencia = require('../page_objects/transferencia/PageTransferenciaContasMidway.js');
const pageDeposito = require('../page_objects/boleto/PageBoleto.js');
const pageCartoes = require('../page_objects/cartoes/PageCartoes.js');
const pageOutros = require('../page_objects/outros/PageOutros.js');
const pageChat = require('../page_objects/chat/PageChat.js');

module.exports = {
  async createAPaymentAccountWithCard(cardType, riachueloCard) {
    const paymentAccountData = await I.haveAPaymentAccountWithCard({
      cardType,
      riachueloCard,
      fallback: 'paymentAccountWithCard'
    });
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async clicarAtivarToken() {
    const txtModalBtn = await I.findByText('Habilite o token no app');
    I.waitForVisible(txtModalBtn, 60);
    I.seeElement(txtModalBtn);
    I.tap(txtModalBtn);
    const btnAtivarToken = await I.findById(pageHome.botoes.btnAtivarToken);
    I.waitForVisible(btnAtivarToken, 60);
    I.tap(btnAtivarToken);
  },

  async clicarCardExtratoHome() {
    const cardExtrato = await I.findById(pageHome.carrossel.cardExtrato);
    I.waitForVisible(cardExtrato, 60);
    I.tap(cardExtrato);
  },

  async visualizarTelaExtratoHome() {
    const txtExtrato = await I.findByText(pageExtrato.textos.txtExtrato);
    I.waitForVisible(txtExtrato, 60);
    I.seeElement(txtExtrato);
  },

  async clicarCardTransferenciaHome() {
    const cardTransferencia = await I.findById(pageHome.carrossel.cardTransferencia);
    I.waitForVisible(cardTransferencia, 60);
    I.tap(cardTransferencia);
  },

  async visualizarTelaTransferenciaHome() {
    const txtParaQueContaQuerTransferir = await I.findByText(
      pageTransferencia.textos.txtParaQueContaQuerTransferir
    );
    I.waitForVisible(txtParaQueContaQuerTransferir, 60);
    I.seeElement(txtParaQueContaQuerTransferir);
  },

  async clicarCardDepositoPorBoletoHome() {
    const cardDepositoPorBoleto = await I.findById(pageHome.carrossel.cardDepositoPorBoleto);
    I.waitForVisible(cardDepositoPorBoleto, 60);
    I.tap(cardDepositoPorBoleto);
  },

  async visualizarTelaDepositoPorBoletoHome() {
    const txtQualValorDoDeposito = await I.findByText(pageDeposito.textos.txtQualValorDoDeposito);
    I.waitForVisible(txtQualValorDoDeposito, 60);
    I.seeElement(txtQualValorDoDeposito);
  },

  async clicarCartoesHome() {
    const btnCartoes = await I.findById(pageHome.botoes.btnCartoes);
    I.waitForVisible(btnCartoes, 60);
    I.tap(btnCartoes);
  },

  async visualizarTelaCartoesHome() {
    const labelCartaoDeCredito = await I.findByText(pageCartoes.textos.labelCartaoDeCredito);
    I.waitForVisible(labelCartaoDeCredito, 60);
    I.seeElement(labelCartaoDeCredito);
  },

  async clicarOutrosHome() {
    const btnOutros = await I.findById(pageHome.botoes.btnOutros);
    I.waitForVisible(btnOutros, 90);
    I.seeElement(btnOutros);
    I.tap(btnOutros);
  },

  async visualizarTelaOutrosHome() {
    const labelOutros = await I.findByText(pageOutros.textos.labelOutros);
    I.waitForVisible(labelOutros, 60);
    I.seeElement(labelOutros);
  },

  async clicarChatHome() {
    const btnChat = await I.findById(pageHome.botoes.btnChat);
    I.waitForVisible(btnChat, 60);
    I.tap(btnChat);
  },

  async visualizaTelaChat() {
    const btnVoltar = await I.findById(pageChat.botoes.btnVoltar);
    I.waitForVisible(btnVoltar, 60);
    I.seeElement(btnVoltar);
  }
};
