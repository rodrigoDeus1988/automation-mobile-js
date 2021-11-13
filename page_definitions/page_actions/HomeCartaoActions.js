const { I } = inject();
const PageHomeCartao = require('../../page_definitions/page_objects/cartoes/PageHomeCartao.js');

module.exports = {
  async createAPaymentAccountWithoutCard() {
    const paymentAccountData = await I.haveAPaymentAccountWithBalance({
      fallback: 'paymentAccountWithBalance'
    });
    I.takeNoteOf('paymentAccount', paymentAccountData);
  },

  async clicarHomeCartoes() {
    const btnHomeCartoes = await I.findById(PageHomeCartao.botoes.btnHomeCartoes);
    I.waitForElement(btnHomeCartoes, 20);
    I.tap(btnHomeCartoes);
  },

  async conferirElementos() {
    I.waitForElement(await I.findByText(PageHomeCartao.textos.txtCartao), 20);
    I.waitForElement(await I.findByText(PageHomeCartao.textos.txtFaturas), 20);
    I.waitForElement(await I.findByText(PageHomeCartao.textos.txtMovimentacoes), 30);
  },

  async clicarVerLancamento() {
    const dataAtual = new Date();
    const mes = dataAtual.getMonth();

    const btnVerLancamento = await I.findById(
      PageHomeCartao.botoes.btnVerFatura(await I.getFullMonth(mes))
    );
    await I.scrollUntil({
      scrollLocator: await I.findById(PageHomeCartao.botoes.btnCarrocelFatura),
      toElementLocator: btnVerLancamento,
      direction: 'left'
    });
    I.tap(btnVerLancamento);

    I.waitForElement(await I.findByText(PageHomeCartao.textos.txtFaturas), 20);

    const btnVoltar = await I.findById(PageHomeCartao.botoes.bntVoltar);
    I.waitForVisible(btnVoltar, 20);
    I.tap(btnVoltar);
  },

  async clicarVerFatura() {
    const dataAtual = new Date();
    let mes = dataAtual.getMonth();

    if (mes) {
      mes = mes - 1;
    }

    const btnVerFatura = await I.findById(
      PageHomeCartao.botoes.btnVerFatura(await I.getFullMonth(mes))
    );
    await I.scrollUntil({
      scrollLocator: await I.findById(PageHomeCartao.botoes.btnCarrocelFatura),
      toElementLocator: btnVerFatura,
      direction: 'left'
    });
    I.tap(btnVerFatura);

    I.waitForVisible(await I.findByText(PageHomeCartao.textos.txtFaturas), 20);

    const btnVoltar = await I.findById(PageHomeCartao.botoes.bntVoltar);
    I.waitForVisible(btnVoltar, 20);
    I.tap(btnVoltar);
  },

  async validarTelaSemCartao() {
    I.waitForElement(await I.findByTextPartial(PageHomeCartao.textos.txtSemCartao), 20);
  }
};
