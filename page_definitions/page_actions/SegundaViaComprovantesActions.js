const { I } = inject();

const pageHome = require('../page_objects/home/PageHome.js');
const pageComprovantes = require('../page_objects/segunda_via_comprovantes/PageComprovantes.js');

module.exports = {
  async createAPaymentAccountWithBalance() {
    const paymentAccountData = await I.haveAPaymentAccountWithBalance();
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async selecionaOpcaoSegundaViaComprovantes() {
    const btnSegundaVia = await I.findById(pageHome.botoes.btnSegundaVia);
    await I.scrollUntil({
      scrollLocator: await I.findById(pageHome.carrossel.cardExtrato),
      toElementLocator: btnSegundaVia,
      direction: 'right'
    });
    I.waitForVisible(btnSegundaVia, 30);
    I.tap(btnSegundaVia, 0, 0);
  },

  async mostraTelaComprovantes() {
    I.waitForVisible(await I.findByText(pageComprovantes.elementos.pageSegundaVia), 20);
  },
  async selecionaOpcaoInternaSegundaViaComprovantes() {
    const btnSegundaVia = await I.findByText(pageComprovantes.botoes.btnListSegundaVia);
    I.waitForVisible(btnSegundaVia, 30);
    I.tap(btnSegundaVia, 0, 0);
  },
  async mostraTeladeListadeComprovantes() {
    I.waitForVisible(await I.findByText(pageComprovantes.elementos.pageSegundaViaInterna), 20);
  }
};
