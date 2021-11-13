const { I } = inject();
const pageContaPremiada = require('../page_objects/outros/PageContaPremiada.js');

module.exports = {
  async clicarCardContaPremiada() {
    const cardContaPremiada = await I.findById(pageContaPremiada.card.contaPremiada);
    I.waitForVisible(cardContaPremiada, 20);
    I.tap(cardContaPremiada);
  },

  async visualizarContaPremiada() {
    I.waitForVisible(await I.findByText(pageContaPremiada.textos.txtContaPremiada), 20);
    I.waitForVisible(await I.findByText(pageContaPremiada.textos.txtSeuNumeroDaSorte), 20);
    I.waitForVisible(await I.findByText(pageContaPremiada.textos.txtVoceEstaConcorrendo), 20);
    I.waitForVisible(await I.findByTextPartial(pageContaPremiada.textos.txtProximoSorteio), 20);
  },

  async visualizarUltimosSorteios() {
    const txtVejaAquiTodosUltimosSorteios = await I.findByText(
      pageContaPremiada.textos.txtVejaAquiTodosUltimosSorteios
    );
    I.waitForVisible(txtVejaAquiTodosUltimosSorteios, 20);
    I.tap(txtVejaAquiTodosUltimosSorteios);

    I.waitForVisible(await I.findByText(pageContaPremiada.textos.txtUltimasPremiacoes), 20);
    I.waitForVisible(await I.findByTextPartial(pageContaPremiada.textos.txtNumeroDoSorteado), 20);

    const btnEntendi = await I.findByText(pageContaPremiada.botoes.btnEntendi);
    I.waitForVisible(btnEntendi, 20);
    I.tap(btnEntendi);
  },

  async clicarSaibaMais() {
    const txtSaibaMais = await I.findByText(pageContaPremiada.textos.txtSaibaMais);
    I.waitForVisible(txtSaibaMais, 20);
    I.tap(txtSaibaMais);

    I.waitForVisible(await I.findByText(pageContaPremiada.textos.txtRegulamentoContaPremiada), 20);
    I.tap(await I.findByText(pageContaPremiada.botoes.btnLiEConcordo));

    I.waitForVisible(await I.findByText(pageContaPremiada.textos.txtContaPremiada), 10);
  }
};
